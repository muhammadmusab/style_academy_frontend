import { useState, Fragment } from "react";
import Stars from "react-rating-stars-component";
import WriteReview from "./write-review";
interface Props {
  average: number;
  reviews: {
    name: string;
    date: string;
    rating: number;
    text: string;
    title: string;
  }[];
}
const ProductReviews = ({ average, reviews }: Props) => {
  const [showWriteReview, setWriteReview] = useState(false);

  return (
    <Fragment>
      <h1 className="text-secondaryhover text-[20px] font-bold  mb-[10px]">
        Customer Reviews
      </h1>
      <div className="flex xs:items-start items-center  flex-row xs:flex-col justify-between">
        <div className="flex items-center">
          <div>
            <Stars
              count={5}
              value={average}
              activeColor="#22292F"
              edit={false}
              size={20}
              isHalf={true}
            />
          </div>

          <p className="text-secondaryhover mb-0 ml-[5px] pt-[3.5px] text-[14px]">
            Based on {reviews.length}
            {reviews.length > 1 ? " Reviews" : " Review"}
          </p>
        </div>

        <button
          className="bg-secondaryhover mt-0 xs:mt-3 transition-all h-[40px] max-h-[60px] hover:bg-primaryhover text-white px-[10px] py-[0px]"
          onClick={() => setWriteReview((value) => !value)}
        >
          Write a review
        </button>
      </div>
      {/* write a review form */}
      {showWriteReview && <WriteReview />}
      {/* end of write a review form */}
      {/* List of reviews */}
      <hr className="border-t border-[#ced4da] xs:mt-3 mt-[50px]" />
      <div className="spacer !pt-0 !pb-3"></div>
      {reviews.map((review) => (
        <div key={review.date} className="mb-[30px]">
          <Stars
            count={5}
            value={review.rating}
            activeColor="#22292F"
            edit={false}
            size={20}
            isHalf={true}
          />

          <div className="  text-primaryhover">
            <p className="text-primary font-bold mt-[10px] mb-[2px]">
              {review.title}
            </p>
            <div className="flex items-center font-roboto">
              <p className="">{review.name}</p>
              <p className="ml-[5px]">{review.date}</p>
            </div>
          </div>
          <p className="text-primaryhover mt-[10px] text-[14px]">
            {review.text}
          </p>
        </div>
      ))}
    </Fragment>
  );
};

export default ProductReviews;
