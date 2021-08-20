import { useForm, ValidationError } from '@formspree/react';
import TextField from '@material-ui/core/TextField';

export default function ContactForm() {
  const [state, handleSubmit] = useForm('xjvjppwl');
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col'>
      <TextField
        required
        id='email'
        type='email'
        name='email'
        label='Email Address'
      />
      <label htmlFor='email'>Email Address</label>
      <input id='email' type='email' name='email' />
      <ValidationError prefix='Email' field='email' errors={state.errors} />
      <textarea id='message' name='message' />
      <ValidationError prefix='Message' field='message' errors={state.errors} />
      <button type='submit' disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}
