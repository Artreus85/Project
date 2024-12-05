"use client"

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

const Navbar: React.FC = () => {
  return (
      <nav className="bg-[#457B9D] text-white px-6 py-4">
        
        <div className="container mx-auto flex justify-between items-center">

          <span className="text-2xl font-bold">
            <Link href="#">
              <img className="max-w-14" src="./logo.png" alt="GeoQuest" />
            </Link>
          </span>

          <div className="flex space-x-36">
            <Link href="/game" className="text-xl font-bold hover:underline"> Играй </Link> 
            <Link href="/leaderboard" className="text-xl font-bold hover:underline"> Класация </Link> 
            <Link href="/about-us" className="text-xl font-bold hover:underline"> За нас </Link> 
          </div>

          <div className="flex justify-end">
            <Link href="/login" className="text-xl font-bold hover:underline"> Влез </Link> 
            <Link href="/register" className="text-xl font-bold hover:underline"> Регистрирай се </Link> 
          </div>

          <div>
            <Link href="#"> 
              <Image className="max-w-14" src="/user.png" alt="Account button" width={56} height={20}/>
            </Link>
          </div>

        </div>
      </nav>
  );
};

export default Navbar;