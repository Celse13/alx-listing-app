import Image from 'next/image';
import { CardProps } from '../../interfaces';

interface ButtonProps {
  children: ;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

const Button = ({ 
  children,
  onClick,
  variant,
  className
}: ButtonProps) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg bg-white">
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-gray-600 text-sm">{location}</p>
        <p className="text-gray-500 mt-2">{description}</p>
        <p className="text-lg font-bold mt-2">${price} / night</p>
      </div>
    </div>
  );
};

export default Card;