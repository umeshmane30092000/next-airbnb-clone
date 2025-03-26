"use client";

import Image from "next/image";

const Avartar = () => {
    return ( 
        <Image 
          className="rounded-full"
          height="30"
          width="30"
          alt="avatar"
          src="/images/placehoder.jpg"
        />
     );
}
 
export default Avartar;