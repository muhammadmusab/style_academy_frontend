"use client";
import { FiDelete } from "react-icons/fi";
interface Props {
  uuid: string;
  onDelete:()=>void
}
const DeleteWishListButton = ({ uuid ,onDelete}: Props) => {
 
  return (
    <button onClick={onDelete}>
      <FiDelete className="text-primary" />
    </button>
  );
};

export default DeleteWishListButton;
