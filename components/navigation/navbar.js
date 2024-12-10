"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";

export function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const { isSignedIn, user } = useUser();

  return (
    <nav className="w-full bg-[#FAAF08] shadow-md sticky top-0 z-50">
      {/* Include Custom Font */}
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap");

        .custom-font {
          font-family: "Poppins", sans-serif;
          font-size: 1rem;
        }
      `}</style>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-4">
            <Image
              src="/logo1.jpg" // Ensure this file exists in the public folder
              alt="Logo"
              width={140}
              height={140}
              className="rounded-full"
            />
            <span className="text-[#D61800] font-bold text-2xl custom-font">
              Promise Planners
            </span>
          </div>

        

          {/* Auth Buttons and Avatar */}
          <div className="hidden md:flex items-center space-x-4">
            {isSignedIn ? (
              <>
                <button
                  onClick={() => router.push("/profile")}
                  className="bg-[#FA4032] text-white  px-4 py-2 rounded-md hover:bg-[#D9322B] custom-font"
                >
                  Profile
                </button>
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 border-2 border-gray-300">
                    {user?.profileImageUrl ? (
                      <Image
                        src={user.profileImageUrl}
                        alt="User Avatar"
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                    ) : (
                      <Image
                        src="/placeholder-avatar.png" // Ensure this image exists in the public folder
                        alt="Default Avatar"
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                    )}
                  </div>
                  <span className="text-[#D61800] font-bold custom-font">
                    {user?.fullName || "Guest"}
                  </span>
                </div>
              </>
            ) : (
              <>
                <button
                  onClick={() => router.push("/login")}
                  className="bg-[#FA4032] text-white  px-4 py-2 rounded-md hover:bg-[#D9322B] custom-font"
                >
                  Login
                </button>
                <button
                  onClick={() => router.push("/register")}
                  className="bg-[#FA4032] text-white  px-4 py-2 rounded-md hover:bg-[#D9322B] custom-font"
                >
                  Register
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 bg-[#D61800] text-white rounded-md"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12" // Close icon
                      : "M4 6h16M4 12h16M4 18h16" // Hamburger icon
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#FAAF08] px-4 py-3 space-y-2">
          <Link
            href="/"
            className="block bg-[#D61800] text-white  py-2 px-3 rounded-md hover:bg-[#A91400] custom-font"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block bg-[#D61800] text-white  py-2 px-3 rounded-md hover:bg-[#A91400] custom-font"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <button
            onClick={() => {
              router.push("/services");
              setMobileMenuOpen(false);
            }}
            className="block bg-[#D61800] text-white  py-2 px-3 rounded-md hover:bg-[#A91400] custom-font"
          >
            Services
          </button>
          <button
            onClick={() => {
              router.push("/login");
              setMobileMenuOpen(false);
            }}
            className="w-full bg-[#FA4032] text-white  py-2 rounded-md hover:bg-[#D9322B] transition-all custom-font"
          >
            Login
          </button>
          <button
            onClick={() => {
              router.push("/register");
              setMobileMenuOpen(false);
            }}
            className="w-full bg-[#FA4032] text-white  py-2 rounded-md hover:bg-[#D9322B] transition-all custom-font"
          >
            Register
          </button>
        </div>
      )}
    </nav>
  );
}
