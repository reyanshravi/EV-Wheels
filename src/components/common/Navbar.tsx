"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu, ShoppingCart, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="bg-white shadow-md dark:bg-gray-900">
      <nav className="container mx-auto flex items-center justify-between p-4">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          EvWheels
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6">
          <Link href="/products" className="hover:text-gray-600 dark:hover:text-gray-300">Products</Link>
          <Link href="/about" className="hover:text-gray-600 dark:hover:text-gray-300">About</Link>
          <Link href="/contact" className="hover:text-gray-600 dark:hover:text-gray-300">Contact</Link>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">
          {/* Cart */}
          <Link href="/cart" className="relative">
            <ShoppingCart className="w-6 h-6" />
          </Link>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger>
              <User className="w-6 h-6 cursor-pointer" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href="/account">My Account</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/orders">Orders</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/logout">Logout</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger className="md:hidden">
              <Menu className="w-6 h-6" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Link href="/products">Products</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/about">About</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/contact">Contact</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  );
}
