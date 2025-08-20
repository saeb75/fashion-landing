import React from "react";
import UserReviewCart from "./UserReviewCarts/UserReviewCart";

function UserReview() {
  const ReviewData = [
    {
      review:
        "“This app effortlessly showed my outfits in ways I hadn’t imagined before, absolutely stunning results. Truly amazing!”",
      author: "Andrea S.",
      rating: 5,
    },
    {
      review:
        "“FashionAI gave me endless creative outfit ideas. I finally see my wardrobe in a whole new light!”",
      author: "Michael T.",
      rating: 5,
    },
    {
      review:
        "“This app is pure magic! My outfits have never looked this professional and stylish!”",
      author: "Ryan G.",
      rating: 5,
    },
  ];

  return (
    <section className="w-full pb-16 pt-7 md:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What our users are saying <span className="text-blue-600">👋</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            See why thousands of fashion lovers trust AI to transform their
            wardrobe with FashionAI
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {ReviewData.map((item, index) => (
            <UserReviewCart
              key={index}
              review={item.review}
              author={item.author}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 md:mt-16">
          <p className="text-gray-600 text-lg mb-4">
            Ready to transform your style?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="text-sm text-gray-500 bg-white px-4 py-2 rounded-full border border-gray-200">
              ⭐ 4.9/5 from 2,000+ reviews
            </div>
            <div className="text-sm text-gray-500 bg-white px-4 py-2 rounded-full border border-gray-200">
              🚀 50,000+ rooms redesigned
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserReview;
