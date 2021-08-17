import {HiOutlineMail} from 'react-icons/hi'
export default function ContactButton() {
  return (
    <a 
            href="/Contact" 
            className="
                bg-pink-700 
                text-white 
                px-4 
                hover:bg-pink-600 
                focus:bg-pink-600 
                focus:outline-none 
                active:bg-pink-700 
                flex items-center">
      <HiOutlineMail className="mr-2 mt-0.5"></HiOutlineMail>  Contact
    </a>
  )
}
