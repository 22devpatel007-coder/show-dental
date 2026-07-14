import React from 'react';
import * as Icons from 'lucide-react';

interface LucideIconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function LucideIcon({ name, className = '', size = 24 }: LucideIconProps) {
  // Gracefully fallback to a generic Medical / Help icon if a specific name isn't found
  const IconComponent = (Icons as any)[name] || Icons.Activity;
  
  return <IconComponent className={className} size={size} />;
}
