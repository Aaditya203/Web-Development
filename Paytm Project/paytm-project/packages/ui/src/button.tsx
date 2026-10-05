"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onCLick:()=>void;
}

export const Button = ({ children, className, onCLick }: ButtonProps) => {
  return (
    <button
      className={className}
      onClick={onCLick}
    >
      {children}
    </button>
  );
};
