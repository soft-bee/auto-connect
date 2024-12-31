import Image from "next/image";

const benefits = [
  "Registration is Secure",
  "Only Battery",
  "Data Privacy Guaranteed",
  "Monthly Analytics & Battery Insights",
  "Tips & Diagnostics for a Better Future",
];

export default function Footer() {
  return (
    <footer className="container hidden lg:block">
      <div className="bg-black">
        <div className="container">
          <div className="grid grid-cols-[50%_2fr] pb-[96px] pt-[70px] text-white">
            <div className=""></div>
            <div className="grid grid-cols-2">
              <div>
                <h3 className="text-[30px]">Benefits</h3>
                <ul className="mt-5 flex flex-col gap-5">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex justify-start gap-5">
                      <Image
                        src="icon_list_style.svg"
                        alt="list"
                        width={10}
                        height={10}
                      />
                      <p>{benefit}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-[30px]">Quick Contact</h3>
                <ul className="mt-8 flex flex-col gap-4">
                  <li>
                    <p className="ml-9">8885 Airport St. Glenside, PA 19038</p>
                  </li>
                  <li className="flex justify-start gap-5">
                    <Image
                      src="/icon_mail.svg"
                      alt="list"
                      width={16}
                      height={16}
                    />
                    <p>office@yourwebsite.com</p>
                  </li>
                  <li>
                    <p className="ml-10">
                      If you have any questions or need help, feel free to{" "}
                      <br />
                      contact with our team.
                    </p>
                  </li>
                  <li className="flex justify-start gap-5">
                    <Image
                      src="/icon_phone.svg"
                      alt="list"
                      width={21}
                      height={21}
                    />
                    <p className="text-primary">office@yourwebsite.com</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#1E1E1E] pb-[17px] pt-[31px] text-center text-white">
        <p className="">Copyright &copy; 2024</p>
      </div>
    </footer>
  );
}
