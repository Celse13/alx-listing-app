import { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}
  
export interface CardProps {
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  location: string;
}
  
export interface ListingData {
  id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  location: string;
  amenities: string[];
  rating: number;
}