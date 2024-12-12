import Container from "@/components/Container";
import DiscountBanner from "@/components/DiscountBanner";
 
import { getSale } from "@/sanity/helpers";

export default async function Home() {
  const sales = await getSale();
  
  return (
    <div>
      <Container className="py-40">
       <DiscountBanner sales={sales}/>
      </Container>
    </div>
  );
}
