import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
  style?: React.CSSProperties;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  padding = 'md',
  style,
}) => {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };
  
  const classes = `bg-white rounded-xl shadow-sm border border-gray-200 ${paddingClasses[padding]} ${className}`;
  
  return (
    <div className={classes} style={style}>
      {children}
    </div>
  );
}; 