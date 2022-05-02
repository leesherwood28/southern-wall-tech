import { HiOutlineMail } from 'react-icons/hi';
import { ScrollButton } from './scroll-button';

export default function MakeAnInquiryButton() {
  return (
    <ScrollButton
      page='contact'
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
    >
      <HiOutlineMail className='mr-2 mt-0.5'></HiOutlineMail>
      Make an Inquiry
    </ScrollButton>
  );
}
