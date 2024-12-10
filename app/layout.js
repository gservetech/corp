import "@/app/globals.css";
import "@/app/showcase.css";
import "@/app/holygrail.css";
import { Ubuntu, Sofia } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
const ubuntu = Ubuntu({
  weight: ["300"],
  subsets: ["latin"], // Use the appropriate subset for your language
});
const sofia = Sofia({
  weight: "400", // Specify font weight
  subsets: ["latin"],
});
export const metadata = {
  title: "Promise planners",
  description: "Promise planners",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={sofia.className}>
        <ClerkProvider>{children}</ClerkProvider>
      </body>
    </html>
  );
}
