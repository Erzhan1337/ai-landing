import React, { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export function Button({
  children,
  variant = "primary",
  type = "button",
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "w-full sm:w-auto px-8 py-3 rounded-full text-white transition-colors duration-300 font-medium";

  const variants = {
    primary: "border border-brand-purple hover:bg-brand-purple/10",
    secondary: "border border-white hover:bg-white/10",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], className)}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}
