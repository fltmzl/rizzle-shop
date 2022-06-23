import { FC } from "react";
import { Rating } from "flowbite-react";

interface Props {
  rating: number;
}

const Ratings: FC<Props> = ({ rating }) => {
  return (
    <>
      <Rating>
        <Rating.Star filled={rating >= 1 ? true : false} />
        <Rating.Star filled={rating >= 2 ? true : false} />
        <Rating.Star filled={rating >= 3 ? true : false} />
        <Rating.Star filled={rating >= 4 ? true : false} />
        <Rating.Star filled={rating >= 5 ? true : false} />
      </Rating>
    </>
  );
};

export default Ratings;
