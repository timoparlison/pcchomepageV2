import { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
};

export default function Card({
  children,
  className = '',
  hover = false,
}: CardProps) {
  return (
    <div
      className={`
        bg-white rounded-3xl border border-border p-6 shadow-sm
        ${hover ? 'hover:border-accent-violet/30 hover:-translate-y-1 hover:shadow-xl transition-all duration-300' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
