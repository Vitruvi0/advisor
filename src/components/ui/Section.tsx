"use client";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className = "", id }: SectionProps) {
  return (
    <section id={id} className={`py-24 md:py-32 lg:py-40 ${className}`}>
      {children}
    </section>
  );
}
