import PriceFormatter from "./PriceFormatter";

interface Props {
  price: number | undefined;
  discount: number | undefined;
  className?: string;
  label?: string;
}

const PriceView = ({ price, discount, label, className }: Props) => {
  console.log(className);
  return (
   
    <div className="flex items-center justify-between gap-5">
      <div className="flex items-center gab-2">
        <PriceFormatter amount={price} />
        {price && discount && (
          <PriceFormatter
            amount={price + (discount * 2) / 100}
            className="text-xs font-medium line-through"
          />
        )}
      </div>
      <p className="text-gray-500">{label}</p>
    </div>
  );
};

export default PriceView;
