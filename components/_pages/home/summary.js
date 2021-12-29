import { HiOutlineMail } from 'react-icons/hi';
import Link from 'next/link';
import MakeAnInquiryButton from '../../shared/make-an-inquiry-button';

export default function Summary() {
  return (
    <div className='flex flex-col items-center'>
      <div className='text-center text-sm mb-4'>
        Welcome to southern wall tech limited. Plastering and rendering
        contractors, covering Dorset and surrounding areas. We provide services
        to both the commercial and private sector. We are fully qualified and
        insured.
      </div>

      <MakeAnInquiryButton></MakeAnInquiryButton>
    </div>
  );
}
