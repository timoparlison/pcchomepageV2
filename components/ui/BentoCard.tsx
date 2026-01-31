import { ReactNode } from 'react';
import Link from 'next/link';

type BentoCardProps = {
  title: string;
  description: string;
  features?: string[];
  icon?: ReactNode;
  accentColor?: 'coral' | 'teal' | 'amber' | 'violet' | 'mint';
  href?: string;
  external?: boolean;
  className?: string;
  size?: 'default' | 'large';
};

const cardGradients = {
  coral: 'card-gradient-coral',
  teal: 'card-gradient-teal',
  amber: 'card-gradient-amber',
  violet: 'card-gradient-violet',
  mint: 'card-gradient-mint',
};

const iconStyles = {
  coral: 'bg-accent-coral/15 text-accent-coral',
  teal: 'bg-accent-teal/15 text-accent-teal',
  amber: 'bg-accent-amber/15 text-accent-amber',
  violet: 'bg-accent-violet/15 text-accent-violet',
  mint: 'bg-accent-mint/15 text-accent-mint',
};

const dotColors = {
  coral: 'bg-accent-coral',
  teal: 'bg-accent-teal',
  amber: 'bg-accent-amber',
  violet: 'bg-accent-violet',
  mint: 'bg-accent-mint',
};

const accentTextColors = {
  coral: 'text-accent-coral',
  teal: 'text-accent-teal',
  amber: 'text-accent-amber',
  violet: 'text-accent-violet',
  mint: 'text-accent-mint',
};

export default function BentoCard({
  title,
  description,
  features,
  icon,
  accentColor = 'teal',
  href,
  external = false,
  className = '',
  size = 'default',
}: BentoCardProps) {
  const content = (
    <div className="relative h-full flex flex-col">
      {icon && (
        <div
          className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5 transition-transform duration-300 group-hover:scale-110 ${iconStyles[accentColor]}`}
        >
          {icon}
        </div>
      )}

      <h3 className={`font-sans font-bold text-text-primary mb-3 ${size === 'large' ? 'text-2xl' : 'text-xl'}`}>
        {title}
        {external && (
          <svg className="w-4 h-4 inline-block ml-2 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        )}
      </h3>

      <p className="text-text-secondary mb-5 flex-grow leading-relaxed">{description}</p>

      {features && features.length > 0 && (
        <ul className="space-y-3 pt-4 border-t border-border/50">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center text-sm text-text-secondary"
            >
              <span className={`w-2 h-2 rounded-full mr-3 ${dotColors[accentColor]}`} />
              {feature}
            </li>
          ))}
        </ul>
      )}

      {href && (
        <div className="mt-5 pt-4 border-t border-border/50">
          <span className={`inline-flex items-center text-sm font-medium ${accentTextColors[accentColor]} group-hover:gap-3 gap-2 transition-all`}>
            {external ? 'Zur Website' : 'Mehr erfahren'}
            {external ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            )}
          </span>
        </div>
      )}
    </div>
  );

  const baseStyles = `
    group relative rounded-3xl p-7
    transition-all duration-300 ease-out
    hover:-translate-y-1
    ${cardGradients[accentColor]}
    ${className}
  `;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${baseStyles} block`}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={`${baseStyles} block`}>
        {content}
      </Link>
    );
  }

  return <div className={baseStyles}>{content}</div>;
}
