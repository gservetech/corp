import performanceImg from "public/performance.jpg";
import Hero from "@/components/hero";

export default function Performance() {
  return (
    <Hero
      imgData={performanceImg}
      imgAlt="welding"
      title="we serve high performance application"
    />
  );
}
