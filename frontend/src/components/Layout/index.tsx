import React from "react";
import { Toaster } from "@/components/ui/sonner";
import { ModeToggle } from "../ModoToggle";

export const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <main className="bg-background text-primary">
      <section className="min-h-screen max-w-2xl m-auto p-5 flex justify-center items-center">
        {children}
      </section>
      <Toaster richColors />
      <ModeToggle />
    </main>
  );
};
