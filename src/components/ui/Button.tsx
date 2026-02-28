import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseStyles =
    "w-full sm:w-auto px-8 py-3 rounded-full text-white transition-colors duration-300 font-medium";
  const variants = {
    primary:
      "border border-[var(--color-brand-purple)] hover:bg-[var(--color-brand-purple)]/10",
    secondary: "border border-white hover:bg-white/10",
  };
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
