import React from "react";

export const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <main className="dark bg-background text-primary-foreground">
      <section className="min-h-screen max-w-2xl m-auto p-5 flex justify-center items-center">
        {children}
      </section>
    </main>
  );
};
