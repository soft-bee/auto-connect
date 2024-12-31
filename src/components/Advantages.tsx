import Image from "next/image";

const advantages = [
  {
    img: "advantage_1.svg",
    alt: "advantage1",
    title: "Only Battery Data is Collected",
    text: "Enjoy a hassle-free and secure registration process. Rest assured, your login details are never stored or shared.",
  },
  {
    img: "advantage_2.svg",
    alt: "advantage2",
    title: "Only Battery Data is Collected",
    text: "Your privacy is our priority. Your data stays secure, and we never share it with anyone without your explicit consent.",
  },
  {
    img: "advantage_3.svg",
    alt: "advantage3",
    title: "Data Privacy Guaranteed",
    text: "Your privacy is our priority. Your data stays secure, and we never share it with anyone without your explicit consent.",
  },
  {
    img: "advantage_4.svg",
    alt: "advantage4",
    title: "Monthly Analytics & Battery Insights",
    text: "Get clear, monthly reports to monitor battery health, performance, and benchmarks—helping you maintain your EV&apos;s value over time.",
  },
  {
    img: "advantage_5.svg",
    alt: "advantage5",
    title: "Tips & Diagnostics for a Better Future",
    text: "Receive expert tips to optimize your battery&apos;s performance and ensure quick diagnosis of potential issues.",
  },
  {
    img: "advantage_6.svg",
    alt: "advantage6",
    title: "It&apos;s Free!",
    text: "Absolutely free for every EV owner. No hidden fees, no fine print—just the insights you need",
  },
];

export default function Advantages() {
  return (
    <section>
      <div className="container relative">
        <div className="absolute inset-0 z-0 h-full bg-advantages bg-contain bg-no-repeat"></div>
        <div className="relative z-10 py-[70px]">
          <h2 className="invisible text-center font-semibold md:visible md:text-[55px]">
            Why Use Auto Connect?
          </h2>
          <div className="mx-10 flex flex-col gap-2 md:mx-[147px] md:mt-[55px] lg:grid lg:grid-cols-2 2xl:grid-cols-3 2xl:gap-5">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-white px-[57px] py-[58px] shadow-[0_0_20px_0px_rgba(0,0,0,0.07)]"
              >
                <Image
                  src={advantage.img}
                  alt={advantage.alt}
                  width={126}
                  height={107}
                  className="max-h-[107px] object-contain"
                />
                <h3 className="mt-[20px] text-center text-[25px] text-black">
                  {advantage.title}
                </h3>
                <p className="mt-[10px] text-center text-[20px] text-[#797979]">
                  {advantage.text}
                </p>
              </div>
            ))}
            ,
          </div>
        </div>
      </div>
    </section>
  );
}
