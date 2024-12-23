import { Button } from "@/components/ui/button";
import Link from "next/link";
import Logform from "@/components/Form";


export default function Hero() {
  return (
    <div className="section">
     
      <div className="bg-hero   bg-cover bg-center  z-0">
        <div
          className=" grid grid-cols-2  space-x-44 bg-black  bg-opacity-80 relative z-10  pl-[136px]      "
        >
          <div className="w-[803px] opacity-100 z-30 leading-[100px]   mt-[211px] tracking-tight " >
            
            
            <h1
              className="text-[86px] text-white 
                font-semibold"
            >
              Data Driven Insights for your EV Battery – <span className="text-[#FEBD1A]">Auto Connect!</span>
            </h1>
            <p className="text-[45px] mt-11 text-white relative leading-[70px]">
            A secure, free service to help you understand, manage, and protect your EV battery.
            </p>
           
            <Button
              variant="secondary"
              className="w-[230px] h-[65px] mt-[75px] bg-[#FEBD1A] text-2xl    "
            >
              <Link href="/login" className="text-black">
                Sign Up Now!
              </Link>
            </Button>
          </div>

          <div className=" mt-[150px] mb-[150px]"><Logform/></div>
        </div>
      </div>
</div>
  );
}
