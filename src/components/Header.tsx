"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { APP_LINKS } from "@/utils/constant";
import { Input } from "@/components/ui/input";
import { ShoppingCart } from "lucide-react";
function Header() {
  return (
    <div className="p-5 flex justify-between items-center">
      <Link href={"/"}>
        <Image src={"/header/Logo.webp"} alt="Logo" width={100} height={53} />
      </Link>
      <div className="flex gap-10 items-center">
        {APP_LINKS.map((link) => {
          return (
            <Link href={link.href}>
              <p className="font-semibold">{link.name}</p>
            </Link>
          );
        })}
      </div>
      <div>
        <Input placeholder="Search products" className="h-8" />
      </div>
      <div
        className="h-10 w-10 rounded-full bg-gray-200
      flex justify-center items-center relative"
      >
        <div
          className="h-4 w-4 rounded-full bg-red-500
      flex justify-center items-center text-white absolute right-1 top-0"
        >
          <p className="text-sm">0</p>
        </div>
        <ShoppingCart />
      </div>
    </div>
  );
}

export default Header;
