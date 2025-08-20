import Image from "next/image";
import React from "react";
import { Menu, X } from "lucide-react";

function MobHeader({
  ClickMenu,
  setClickMenu,
}: {
  ClickMenu: boolean;
  setClickMenu: (value: boolean) => void;
}) {
  return (
    <>
      <div className="w-full md:hidden">
        <div className="w-full flex flex-row justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Image
              src="/img/1.jpg"
              alt="Fashion Dreamer Logo"
              width={500}
              height={500}
              className="w-12 h-12 object-cover rounded-xl shadow-md"
            />
            <h1 className="text-xl font-bold text-gray-800">Fashion Dreamer</h1>
          </div>

          {/* Menu Button */}
          <div className="relative">
            <button
              onClick={() => setClickMenu(!ClickMenu)}
              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {ClickMenu ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MobHeader;
