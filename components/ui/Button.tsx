import Link from 'next/link';
import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  external?: boolean;
  onClick?: () => void;
};

const variants = {
  primary: `
    relative overflow-hidden
    bg-gradient-to-r from-accent-coral via-accent-violet to-accent-teal
    text-white font-semibold
    shadow-lg shadow-accent-violet/25
    hover:shadow-xl hover:shadow-accent-violet/30
    hover:scale-[1.02]
    transition-all duration-300
  `,
  secondary: `
    bg-white
    text-text-primary
    border-2 border-border
    hover:border-accent-violet/50 hover:bg-bg-tertiary
    transition-all duration-300
    font-medium
  `,
  ghost: `
    text-text-secondary
    hover:text-accent-violet
    transition-colors duration-300
    font-medium
  `,
};

const sizes = {
  sm: 'px-5 py-2.5 text-sm rounded-xl',
  md: 'px-7 py-3.5 text-base rounded-xl',
  lg: 'px-9 py-4 text-lg rounded-2xl',
};

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  external = false,
  onClick,
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-sans';
  const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedStyles}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
}
