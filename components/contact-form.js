import { useForm } from '@formspree/react';
import TextField from '@material-ui/core/TextField';

export default function ContactForm() {
  const [state, handleSubmit] = useForm('xjvjppwl');
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <form className='flex flex-col'>
      <FieldEntry>
        <TextField
          required
          id='email'
          type='email'
          name='email'
          label='Email Address'
        />
      </FieldEntry>
      <FieldEntry>
        <TextField
          required
          id='message'
          type='text'
          name='message'
          label='Message'
          className='mb-2'
          multiline
          rows={4}
        />
      </FieldEntry>

      <button type='submit' disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

function FieldEntry({ children }) {
  return <div className='mb-2'>{children}</div>;
}
