"use client";

import { useEffect, useState } from "react";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import React from "react";
import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Badge } from "./ui/badge";
import AffiliateProductDetail from "./AffliateProductDetail";

export interface Sale {
  _id: string;
  badge: string;
  discountAmount: number;
  title: string;
  description: string | string[];
  couponCode: string;
  image?: string;
  asin: string;
  deal_id: string;
  discountPercentage: number;
  discountInfo: string;
  productLink: string;
  imageSources: string[];
}

const AffiliateBanner = () => {
  const [sales, setSales] = useState<Sale[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Sale | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchSales = async () => {
      try {
        const response = await fetch("/sales.json");
        if (!response.ok) {
          throw new Error("Failed to fetch sales data");
        }
        const data: Sale[] = await response.json();
        setSales(data);
      } catch (error) {
        console.error("Error fetching sales data:", error);
      }
    };

    fetchSales();
  }, []);

  const openModal = (product: Sale) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <Carousel className="w-full max-w-screen-xl mx-auto  mt-10 mb-5 relative">
        <CarouselContent>
          {sales.map((sale) => (
            <CarouselItem key={sale.asin}>
              <a
                href={sale.productLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row items-center">
                    {/* Text Content */}
                    <div className="flex-1 p-6 md:px-12">
                      <Badge
                        variant="secondary"
                        className="mb-2 md:mb-4 text-darkBlue capitalize text-xl md:text-2xl"
                      >
                        {sale.badge} {sale.discountPercentage}% off
                      </Badge>
                      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight  ml-20 mb-2 md:mb-4">
                        {sale.title}
                      </h2>
                      <button
                        onClick={() => window.open(sale.productLink, "_blank")}
                        className="px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 transition"
                      >
                        ON AMAZON {sale.discountPercentage}% off
                      </button>
                    </div>

                    {/* Image Section */}
                    {sale.imageSources && sale.imageSources.length > 0 && (
                      <div className="w-full md:w-1/2 h-auto relative flex items-center justify-center py-2">
                        <Image
                          src={sale.imageSources[0]}
                          alt="bannerImage"
                          width={200}
                          height={100}
                          priority
                          className="h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                        />
                      </div>
                    )}
                  </div>
                </CardContent>
               
              </Card>
              </a>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Previous Button */}
        <CarouselPrevious className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-3xl bg-blue-800 hover:bg-blue-900 rounded-full p-6 shadow-xl z-10" />

        {/* Next Button */}
        <CarouselNext className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl bg-blue-800 hover:bg-blue-900 rounded-full p-6 shadow-xl z-10" />
      </Carousel>

      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2">
            <AffiliateProductDetail
              product={selectedProduct}
              onClose={closeModal}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default AffiliateBanner;
