import { useReducer } from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { TextField } from '@material-ui/core';
import axios from 'axios';

const initialState = {
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
  message: null,
};

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
  return validateEmail(state).valid && validateMessage(state).valid;
}

function updateEmailStateWithValue(value, state) {
  state = {
    ...state,
    email: { ...state.email, value: value, ...validateEmail(value) },
  };
}

function updateMessageStateWithValue(value, state) {
  state = {
    ...state,
    email: { ...state.email, value: value, ...validateEmail(value) },
  };
}

function setMessage(value, state) {}

function reducer(state, action) {
  switch (action.type) {
    case 'touch-email':
      return { ...state, email: { ...state.email, touched: true } };
    case 'touch-message':
      return { ...state, message: { ...state.message, touched: true } };
    case 'touch-all':
      return {
        ...state,
        email: { ...state.email, touched: true },
        message: { ...state.message, touched: true },
      };
    case 'change-email':
      return updateEmailStateWithValue(action.value, state);
    case 'change-message':
      return updateMessageStateWithValue(action.value, state);
    case 'submitting':
      return { ...state, submitting: action.submitting };
    case 'submitted':
      return { ...state, submitted: action.submitted };
    case 'error':
      return { ...state, message: { message: action.error, error: true } };
    case 'success': {
      return {
        ...state,
        message: {
          message:
            'Thank you, your message has been submitted. I will get back to you as soon as possible.',
          error: false,
        },
      };
    }
    case 'reset':
      return initialState;
    default:
      throw new Error();
  }
}

export default function ContactForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  console.log(state);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'touch-all' });
    if (!isValid(state)) {
      return;
    }
    dispatch({ type: 'submitting' });
    axios({
      method: 'POST',
      url: 'https://formspree.io/xjvjppwl',
      data: {
        email: state.email,
        message: state.message,
      },
    })
      .then((response) => {
        handleServerResponse(
          true,
          'Thank you, your message has been submitted.'
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };

  const handleServerResponse = (ok, msg) => {
    if (ok) {
      dispatch({ type: 'set-input' });
    }
  };

  return (
    <form className='flex flex-col' onSubmit={handleSubmit}>
      <FieldEntry>
        <TextField
          id='email'
          name='email'
          label='Email Address'
          variant='outlined'
          fullWidth
          onChange={(e) =>
            dispatch({ type: 'change-email', value: e.target.value })
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
          onChange={(e) =>
            dispatch({ type: 'change-message', value: e.target.value })
          }
        />
      </FieldEntry>
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
            focus:outline-none
            text-white 
            rounded-lg 
            flex
            items-center'
      type='submit'
      disabled={disabled}
    >
      <HiOutlineMail className='mr-2 mt-0.5'></HiOutlineMail>
      Send
    </button>
  );
}

function FieldEntry({ children }) {
  return <div className='mb-4 w-80'>{children}</div>;
}
