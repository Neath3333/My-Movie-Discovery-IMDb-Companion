import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-200 p-6 w-full">
      {/* Top Row: Logo and Links */}
      <div className="grid grid-cols-3 items-center mb-4 relative">

        {/* Logo - LEFT */}
        <div className="justify-self-start">
          <Image src="/logo.png" alt="Movie Space Logo" width={100} height={100} />
        </div>

        {/* Quick Links - CENTERED */}
        <div className="justify-self-center">
          <h2 className="text-blue-600 mb-2 text-center">Quick Links</h2>
          <ul className="flex flex-col items-start space-y-1">
            <li><Link href="/about" className="text-gray-700 hover:text-blue-600">About Us</Link></li>
            <li><Link href="/discover" className="text-gray-700 hover:text-blue-600">Discover</Link></li>
            <li><Link href="/privacy" className="text-gray-700 hover:text-blue-600">Privacy Policy</Link></li>
            <li><Link href="/terms" className="text-gray-700 hover:text-blue-600">Terms of Service</Link></li>
            <li><Link href="/setting" className="text-gray-700 hover:text-blue-600">Settings</Link></li>
          </ul>
        </div>

        {/* Empty RIGHT column for balance */}
        <div></div>

      </div>

      {/* Bottom Row: Copyright - CENTERED */}
      <div className="text-center border-t border-gray-300 pt-4">
        <p className="text-gray-600">© 2024 Movie Space. All rights reserved.</p>
      </div>

    </footer>
  );
}