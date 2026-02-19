interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
}

const sizeStyles = {
  narrow: "max-w-[960px]",
  default: "max-w-[1280px]",
  wide: "max-w-[1440px]",
};

export function Container({
  children,
  className = "",
  size = "default",
}: ContainerProps) {
  return (
    <div className={`mx-auto w-full px-6 md:px-8 lg:px-12 ${sizeStyles[size]} ${className}`}>
      {children}
    </div>
  );
}
