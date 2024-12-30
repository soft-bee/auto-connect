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

const placeholders = [
  { name: "first_name", placeholder: "First Name" },
  { name: "last_name", placeholder: "Last Name" },
  { name: "email", placeholder: "Email" },
  { name: "zip_code", placeholder: "Zip Code" },
];

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
    <section className=" container mt-[60px] rounded-[10px] bg-primary py-[74px]">
      <div className="">
        <h2 className="text-center text-[22px] font-bold lg:text-[35px]">
          Sign up for unlock the power of secure, insightful battery management
        </h2>

        <div className="mt-[42px]">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="flex  flex-wrap  justify-center gap-5">
                {placeholders.map((item, index) => (
                  <FormField
                    key={index}
                    control={form.control}
                    name={item.name as "first_name" | "last_name" | "email" | "zip_code"}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl className="h-[60px] w-[320px] border border-[#4B4B4B] bg-inherit">
                          <Input
                            placeholder={item.placeholder}
                            {...field}
                            className="text-[18px] text-black"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                ))}
              </div>

              <div className="flex justify-center">
                <Button
                  variant="secondary"
                  className="text-1.5xl mt-[40px] h-[41px] w-[131px] lg:h-[58px] lg:w-[162px] bg-black font-medium text-white"
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
