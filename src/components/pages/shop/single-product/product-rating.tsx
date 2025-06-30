'use client'
import Stars from "react-rating-stars-component";
const ProductRating = ({ rating }: { rating: number }) => {
  return (
    <div>
      {
        <Stars
          count={5}
          value={rating}
          activeColor="#22292F"
          edit={false}
          size={20}
          isHalf={true}
        />
      }
    </div>
  );
};

export default ProductRating;
