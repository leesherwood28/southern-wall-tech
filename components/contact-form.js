import { useForm, ValidationError } from '@formspree/react';
import { TextField } from 'formik-material-ui';
import { HiOutlineMail } from 'react-icons/hi';

export default function ContactForm() {
  const [state, handleSubmit] = useForm('xjvjppwl');

  const fieldValid = (field) => {
    const error = state.errors.find((e) => e.field === field);
    if (!error) {
      return { valid: true };
    }
    return { valid: false, error: error.message };
  };
  const emailValid = fieldValid('email');
  const messageValid = fieldValid('message');

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <form className='flex flex-col' onSubmit={handleSubmit}>
      <FieldEntry>
        <TextField
          id='email'
          name='email'
          label='Email Address'
          variant='outlined'
          fullWidth
          error={!emailValid.valid}
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
          error={!messageValid.valid}
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
