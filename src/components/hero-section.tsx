"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { TextEffect } from "@/components/ui/text-effect";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { HeroHeader } from "@/components/navbar/hero5-header";
import MaxWidthWrapper from "./max-width-wrapper";
import Pricing from "./pricing";
import { Footer } from "./footer";
import { useSession } from "@/lib/auth-client";
import { Spinner } from "./spinner";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export default function HeroSection() {
  const session = useSession();
  if (session?.isPending) {
    return <Spinner />;
  }
  return (
    <>
      <HeroHeader />
      <main className=" h-full  ">
        <div
          aria-hidden
          className="absolute inset-0 isolate  opacity-65 contain-strict lg:block "
        >
          <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
          <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
          <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        </div>
        <section>
          <div className="relative pt-24 md:pt-36 h-full">
            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      delayChildren: 1,
                    },
                  },
                },
                item: {
                  hidden: {
                    opacity: 0,
                    y: 20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: "spring",
                      bounce: 0.3,
                      duration: 2,
                    },
                  },
                },
              }}
              className="absolute inset-0 -z-20"
            >
              <Image
                src="/background.jpg"
                alt="background"
                className="absolute inset-x-0 top-56 -z-20 hidden lg:top-32 dark:block blur-xs opacity-50"
                width="3276"
                height="4095"
              />
            </AnimatedGroup>
            <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)] w-full h-full"></div>
            <div className="mx-auto max-w-7xl px-6">
              <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                <AnimatedGroup variants={transitionVariants}>
                  <Link
                    href="#link"
                    className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950"
                  >
                    <span className="text-foreground text-sm">
                      Introducing Support for AI Models
                    </span>
                    <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>

                    <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                      <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                        <span className="flex size-6">
                          <ArrowRight className="m-auto size-3" />
                        </span>
                        <span className="flex size-6">
                          <ArrowRight className="m-auto size-3" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </AnimatedGroup>

                <TextEffect
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  as="h1"
                  className="mt-8 text-balance text-3xl md:text-5xl lg:mt-16 xl:text-[5.25rem] font-semibold"
                >
                  Transform Your Instagram Engagement with Slide
                </TextEffect>
                <TextEffect
                  per="line"
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  delay={0.5}
                  as="p"
                  className="mx-auto mt-8 max-w-2xl md:max-w-3xl xl:max-w-5xl text-balance  dark:text-gray-400"
                >
                  Slide revolutionizes how you connect with your audience on
                  instagram. Automate responses and boost engagement
                  effortlessly, turning interactions into valuable business
                  opportunities.
                </TextEffect>

                <AnimatedGroup
                  variants={{
                    container: {
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.75,
                        },
                      },
                    },
                    ...transitionVariants,
                  }}
                  className="mt-12 flex  items-center justify-center gap-2 flex-row"
                >
                  <div
                    key={1}
                    className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5"
                  >
                    <Button
                      asChild
                      size="lg"
                      className="group rounded-xl px-5  flex items-center "
                    >
                      <Link href="#link" className={"flex items-center"}>
                        <span className="text-nowrap">Get Started</span>
                        <div className="w-5 ">
                          <Minus
                            className={
                              "transition-properties  -mr-3 inline w-0 opacity-0 ease-in-out group-hover:w-3 group-hover:opacity-100  size-4"
                            }
                          />
                          <ChevronRight className={"inline  size-4 "} />
                        </div>
                      </Link>
                    </Button>
                  </div>
                  <Button
                    key={2}
                    asChild
                    size="lg"
                    variant="outline"
                    className="h-10.5 rounded-xl px-5"
                  >
                    <Link href="#link">
                      <span className="text-nowrap">Learn More</span>
                    </Link>
                  </Button>
                </AnimatedGroup>
              </div>
            </div>
          </div>
        </section>
        <section>
          <MaxWidthWrapper className="bg-gradient-to-r dark:from-emerald-900 dark:to-[#002D62] to-sky-400 from-emerald-300 rounded-lg  ">
            <div className="relative h-40 md:h-80 w-full mt-10">
              <Image
                src="/Ig-creators.png"
                alt="Community member"
                fill
                className="object-cover"
              />
            </div>
          </MaxWidthWrapper>
        </section>

        <section className=" ">
          <MaxWidthWrapper className="">
            <Pricing />
          </MaxWidthWrapper>
        </section>

        <section>
          <MaxWidthWrapper>
            <Footer />
          </MaxWidthWrapper>
        </section>
      </main>
    </>
  );
}
