import { cn } from "@/lib/utils";
import { HTMLAttributes, PropsWithChildren } from "react";

type ComponentProps = PropsWithChildren<HTMLAttributes<HTMLElement>>;

export const FullWidthSection = ({
  children,
  className,
  ...props
}: ComponentProps) => (
  <section className={cn("col-[full-width]", className)} {...props}>
    {children}
  </section>
);
export const BreakoutSection = ({
  children,
  className,
  ...props
}: ComponentProps) => (
  <section className={cn("col-[breakout]", className)} {...props}>
    {children}
  </section>
);
export const ContentSection = ({
  children,
  className,
  ...props
}: ComponentProps) => (
  <section className={cn("col-[content]", className)} {...props}>
    {children}
  </section>
);
