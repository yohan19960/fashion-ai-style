import { Star } from 'lucide-react';

interface StyleChipProps {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  icon?: boolean;
}

export function StyleChip({ children, active = false, onClick, icon = true }: StyleChipProps) {
  return (
    <button
      onClick={onClick}
      className={`fashion-chip flex items-center space-x-2 whitespace-nowrap ${
        active ? 'fashion-chip-active' : ''
      }`}
    >
      {icon && <Star size={14} className="text-current" />}
      <span>{children}</span>
    </button>
  );
}