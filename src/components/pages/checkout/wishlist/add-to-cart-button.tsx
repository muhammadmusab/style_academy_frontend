'use client'
interface Props {
    uuid:string;

}
const AddToCartWishListButton = ({uuid}:Props) => {
    const onAddToCart=()=>{

    }
  return (
    <button onClick={onAddToCart} className="text-primary font-roboto font-bold text-[14px] block mr-auto">
          Add to cart
        </button>
  )
}

export default AddToCartWishListButton