import { cn } from "@/lib/utils";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className,
  type = "button",
  disabled,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-montserrat font-medium uppercase tracking-widest transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-harvest disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-harvest text-soil hover:bg-[#b8954a] hover:-translate-y-0.5 hover:shadow-lg",
    outline:
      "border-2 border-harvest text-harvest hover:bg-harvest hover:text-soil hover:-translate-y-0.5",
    ghost:
      "text-harvest hover:text-[#b8954a] hover:underline underline-offset-4",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-sm",
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
