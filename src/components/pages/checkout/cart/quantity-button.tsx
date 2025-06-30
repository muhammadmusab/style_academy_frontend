"use client";

interface Props {
  uuid: string;
  quantity: number;
  type: "increase" | "decrease";
}
const QuantityButton = ({ quantity, type, uuid }: Props) => {
  const onQuantityHandler = () => {
    
  };
  return (
    <button onClick={onQuantityHandler} className="text-primary">
      {type === "decrease" ? "-" : "+"}
    </button>
  );
};

export default QuantityButton;
