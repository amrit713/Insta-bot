"use client";

import { Loader2 } from "lucide-react";

export const Spinner = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center  ">
      <div className="flex flex-col gap-4">
        <Loader2 className="size-12 animate-spin" />
        <span>Loading...</span>
      </div>
    </div>
  );
};
