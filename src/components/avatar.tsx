import type { ReactNode } from "react";

type AvatarProps = {
  children: ReactNode;
};

export function Avatar({ children }: AvatarProps) {
  return (
    <span
      aria-hidden="true"
      className="flex size-10 shrink-0 items-center justify-center rounded-full bg-muted text-sm font-semibold uppercase text-muted-foreground"
    >
      {children}
    </span>
  );
}