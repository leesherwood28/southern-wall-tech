import { useReducer } from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { MdDone, MdErrorOutline } from 'react-icons/md';
import { TextField } from '@material-ui/core';
import axios from 'axios';

function getInitState() {
  return {
    email: {
      value: '',
      touched: false,
      valid: false,
      message: '',
    },
    message: {
      value: '',
      touched: false,
      valid: false,
      message: '',
    },
    submitted: false,
    submitting: false,
    displayedMessage: null,
  };
}

function isEmpty(value) {
  return !value || /^\s*$/.test(value);
}

function validateEmail(email) {
  if (isEmpty(email)) {
    return {
      valid: false,
      message: 'Please enter a contact email address',
    };
  }

  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    return {
      valid: false,
      message: 'Invalid email address',
    };
  }
  return {
    valid: true,
    message: '',
  };
}

function validateMessage(message) {
  if (isEmpty(message)) {
    return {
      valid: false,
      message: 'Please enter a message',
    };
  }
  return {
    valid: true,
    message: '',
  };
}

function isValid(state) {
  return state.email.valid && state.message.valid;
}

function updateEmailStateWithValue(value, state) {
  return {
    ...state,
    email: {
      ...state.email,
      value: value,
      ...validateEmail(value),
    },
  };
}

function setStateEmailValue(value, state) {
  return {
    ...state,
    message: { ...state.message, value: value, ...validateMessage(value) },
  };
}

function setStateMessageValue(message, isError, state) {
  return {
    ...state,
    displayedMessage: { message: message, error: isError },
  };
}

function setStateEmailValid(state) {
  return {
    ...state,
    email: { ...state.email, ...validateEmail(state.email.value) },
  };
}

function setStateMessageValid(state) {
  return {
    ...state,
    message: { ...state.message, ...validateMessage(state.message.value) },
  };
}

function setStateEmailTouched(state) {
  return { ...state, email: { ...state.email, touched: true } };
}

function setStateMessageTouched(state) {
  return { ...state, message: { ...state.message, touched: true } };
}

function validateState(state) {
  state = setStateEmailTouched(state);
  state = setStateMessageTouched(state);
  state = setStateEmailValid(state);
  state = setStateMessageValid(state);
  return state;
}

function reducer(state, action) {
  switch (action.type) {
    case 'touch-email':
      return setStateEmailTouched(state);
    case 'touch-message':
      return setStateMessageTouched(state);
    case 'validate':
      return validateState(state);
    case 'change-email':
      return updateEmailStateWithValue(action.value, state);
    case 'change-message':
      return setStateEmailValue(action.value, state);
    case 'clear-message':
      return { ...state, displayedMessage: null };
    case 'submitting':
      return { ...state, submitting: action.submitting };
    case 'submitted':
      return { ...state, submitted: action.submitted };
    case 'error':
      return setStateMessageValue(action.error, true, state);
    case 'success': {
      return setStateMessageValue(action.message, false, state);
    }
    case 'reset':
      return getInitState();
    default:
      throw new Error('action not specified');
  }
}

export default function ContactForm({ className }) {
  const [state, dispatch] = useReducer(reducer, getInitState());

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'validate' });
    dispatch({ type: 'clear-message' });
    if (!isValid(state)) {
      return;
    }
    dispatch({ type: 'submitting' });
    axios({
      method: 'POST',
      url: 'https://formspree.io/xjvjppwl',
      data: {
        email: state.email.value,
        message: state.message.value,
      },
    })
      .then((response) => {
        dispatch({ type: 'reset' });
        handleServerResponse(
          true,
          'Thank you, your message has been submitted. I will get back to you as soon as possible.'
        );
      })
      .catch((error) => {
        handleServerResponse(
          false,
          'Something went wrong with processing your request, please try again later.'
        );
      });
  };

  const handleServerResponse = (ok, message) => {
    if (ok) {
      dispatch({ type: 'success', message: message });
    } else {
      dispatch({ type: 'error', error: message });
    }
  };

  return (
    <form className={`flex flex-col ${className}`} onSubmit={handleSubmit}>
      <FieldEntry>
        <TextField
          id='email'
          name='email'
          label='Email Address'
          variant='outlined'
          fullWidth
          value={state.email.value}
          onChange={(e) =>
            dispatch({ type: 'change-email', value: e.target.value })
          }
          onBlur={() => dispatch({ type: 'touch-email' })}
          error={!state.email.valid && state.email.touched}
          helperText={
            !state.email.valid && state.email.touched ? state.email.message : ''
          }
        />
      </FieldEntry>
      <FieldEntry>
        <TextField
          id='message'
          type='text'
          name='message'
          label='Message'
          className='mb-2'
          multiline
          rows={4}
          variant='outlined'
          fullWidth
          value={state.message.value}
          onChange={(e) =>
            dispatch({ type: 'change-message', value: e.target.value })
          }
          onBlur={() => dispatch({ type: 'touch-message' })}
          error={!state.message.valid && state.message.touched}
          helperText={
            !state.message.valid && state.message.touched
              ? state.message.message
              : ''
          }
        />
      </FieldEntry>
      {state.displayedMessage ? (
        <div
          className={`p-2 text-white rounded-md mb-4 flex items-center ${
            state.displayedMessage.error ? 'bg-red-500' : 'bg-green-700'
          }`}
        >
          {state.displayedMessage.error ? (
            <MdErrorOutline className='mr-2 mt-0.5'></MdErrorOutline>
          ) : (
            <MdDone className='mr-2 mt-0.5'></MdDone>
          )}
          {state.displayedMessage.message}
        </div>
      ) : (
        ''
      )}

      <div className='self-end'>
        <SubmitButton></SubmitButton>
      </div>
    </form>
  );
}

function SubmitButton({ disabled }) {
  return (
    <button
      className='
            px-4
            py-2
            bg-pink-700
            hover:bg-pink-600 
            focus:bg-pink-600
            active:bg-pink-700 
            disabled:opacity-50
            disabled:pointer-events-none
            focus:outline-none
            text-white 
            rounded-lg 
            flex
            items-center'
      type='submit'
      disabled={true}
    >
      <HiOutlineMail className='mr-2 mt-0.5'></HiOutlineMail>
      Send
    </button>
  );
}

function FieldEntry({ children }) {
  return <div className='mb-4 w-full'>{children}</div>;
}
