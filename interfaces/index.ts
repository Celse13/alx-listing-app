import { ReactNode } from 'react';
// Card Props
export interface CardProps {
    title: string;
    description: string;
    imageUrl: string;
    price: number;
    location: string;
    onClick?: () => void;
  }
  
  // Button Props
  export interface ButtonProps {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'small' | 'medium' | 'large';
    fullWidth?: boolean;
    disabled?: boolean;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
  }