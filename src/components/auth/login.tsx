"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

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
import { loginSchema } from "@/schema";
import { Social } from "./social";
import { signIn } from "@/lib/auth-client";

export function Login() {
  const router = useRouter();
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    const { error } = await signIn.email({
      email: values.email,
      password: values.password,
    });

    if (error) {
      toast.error(`${error.message}`, {
        action: {
          label: "Cancel",
          onClick: () => console.log("Undo"),
        },
      });
    } else {
      toast.success("User signup successfully");
      form.reset();
      router.refresh();
      router.push("/");
    }
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
          <h1 className="mb-1 mt-4 text-xl font-semibold">Sign In to Slide</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Welcome back! Sign in to continue
          </p>
        </div>
        <Form {...form}>
          <form action="" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="mt-6 space-y-6">
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
          Don't have an account ?
          <Button asChild variant="link" className="px-2">
            <Link href="/sign-up">Create account</Link>
          </Button>
        </p>
      </div>
    </section>
  );
}
