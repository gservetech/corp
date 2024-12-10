import "@/app/globals.css";
import "@/app/holygrail.css";
import "@/components/navigation/FinanceBoxes.module.css";
import { Navbar } from "@/components/navigation/navbar";
import FinanceBoxes from "@/components/navigation/FinanceBoxes";
import Image from "next/image";

const adImages = {
  ad1: "/ads/google-ad.png",
  ad2: "/ads/amazon-ad.png",
};

export default function Home() {
  return (
    <div className="holygrail">
      {/* Header */} 
      <Navbar />
      
      <section className="finance-box-section">
        <FinanceBoxes />
      </section>

      {/* Main Content Area */}
      <main className="main">
        <aside className="secondary">
          <div className="image-container">
            <Image
              src={adImages.ad1}
              alt="Google Ad"
              fill
              className="ad-image"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </aside>

        <article className="content">
          <h1>Main Content</h1>
          <p>Content goes here...</p>
        </article>

        <aside className="tertiary">
          <div className="image-container">
            <Image
              src={adImages.ad2}
              alt="Amazon Ad"
              fill
              className="ad-image"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </aside>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Promise Planners. All rights reserved.</p>
      </footer>
    </div>
  );
}
