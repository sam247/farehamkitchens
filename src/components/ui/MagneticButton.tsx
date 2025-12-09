import { useRef, useState, ReactNode } from "react";
import Link from "next/link";

interface MagneticButtonProps {
  children: ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'outline' | 'ghost';
}

const MagneticButton = ({
  children,
  to,
  href,
  onClick,
  className = '',
  variant = 'primary',
}: MagneticButtonProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseClasses = `
    inline-flex items-center justify-center
    label-uppercase px-10 py-4
    transition-all duration-500 ease-out-expo
    relative overflow-hidden group
  `;

  const variantClasses = {
    primary: 'bg-foreground text-background hover:shadow-lg',
    outline: 'border border-foreground text-foreground hover:bg-foreground hover:text-background',
    ghost: 'text-foreground hover:text-muted-foreground',
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  const content = (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={combinedClasses}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 bg-muted-foreground/10 scale-0 group-hover:scale-100 transition-transform duration-500 ease-out-expo" />
    </div>
  );

  if (to) {
    return <Link href={to}>{content}</Link>;
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className="cursor-pointer">
      {content}
    </button>
  );
};

export default MagneticButton;
