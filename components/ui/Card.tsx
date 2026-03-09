import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hover = true,
  onClick 
}) => {
  const hoverClasses = hover ? 'hover:shadow-xl hover:-translate-y-1' : '';
  const interactiveClasses = onClick ? 'cursor-pointer' : '';
  
  return (
    <div
      className={`bg-white rounded-lg shadow-md ${hoverClasses} ${interactiveClasses} transition-all duration-300 ${className}`}
      onClick={onClick}
      onKeyDown={onClick ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      } : undefined}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </div>
  );
};
