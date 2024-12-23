import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import VideoContainer from "./Videocontainer";

export default function Join() {
  return (
    <section className="section">
      <div className="mx-[137px]">
        <div className="grid grid-cols-2 gap-[62px]">
          <VideoContainer />
          <div className="mt-[28px] ml-[62px]">
            <p className="text-[37px]   text-[#FEBD1A]">
              Evolving Auto Care for the Electric Age
            </p>
            <h2 className="text-[55px] font-bold leading-[60px]">
              United to Tackle the Challenges Head-On
            </h2>
            <p className=" mt-5 text-[20px] text-[#797979]">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Donec
              felis suscipit mi urna nulla at tincidunt feugiat vulputate. Ante
              facilisis face pellentesque. Lorem ipsum dolor sit amet
              consectetur adipiscing elit. Donec felis suscipit mi urna nulla at
              tincidunt feugiat vulputate. Ante facilisis face pellentesque.
            </p>
            <div className="grid grid-cols-2 mt-[36px]">
              <div className="grid grid-cols-1 gap-[25px]">
                <div className="flex items-start ">
                  <Image
                    src="/icon_check.svg"
                    width={40}
                    height={40}
                    alt="check"
                  />
                  <p className="mt-[2px] ml-[17px] text-[22px]">
                    EV Maintenance
                  </p>
                </div>

                <div className="flex items-start ">
                  <Image
                    src="/icon_check.svg"
                    width={40}
                    height={40}
                    alt="check"
                  />
                  <p className="mt-[2px] ml-[17px] text-[22px]">
                    Long term value
                  </p>
                </div>

                <div className="flex items-start ">
                  <Image
                    src="/icon_check.svg"
                    width={40}
                    height={40}
                    alt="check"
                  />
                  <p className="mt-[2px] ml-[17px] text-[22px]">
                    Diagnostic tools
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-[25px]">
                <div className="flex items-start ">
                  <Image
                    src="/icon_check.svg"
                    width={40}
                    height={40}
                    alt="check"
                  />
                  <p className="mt-[2px] ml-[17px] text-[22px]">
                    Best EV Practices
                  </p>
                </div>

                <div className="flex items-start ">
                  <Image
                    src="/icon_check.svg"
                    width={40}
                    height={40}
                    alt="check"
                  />
                  <p className="mt-[2px] ml-[17px] text-[22px]">
                    Compare to Other EVs
                  </p>
                </div>

                <div className="flex items-start ">
                  <Image
                    src="/icon_check.svg"
                    width={40}
                    height={40}
                    alt="check"
                  />
                  <p className="mt-[2px] ml-[17px] text-[22px]">
                    Informed Decisions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-join2 mt-[70px] py-[78px] text-white flex justify-center items-center">
          <div className="flex flex-col items-center text-center w-[827px]">
            <p className="text-[40px] font-bold ">
              Join Auto Connect and unlock the power of secure, insightful{" "}
              <span className="text-[#FEBD1A]">BATTERY MANAGMENT</span>
            </p>
            <p className="text-[25px] mt-[20px]">Your EV deserves the best care, and it starts here</p>

            <Button
              variant="secondary"
              className="w-[230px] h-[65px] mt-[40px] bg-[#FEBD1A] text-2xl    "
            >
              <Link href="/login" className="text-black">
                Sign Up Now!
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
