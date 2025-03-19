
import { Star } from "lucide-react";

interface ReviewStarsProps {
  rating: number;
  small?: boolean;
}

const ReviewStars = ({ rating, small = false }: ReviewStarsProps) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i}
          className={`${i < rating ? 'text-fortnite-yellow' : 'text-gray-500'} ${small ? 'h-3 w-3' : 'h-4 w-4'}`}
          fill={i < rating ? 'currentColor' : 'none'}
        />
      ))}
    </div>
  );
};

export default ReviewStars;
