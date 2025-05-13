import {
  Building,
  Briefcase,
  Wind,
  Hammer,
  Sun,
  Leaf,
  Truck,
  Brush,
  LucideIcon,
} from 'lucide-react';

interface IconProps {
  name: string;
  className?: string;
}

const iconMap: Record<string, LucideIcon> = {
  building: Building,
  briefcase: Briefcase,
  window: Wind,
  hammer: Hammer,
  sun: Sun,
  leaf: Leaf,
  truck: Truck,
  broom: Brush,
};

export function Icon({ name, className }: IconProps) {
  const IconComponent = iconMap[name];
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return <IconComponent className={className} />;
} 