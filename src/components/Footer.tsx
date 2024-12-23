import Image from "next/image";

export default function Footer() {
  return (
    <div className="section">
      <div className=" grid grid-cols-[50%_2fr] bg-black text-white pb-[96px] pt-[70px]">
        <div className=""></div>
        <div className="grid grid-cols-2">
          <div>
            <h3 className="text-[30px]">Benefits</h3>
            <ul className="flex flex-col gap-5 mt-5">
              <li className="flex justify-start gap-5">
                <Image
                  src="/icon_list_style.svg"
                  alt="list"
                  width={10}
                  height={10}
                />
                <p>Registration is Secure</p>
              </li>
              <li className="flex justify-start gap-5">
                <Image
                  src="/icon_list_style.svg"
                  alt="list"
                  width={10}
                  height={10}
                />
                <p>Only Battery</p>
              </li>
              <li className="flex justify-start gap-5">
                <Image
                  src="/icon_list_style.svg"
                  alt="list"
                  width={10}
                  height={10}
                />
                <p>Data Privacy Guaranteed</p>
              </li>
              <li className="flex justify-start gap-5">
                <Image
                  src="/icon_list_style.svg"
                  alt="list"
                  width={10}
                  height={10}
                />
                <p>Monthly Analytics & Battery Insights</p>
              </li>
              <li className="flex justify-start gap-5">
                <Image
                  src="/icon_list_style.svg"
                  alt="list"
                  width={10}
                  height={10}
                />
                <p>Tips & Diagnostics for a Better Future</p>
              </li>
            </ul>
            
          </div>
          <div>
            <h3 className="text-[30px]">Quick Contact</h3>
            <ul className="flex flex-col gap-4 mt-8">
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
                <p className="ml-10">If you have any questions or need help, feel free to <br />contact with our team.</p>
              </li>
              <li className="flex justify-start gap-5">
                <Image
                  src="/icon_phone.svg"
                  alt="list"
                  width={21}
                  height={21}
                />
                <p className="text-[#FEBD1A]">office@yourwebsite.com</p>
              </li>
              
            </ul>
            
          </div>
        </div>
      </div>

      <div className="bg-[#1E1E1E] text-white text-center pt-[31px] pb-[17px]">
        <p className="">Copyright &copy; 2024</p>
      </div>
    </div>
  );
}
