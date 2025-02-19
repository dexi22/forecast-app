import clsx from "clsx";
import { ElementType, ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

export default function Card({
  children,
  className = "",
  as: Component = "div",
}: CardProps) {
  return (
    <Component className={clsx("bg-primary rounded-2xl p-4 shadow-sm shadow-primary", className)}>
      {children}
    </Component>
  );
}
