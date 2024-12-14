import { MdFavoriteBorder } from "react-icons/md";
import { FaRegEye } from 'react-icons/fa';
import { TbArrowsRightLeft } from 'react-icons/tb';
import { RiShoppingBag4Line } from 'react-icons/ri';
const ProductCartBar = () => {
  return (
    <div className="text-gray-500 text-lg flex items-center justify-center gap-2.5 group-hover:translate-y-4 hoverEffect">
      <div className="border shadow-md bg-white rounded-xl hover:bg-darkBlue hover:text-white hoverEffect">
        <MdFavoriteBorder />
      </div>
      <div className="border shadow-md bg-white rounded-xl hover:bg-darkBlue hover:text-white hoverEffect">
        <FaRegEye />
      </div>
      <div className="border shadow-md bg-white rounded-xl hover:bg-darkBlue hover:text-white hoverEffect">
        <TbArrowsRightLeft />
      </div>
      <div className="border shadow-md bg-white rounded-xl hover:bg-darkBlue hover:text-white hoverEffect">
        <RiShoppingBag4Line />
      </div>
    </div>
  );
};

export default ProductCartBar;
