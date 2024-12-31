"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";

const placeholders = [
  { name: "first_name", placeholder: "First Name" },
  { name: "last_name", placeholder: "Last Name" },
  { name: "email", placeholder: "Email" },
  { name: "zip_code", placeholder: "Zip Code" },
];

const formSchema = z.object({
  first_name: z
    .string()
    .min(2, {
      // message: "Must be at least 2 characters.",
    })
    .max(20),
  last_name: z
    .string()
    .min(2, {
      // message: "Must be at least 2 characters.",
    })
    .max(20),
  email: z
    .string({
      // required_error: "Email is required",
      // invalid_type_error: "Please enter an email.",
    })
    .email(),
  zip_code: z.string(),
});

export default function Logform() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      zip_code: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div >   
    <div className="flex flex-col  items-center  w-[390px] h-[469px] lg:w-[577px] lg:h-[719px]  bg-primary rounded-[10px] ">
      <Image
        src="/logo.svg"
        alt="bg-advantages"
        width={371}
        height={186}
        className="w-[186px] h-[94px] mt-10 lg:mt-5 mb-2.5  lg:w-[371px] lg:h-[186px] "
      />
      <div className=" "> <Form {...form} >
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-2.5 lg:gap-7 items-center   ">
          {placeholders.map((ph, index) => (
            <FormField
              key={index}
              control={form.control}
              name={
                ph.name as "first_name" | "last_name" | "email" | "zip_code"
              }
              render={({ field }) => (
                <FormItem>
                  <FormControl className="bg-white w-[336px] h-[50px] lg:w-[461px] lg:h-[72px]">
                    <Input
                      placeholder={ph.placeholder}
                      {...field}
                      className="text-black text-[14px] lg:text-[18px]  "
                      aria-describedby={ph.name}
                      id={ph.name}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}

          <div className="flex justify-items-center ">
            <Button
              type="submit"
              className="w-[140px] h-[45] lg:w-[189px] lg:h-[62] text-[14px] lg:text-[18px]   bg-black lg:mr-3 lg:py-4"
            >
              Submit
            </Button>
            <Button
              type="submit"
              className="hidden lg:block w-[189px] h-[62] text-[18px] bg-black "
            >
              Google
            </Button>
          </div>
        </form>
      </Form></div>
     
    </div>
  </div>

  );
}
