import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Advantages() {
  return (
    <section className="section  flex space-x-0">
      <div className="bg-advantages bg-no-repeat z-0  py-[70px]">
        <h2 className="   text-[55px] text-center font-semibold text-black">
          Why Use Auto Connect?
        </h2>
        <div className="grid grid-cols-3 gap-5 mt-[55px] mx-[147px]">
          <div className=" flex flex-col  items-center px-[57px] py-[58px] bg-white shadow-[0_0_20px_0px_rgba(0,0,0,0.07)] ">
            <Button>
              <Image
                src="/advantage_1.svg"
                alt="advantage1"
                width={126}
                height={107}
              />
            </Button>

            <h3 className="text-black text-[25px] mt-[20px]">
              Registration is Secure
            </h3>
            <p className="text-[#797979] text-[20px] mt-[10px] text-center">
              Enjoy a hassle-free and secure registration process. Rest assured,
              your login details are never stored or shared.
            </p>
          </div>

          <div className=" flex flex-col  items-center px-[57px] py-[58px] bg-white shadow-[0_0_20px_0px_rgba(0,0,0,0.07)] ">
            <Image
              src="/advantage_2.svg"
              alt="advantage2"
              width={126}
              height={107}
            />
            <h3 className="text-black text-[25px] mt-[20px]">
              Only Battery Data is Collected
            </h3>
            <p className="text-[#797979] text-[20px] mt-[10px] text-center">
              Your privacy is our priority. Your data stays secure, and we never
              share it with anyone without your explicit consent.
            </p>
          </div>

          <div className=" flex flex-col  items-center px-[57px] py-[58px] bg-white shadow-[0_0_20px_0px_rgba(0,0,0,0.07)] ">
            <Image
              src="/advantage_3.svg"
              alt="advantage3"
              width={126}
              height={107}
            />
            <h3 className="text-black text-[25px] mt-[20px]">
              Data Privacy Guaranteed
            </h3>
            <p className="text-[#797979] text-[20px] mt-[10px] text-center">
              Your privacy is our priority. Your data stays secure, and we never
              share it with anyone without your explicit consent.
            </p>
          </div>

          <div className=" flex flex-col  items-center px-[57px] py-[58px] bg-white shadow-[0_0_20px_0px_rgba(0,0,0,0.07)] ">
            <Image
              src="/advantage_4.svg"
              alt="advantage4"
              width={126}
              height={107}
            />
            <h3 className="text-black text-[25px] mt-[20px]">
              Monthly Analytics & Battery Insights
            </h3>
            <p className="text-[#797979] text-[20px] mt-[10px] text-center">
              Get clear, monthly reports to monitor battery health, performance,
              and benchmarks—helping you maintain your EV&apos;s value over
              time.
            </p>
          </div>

          <div className=" flex flex-col  items-center px-[57px] py-[58px] bg-white shadow-[0_0_20px_0px_rgba(0,0,0,0.07)] ">
            <Image
              src="/advantage_5.svg"
              alt="advantage5"
              width={126}
              height={107}
            />
            <h3 className="text-black text-[25px] mt-[20px]">
              Tips & Diagnostics for a Better Future
            </h3>
            <p className="text-[#797979] text-[20px] mt-[10px] text-center">
              Receive expert tips to optimize your battery&apos;s performance
              and ensure quick diagnosis of potential issues.
            </p>
          </div>

          <div className=" flex flex-col  items-center px-[57px] py-[58px] bg-white shadow-[0_0_20px_0px_rgba(0,0,0,0.07)] ">
            <Image
              src="/advantage_6.svg"
              alt="advantage6"
              width={126}
              height={107}
            />
            <h3 className="text-black text-[25px] mt-[20px]">
              It&apos;s Free!
            </h3>
            <p className="text-[#797979] text-[20px] mt-[10px] text-center">
              Absolutely free for every EV owner. No hidden fees, no fine
              print—just the insights you need
            </p>
          </div>
        </div>
      </div>
      {/* <div className="bg-advantages2 bg-no-repeat z-0 bg-right-bottom w-[196px] h-[196px]"></div> */}
    </section>
  );
}
