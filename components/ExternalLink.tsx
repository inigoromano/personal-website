import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ href, children, className = '' }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={`inline-flex items-center gap-1 hover:underline underline-offset-4 decoration-1 ${className}`}
    >
      {children}
      <ArrowUpRight size={12} strokeWidth={2} />
    </a>
  );
};

export default ExternalLink;