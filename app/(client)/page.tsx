import Container from "@/components/Container";
import DiscountBanner from "@/components/DiscountBanner";
import ProductList from "@/components/ProductList";

import {  getAllCategories, getAllProducts, getSale } from "@/sanity/helpers";

export default async function Home() {
  const products = await getAllProducts();
  const sales = await getSale();
  const categories = await getAllCategories();
  console.log(categories);
  return (
    <div>
      <Container className="py-1">
        <DiscountBanner sales={sales} />
        <ProductList products = {products} title={true} categories={categories} />
      </Container>
    </div>
  );
}
