import { Star, User } from 'lucide-react';

interface AppHeaderProps {
  title?: string;
  showProfile?: boolean;
}

export function AppHeader({ title = "ShopAble Fashion", showProfile = true }: AppHeaderProps) {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-card border-b border-border">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 rounded-lg bg-accent-gold flex items-center justify-center">
          <Star size={16} className="text-white" fill="white" />
        </div>
        <h1 className="text-lg font-bold text-text-primary">{title}</h1>
      </div>
      
      {showProfile && (
        <button className="w-10 h-10 rounded-xl border-2 border-button-outline bg-card flex items-center justify-center hover:shadow-md transition-all duration-200">
          <User size={18} className="text-text-secondary" />
        </button>
      )}
    </header>
  );
}