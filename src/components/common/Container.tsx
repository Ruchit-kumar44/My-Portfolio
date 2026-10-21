import React from 'react';

export default function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`mx-auto max-w-2xl px-4 ${className}`}>{children}</div>
  );
}
