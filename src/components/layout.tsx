
import type { ReactNode } from "react";

import { ModeToggle } from "@/components/mode-toggle";

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="flex items-center justify-between border-b px-6 py-4">
        <h1 className="text-xl font-bold">Posts Reader</h1>
        <ModeToggle />
      </header>

      <main className="container mx-auto p-6">
        {children}
      </main>
    </div>
  );
}
