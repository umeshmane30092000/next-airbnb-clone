"use client";

import Image from "next/image";
interface AvartarProps {
  src?:string | null | undefined;
}

const Avartar:React.FC<AvartarProps> = ({src}) => {
    return ( 
        <Image 
          className="rounded-full"
          height="30"
          width="30"
          alt="avatar"
          src={src ||"/images/placehoder.jpg"}
        />
     );
}
 
export default Avartar;