import { HiOutlineMail } from 'react-icons/hi';
import Link from 'next/link';

export default function Summary() {
  return (
    <div className='flex flex-col items-center'>
      <div className='text-center text-sm mb-4'>
        Welcome to southern wall tech limited. Plastering and rendering
        contractors, covering Dorset and surrounding areas. We provide services
        to both the commercial and private sector. We are fully qualified and
        insured.
      </div>

      <Link href='/contact'>
        <a
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
        </a>
      </Link>
    </div>
  );
}
