import React from "react";

export const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <main className="dark bg-background text-primary">
      <section className="min-h-screen max-w-3xl m-auto p-5">
        {children}
      </section>
    </main>
  );
};
