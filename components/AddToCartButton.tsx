"use client"
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Product } from "@/sanity.types";
import toast from "react-hot-toast";

interface Props {
  product: Product;
  className?: string;
}

const AddToCartButton = ({ product, className }: Props) => {
  const handleAddToCart = () => {
    toast.success("cart dispatched successfully")
  };
  console.log(product)
  return (
    <Button
      onClick={handleAddToCart}
      className={cn(
        "bg-darkBlue/10 text-black border-darkBlue border py-2 mt-2 w-full rounded-md font-medium hover:bg-darkBlue  hover:text-white hoverEffect disabled:hover:cursor-not-allowed disabled:bg-darkBlue/10 disabled:text-gray-400 disabled:hover:text-gray-400 disabled:border-darkBlue/10",
        className
      )}
    >
      Add to cart
    </Button>
  );
};

export default AddToCartButton;
