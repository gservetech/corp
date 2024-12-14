import { Category } from "@/sanity.types";

function Categories({ categories }: { categories: Category[] }) {
  console.log(categories)
  return <div>Categories</div>;
}

export default Categories;
