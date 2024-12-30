"use client"
import { useState, useEffect } from "react";
import AffiliateBanner from "@/components/AffliateBanner";
import Container from "@/components/Container";
import AmazonList from "@/components/AmazonList";
import { getAllCategories, getSale } from "@/sanity/helpers";

// TypeScript Interfaces
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

interface Sale {
  _id: string; // Unique identifier for the sale
  products: Product[]; // Array of products in the sale
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [sales, setSales] = useState<Sale[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch categories
  //      const categoryData = await getAllCategories();
  //      setCategories(categoryData);

        // Fetch sales
   //     const saleData = await getSale();
   //     setSales(saleData);

        // Optionally fetch and set products if needed
        const response = await fetch("/bulk_sales.json");
        if (!response.ok) {
          throw new Error("Failed to fetch sales data");
        }
        const productData: Product[] = await response.json();
        setProducts(productData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container className="pb-10">
      <AffiliateBanner />
      <AmazonList title={true} products={products} />
    </Container>
  );
}
