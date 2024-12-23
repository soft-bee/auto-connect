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

export default function Signup() {
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
      <div className=" bg-[#FEBD1A] rounded-[10px] mt-[60px] py-[74px]">
        <h2 className="text-[35px] text-center  font-bold">
          Sign up for unlock the power of secure, insightful battery management
        </h2>

        <div className="mt-[42px]">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              
            >

                <div className="flex gap-4 justify-center"> <FormField
                control={form.control}
                name="first_name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl className=" w-[320px] h-[60px] bg-inherit border border-[#4B4B4B]  ">
                      <Input
                        placeholder="Enter First Name"
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
                    <FormControl className=" w-[320px] h-[60px] bg-inherit border border-[#4B4B4B]  ">
                      <Input
                        placeholder="Enter Last Name"
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
                    <FormControl className=" w-[320px] h-[60px] bg-inherit border border-[#4B4B4B]  ">
                      <Input
                        placeholder="Enter Email Address"
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
                    <FormControl className=" w-[320px] h-[60px] bg-inherit border border-[#4B4B4B]  ">
                      <Input
                        placeholder="Enter Zip Code"
                        {...field}
                        className="text-black text-[18px]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              /></div>
             

              <div className="flex justify-center ">
                <Button
                  variant="secondary"
                  className="w-[162px] h-[58px] mt-[40px] bg-black text-white text-1.5xl  font-medium"
                  type="submit"
                >
                  Sign Up Now !
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
