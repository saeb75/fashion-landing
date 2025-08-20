import Image from "next/image";
import React from "react";

function UserReviewCart({
  review,
  author,
}: {
  review: string;
  author: string;
}) {
  const StarComp = () => {
    return (
      <div className="flex gap-x-1">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="w-5 h-5">
            <Image
              src="/img/star.png"
              alt="star"
              width={20}
              height={20}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 max-w-sm md:max-w-lg mx-auto border border-gray-100">
      {/* Stars */}
      <div className="flex justify-center mb-4">
        <StarComp />
      </div>

      {/* Quote Icon */}
      <div className="flex justify-center mb-4">
        <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center">
          <svg
            className="w-4 h-4 text-blue-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
      </div>

      {/* Review Text */}
      <div className="mb-6 ">
        <p className="text-gray-700 text-sm md:text-base leading-relaxed italic">
          &ldquo;{review}&rdquo;
        </p>
      </div>

      {/* Author */}
      <div className="text-center">
        <h3 className="text-gray-800 font-semibold text-base">{author}</h3>
      </div>
    </div>
  );
}

export default UserReviewCart;
