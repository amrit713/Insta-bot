"use client";

import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { signOut } from "@/lib/auth-client";

export const LogoutButton = () => {
  const router = useRouter();
  const logoutHandler = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          toast.success("Logout successfully!");
          router.refresh();
        },
      },
    });
  };

  return <Button onClick={logoutHandler}>Logout</Button>;
};
