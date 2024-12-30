import React from "react";
import Container from "./Container";
import Image from "next/image";
import payment from "@/images/payment.png";

const Footer = () => {
  return (
    <div className="bg-lightBg text-sm">
      <Container className="py-5">
        <footer className="flex items-center justify-between">
          <p className="text-gray-500">
            Copyright © 2024{" "}
            <span className="text-darkBlue font-semibold">GServeTech</span> all
            rights reserved. <span className="text-darkBlue font-semibold">📞 416-635-0502</span>{" "}
            <span className="text-darkBlue font-semibold">✉️ GServeTech@gmail.com</span>
          </p>
          <Image src={payment} alt="payment" className="w-64 object-cover" />
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
