import React from "react";
import AmazonGrid from "./AmazonGrid";

// TypeScript interface for Product
interface Product {
  _id: string; // Unique identifier combining ASIN, deal ID, and index
  asin: string; // Amazon Standard Identification Number
  deal_id: string; // Unique deal identifier
  title: string; // Product title
  discountPercentage: number; // Discount percentage
  discountInfo: string; // Additional discount details
  productLink: string; // URL to the product page
  imageSources: string[]; // Array of image URLs
  description: string[]; // Array of paragraphs for the product description
}

// TypeScript Props for AmazonList
interface Props {
  products: Product[]; // List of products to display
  title?: boolean; // Optional flag to display the title section
}

const AmazonList: React.FC<Props> = ({ products, title }: Props) => {
  // Log products to the console
 

  return (
    <div>
      {/* Conditionally render title section */}
      {title && (
        <div className="pb-5">
          <h2 className="text-2xl font-semibold text-gray-600">
            Day of the <span className="text-lightBlue">Deal</span>
          </h2>
          <p className="text-sm text-gray-500 font-thin">
            Don&rsquo;t wait. The time will never be just right.
          </p>
        </div>
      )}

      {/* Render AmazonGrid component */}
      <AmazonGrid products={products} />
    </div>
  );
};

export default AmazonList;
