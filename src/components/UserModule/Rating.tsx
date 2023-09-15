import { FC } from "react";
import YellowStar from '../../../public/user/yellow-star.png';
import GreyStar from '../../../public/user/grey-star.png';
import Icon from "../Icon";
import Image from "next/image";

type RatingParams = {
    rating: number;
};

const StarRating: FC<RatingParams> = ({ rating }: RatingParams) => {
  // Ensure the rating is within a valid range (0 to 5)
  const sanitizedRating = Math.min(5, Math.max(0, rating));

  // Create an array of stars to render
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    // Determine whether the star should be yellow or grey based on the rating
    const starClass = i <= sanitizedRating ? 'star yellow' : 'star grey';
    stars.push(i <= sanitizedRating ? YellowStar : GreyStar);
  }

  return (
    <div className="d-flex">
      {stars?.map((star) => (<Image src={star} alt="" width={14} height={14} />))}
    </div>
  );
};

export default StarRating;

