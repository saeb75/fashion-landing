import React from "react";
import Link from "next/link";

function DesHeader() {
  return (
    <div className="w-full hidden md:block">
      <div className="w-full flex flex-row justify-between items-center py-6">
        {/* Logo */}
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Fashion Dreamer
        </h1>

        {/* Navigation */}
        <nav className="flex flex-row items-center gap-x-8 md:gap-x-12 lg:gap-x-16">
          <Link
            href="/"
            className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 cursor-pointer relative group"
          >
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
          </Link>
          <Link
            href="/privacy-policy"
            className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 cursor-pointer relative group"
          >
            Privacy Policy
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
          </Link>
          <Link
            href="/terms-of-service"
            className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 cursor-pointer relative group"
          >
            Terms of Service
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
          </Link>
          <Link
            href="/account-deletion"
            className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 cursor-pointer relative group"
          >
            Account Deletion
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default DesHeader;
