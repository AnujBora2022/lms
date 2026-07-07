import Image from "next/image";
export const Logo=()=>{
  return(
    // <Image
    //   src="/logo.svg"
    //   alt="Logo"
    //   width={130}
    //   height={130}
    // />
      <div className="flex items-center gap-2">
        {/* <Image
          src="/logo.svg"
          alt="Logo"
          width={40}
          height={40}
        /> */}
        <div className="w-[30px] overflow-hidden">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={130}
            height={130}
            className="max-w-none"
          />
        </div>
        <span className="text-2xl font-bold tracking-tight">
          LMS
        </span>
      </div>
  )
}