import Image from 'next/image'
import { CardProps } from '@/interfaces';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  location: string;
  onClick: () => void;
}

export const = ({
  title,
  description,
  imageUrl,
  price,
  location,
  onClick
}: CardProps) => {
  return (
    <div 
      className="rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300"
      onClick={onClick}
    >
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold">{title}</h3>
          <span className="text-lg font-bold">${price}</span>
        </div>
        
        <p className="text-gray-600 text-sm mb-2">{location}</p>
        
        <p className="text-gray-500 text-sm line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  )
}
