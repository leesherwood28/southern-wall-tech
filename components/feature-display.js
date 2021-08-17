import {HiOutlineMail} from 'react-icons/hi'
import Image from 'next/image'

export default function FeatureDisplay({image, alt, text}) {
  return (
    <div className="flex flex-col items-center">
        <Image src={image} alt={alt} width={200} height={200}></Image>
        <span className="text-2xl">
            {text}
        </span>
    </div>
  )
}
