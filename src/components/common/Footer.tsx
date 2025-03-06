import React from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* 🏢 Company Info */}
        <div>
          <h3 className="text-xl font-semibold mb-3">EvWheels</h3>
          <p className="text-gray-400">
            Your one-stop shop for EV batteries, spare parts, and accessories.
          </p>
        </div>

        {/* 🔗 Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/about" className="hover:underline">About Us</Link></li>
            <li><Link href="/products" className="hover:underline">Products</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            <li><Link href="/faq" className="hover:underline">FAQs</Link></li>
          </ul>
        </div>

        {/* 📩 Contact & Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-4 text-xl">
            <Link href="https://facebook.com" target="_blank" className="hover:text-blue-500">
              <FaFacebook />
            </Link>
            <Link href="https://instagram.com" target="_blank" className="hover:text-pink-500">
              <FaInstagram />
            </Link>
            <Link href="https://twitter.com" target="_blank" className="hover:text-blue-400">
              <FaTwitter />
            </Link>
          </div>
        </div>
      </div>

      {/* 📜 Copyright */}
      <div className="text-center text-gray-400 mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} EvWheels. All rights reserved.
      </div>
    </footer>
  );
}
