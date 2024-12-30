import { Button } from "@/components/ui/button";
import Link from "next/link";
import VideoContainer from "./Videocontainer";

const advantages = [
  "EV Maintenance",
  "Long term value",
  "Diagnostic tools",
  "Best EV Practices",
  "Compare to Other EVs",
  "Informed Decisions",
];

export default function Join() {
  return (
    <section>
      <div className="container">
        <div className="px-3 md:px-9 lg:mx-[50px] lg:grid lg:grid-cols-2 lg:gap-[62px] xl:mx-[110px]">
          <div className="h-[373px] lg:h-[559px]">
            <VideoContainer />
          </div>

          <div className="lg:mt-[28px]">
            <p className="mt-5 text-lg font-semibold text-primary lg:mt-2 lg:text-2xl">
              Evolving Auto Care for the Electric Age
            </p>
            <h2 className="mt-1.5 text-[22px] font-bold md:leading-[40px] lg:text-[36px] xl:text-[55px] xl:leading-[60px]">
              United to Tackle the Challenges <br /> Head-On
            </h2>
            <p className="mt-1.5 text-sm text-[#797979] lg:mt-5 lg:text-xl">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Donec
              felis suscipit mi urna nulla at tincidunt feugiat vulputate. Ante
              facilisis face pellentesque. Lorem ipsum dolor sit amet
              consectetur adipiscing elit. Donec felis suscipit mi urna nulla at
              tincidunt feugiat vulputate. Ante facilisis face pellentesque.
            </p>

            <div className="mt-5 grid grid-cols-2 gap-2.5">
              {advantages.map((advantage, index) => (
                <div className="flex items-center gap-2" key={index}>
                  <div className="lg:[url('/icon_check2.svg')] h-2.5 w-2.5 bg-[url('/icon_check1.svg')] bg-contain bg-no-repeat"></div>
                  <p className="text-xs font-semibold md:text-base lg:ml-[17px] lg:mt-[2px] lg:text-[22px]">
                    {advantage}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-[68px] bg-join2 bg-cover px-9 py-10 lg:py-[78px] 2xl:mx-[137px]">
          <div className="flex flex-col items-center text-center text-white">
            <p className="text-2xl font-bold lg:text-[40px] lg:leading-[60px]">
              Join Auto Connect and unlock the power of secure, insightful{" "}
              <br /> <span className="text-primary">BATTERY MANAGMENT</span>
            </p>
            <p className="mt-4 text-base lg:mt-5 lg:text-[25px]">
              Your EV deserves the best care, and it starts here
            </p>

            <Button
              variant="secondary"
              className="mt-5 h-[45px] w-[140px] bg-primary lg:mt-10 lg:h-[65px] lg:w-[230px] lg:text-2xl"
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
