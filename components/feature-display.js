import {HiOutlineMail} from 'react-icons/hi'
import Image from 'next/image'

export default function FeatureDisplay({image, alt, text}) {
  return (
    <div className="flex flex-col items-center w-60 p-4">
        <Image src={image} alt={alt} width={200} height={200}></Image>
        <span className="text-xl md:text-2xl font-light text-center">
            {text}
        </span>
    </div>
  )
}
