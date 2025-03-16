import Link from "next/link";
import { Session } from "better-auth";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "./mode-toggle";
import { Button } from "@/components/ui/button";
import { LogoutButton } from "./logout-button";

interface MobileNavbarProps {
  children: React.ReactNode;
  menuItems: Record<string, string>[];
  session: Session | undefined | null;
}

export const MobileNavbar = ({
  children,
  menuItems,
  session,
}: MobileNavbarProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            {" "}
            <ModeToggle />
          </SheetTitle>
        </SheetHeader>

        <div className="py-8 px-6 flex  flex-col gap-8">
          <ul className="flex flex-col gap-4 w-full text-center ">
            {menuItems.map((item, index) => (
              <li className="" key={index}>
                <Link
                  href={item.href}
                  className="text-muted-foreground hover:text-accent-foreground block duration-150 hover:underline rounded py-2 transition "
                >
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex  flex-col gap-4">
            {session ? (
              <>
                <LogoutButton />
              </>
            ) : (
              <>
                {" "}
                <Button asChild variant="outline" className="w-full">
                  <Link href="/sign-in">
                    <span>Login</span>
                  </Link>
                </Button>
                <Button asChild className="w-full">
                  <Link href="/sign-up">
                    <span>Sign Up</span>
                  </Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
