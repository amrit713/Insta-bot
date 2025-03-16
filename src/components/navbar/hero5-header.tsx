"use client";
import Link from "next/link";
import { Logo } from "./logo";
import { MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./mode-toggle";
import { MobileNavbar } from "./mobile-navbar";
import { useSession } from "@/lib/auth-client";
import { LogoutButton } from "./logout-button";

const menuItems = [
  { name: "Features", href: "#link" },
  { name: "Solution", href: "#link" },
  { name: "Pricing", href: "#link" },
  { name: "About", href: "#link" },
];

export const HeroHeader = () => {
  const session = useSession();

  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header>
      <nav className="fixed z-20 w-full px-2">
        <div
          className={cn(
            "mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12",
            isScrolled &&
              "bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5"
          )}
        >
          <div className=" flex  items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full justify-between lg:w-auto">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-2"
              >
                <Logo />
              </Link>
            </div>

            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-8 text-sm">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-accent-foreground block duration-150"
                    >
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hidden lg:flex gap-4">
              {session ? (
                <>
                  <LogoutButton />
                </>
              ) : (
                <>
                  {" "}
                  <Button asChild variant="outline">
                    <Link href="/sign-in">
                      <span>Login</span>
                    </Link>
                  </Button>
                  <Button asChild className={cn(isScrolled && "lg:hidden")}>
                    <Link href="/sign-up">
                      <span>Sign Up</span>
                    </Link>
                  </Button>
                  <Button
                    asChild
                    className={cn(isScrolled ? "lg:inline-flex" : "hidden")}
                  >
                    <Link href="/sign-up">
                      <span>Get Started </span>
                    </Link>
                  </Button>
                </>
              )}
              <ModeToggle />
            </div>
            <MobileNavbar
              menuItems={menuItems}
              session={session?.data?.session}
            >
              <Button size={"icon"} variant={"ghost"} className="lg:hidden">
                <MenuIcon />
              </Button>
            </MobileNavbar>
          </div>
        </div>
      </nav>
    </header>
  );
};
