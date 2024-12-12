import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Ecommerce WebSite for Shoppers",
    description: "Ecommerce WebSite for Educational purposes",
  };
const RootLayout = ({children}:{children:React.ReactNode}) => {
return (
    <html lang="en">
        <body>{children}</body>
    </html>
);
};

export default RootLayout;
