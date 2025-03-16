"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Logo } from "@/components/navbar/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signupSchema } from "@/schema";
import { Social } from "./social";
import { signUp } from "@/lib/auth-client";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export function Signup() {
  const router = useRouter();

  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: "",
      password: "",
      fullName: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  async function onSubmit(values: z.infer<typeof signupSchema>) {
    await signUp.email(
      {
        email: values.email,
        name: values.fullName,
        password: values.password,
      },
      {
        onSuccess: () => {
          //redirect to the dashboard or sign in page
          toast.success("User signup successfully");
          form.reset();
          router.refresh();
        },

        onRequest: (ctx) => {
          // if(ctx)
        },
        onError: (ctx) => {
          toast.error(`${ctx.error.message}`, {
            action: {
              label: "Cancel",
              onClick: () => console.log("Undo"),
            },
          });
        },
      }
    );
  }

  return (
    <section
      className=" m-auto h-fit  min-w-[400px]
    overflow-hidden rounded-[calc(var(--radius)+.125rem)] border shadow-md shadow-zinc-950/5 bg-card"
    >
      <div className=" -m-px  p-8 pb-6">
        <div className="text-center ">
          <Link href="/" aria-label="go home" className="mx-auto block w-fit ">
            <Logo />
          </Link>
          <h1 className="mb-1 mt-4 text-xl font-semibold">
            Create a Slide Account
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Welcome! Create an account to get started
          </p>
        </div>
        <Form {...form}>
          <form action="" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="mt-6 space-y-6">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        required
                        {...field}
                        placeholder="Ram Thapa"
                        disabled={isLoading}
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
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        required
                        {...field}
                        placeholder="user@example.com"
                        disabled={isLoading}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        required
                        {...field}
                        placeholder="*********"
                        disabled={isLoading}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button className="w-full cursor-pointer" disabled={isLoading}>
                Sign In
                {isLoading && <Loader2 className="size-4 ml-2 animate-spin" />}
              </Button>
            </div>
          </form>
        </Form>

        <div className="my-6 grid grid-cols-[1fr_auto_1fr] items-center gap-3">
          <hr className="border-dashed" />
          <span className="text-muted-foreground text-xs">
            Or continue With
          </span>
          <hr className="border-dashed" />
        </div>
        <Social />
      </div>
      <div className="p-3">
        <p className="text-accent-foreground text-center text-sm">
          Have an account ?
          <Button asChild variant="link" className="px-2">
            <Link href="/sign-in">Sign In</Link>
          </Button>
        </p>
      </div>
    </section>
  );
}
