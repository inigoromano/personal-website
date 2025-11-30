import React from 'react';

interface SectionHeaderProps {
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  return (
    <h3 className="text-sm font-bold uppercase tracking-wide mb-4 md:mb-0 w-32 shrink-0 pt-1">
      {title}
    </h3>
  );
};

export default SectionHeader;