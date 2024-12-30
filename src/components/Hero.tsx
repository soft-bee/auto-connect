import { Button } from "@/components/ui/button";
import Link from "next/link";
import Logform from "@/components/Form";

export default function Hero() {
  return (
    <section>
      <div className="container">
        <div className="bg-hero bg-cover">
          <div className="flex grid-cols-2 flex-col bg-black bg-opacity-80 2xl:grid 2xl:space-x-44 2xl:py-[151px] 2xl:pl-[136px]">
            <div className="pl-4 pr-8 pt-12 leading-[100px] tracking-tight">
              <h1 className="text-3xl font-semibold text-white md:text-6xl 2xl:text-[86px]">
                Data Driven Insights for your EV Battery –
                <span className="text-primary">Auto Connect!</span>
              </h1>
              <p className="mt-5 text-sm text-white md:mt-11 md:text-3xl 2xl:text-[45px] 2xl:leading-[70px]">
                A secure, free service to help you understand, manage, and
                protect your EV battery.
              </p>

              <Button
                variant="secondary"
                className="h-[45px] w-[145px] bg-primary lg:mt-[75px] lg:h-[65px] lg:w-[230px] lg:text-2xl"
              >
                <Link href="/login" className="text-black">
                  Sign Up Now!
                </Link>
              </Button>
            </div>

            <div className="mt-11  sm:mb-11  justify-items-center 2xl:mt-0">
              <Logform />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
