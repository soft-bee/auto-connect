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
    <section className="section">
      <div className=" flex flex-col  items-center  w-[577px] h-[719px] bg-[#FEBD1A] rounded-[10px] ">
        <Image
          src="/logo.svg"
          alt="bg-advantages"
          width={371}
          height={186}
          className="mt-5 mb-5"
        />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="first_name"
              render={({ field }) => (
                <FormItem>
                  <FormControl className=" w-[461px] h-[72px] bg-white  ">
                    <Input
                      placeholder="First Name"
                      {...field}
                      className="text-black text-[18px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="last_name"
              render={({ field }) => (
                <FormItem>
                  <FormControl className=" w-[461px] h-[72px] bg-white  ">
                    <Input
                      placeholder="Last Name"
                      {...field}
                      className="text-black text-[18px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl className=" w-[461px] h-[72px] bg-white  ">
                    <Input
                      placeholder="Email"
                      {...field}
                      className="text-black text-[18px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="zip_code"
              render={({ field }) => (
                <FormItem>
                  <FormControl className=" w-[461px] h-[72px] bg-white  ">
                    <Input
                      placeholder="Zip Code"
                      {...field}
                      className="text-black text-[18px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-center ">
              <Button type="submit" className="w-[189px] h-[62] text-[18px]  mr-3 py-4">Submit</Button>
              <Button type="submit" className="w-[189px] h-[62] text-[18px]">Google</Button>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
}
