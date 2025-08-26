import React from "react";
import { Copyright, Instagram } from "lucide-react";

function Footer() {
  return (
    <div className="w-full bg-gray-50 border-t border-gray-200">
      {/* Mobile divider line */}
      <div className="w-[90%] mx-auto bg-gray-300 h-[1px] md:hidden  mb-6"></div>

      {/* Main footer content */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright section */}
          <div className="flex flex-row gap-x-1 pr-2 justify-center items-center text-gray-700">
            <Copyright className="w-4 h-4 text-gray-500" />
            <span className="text-sm md:text-base font-medium">
              2025 Fashion AI
            </span>
          </div>

          <div className="flex flex-row pl-1 lg:gap-x-1  justify-center items-center">
            <a href="mailto:saeb@imtiyaz.io">saeb@imtiyaz.io</a>
          </div>

          {/* Legal links section */}
          <div className="flex flex-row gap-x-4 justify-center items-center">
            <a
              href="/privacy-policy"
              className="text-sm md:text-base text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              className="text-sm md:text-base text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
