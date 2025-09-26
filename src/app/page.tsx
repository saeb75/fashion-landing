import Image from "next/image";
import MainHeader from "./Components/Header/MainHeader";
import Footer from "./Components/Footer/Footer";
import UserReview from "./Components/UserReview";
import OperationSection from "./Components/OperationSection/OperationSection";
import Contact from "./Components/Contact/Contact";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Desktop Layout - Hidden on mobile */}
      <div className="hidden md:block bg-gradient-to-br from-gray-50 to-white">
        <MainHeader />
        <OperationSection />
        <UserReview />
        <Contact />
        <Footer />
      </div>
      <div className="md:hidden  to-transparent h-screen bg-[url('/BA/bg.png')] bg-cover bg-center relative w-full">
        <div className="w-full h-full bg-gradient-to-t from-black to-transparent absolute top-0 left-0"></div>
        <div className="w-full h-full flex flex-col justify-center items-center z-20 relative">
          <Image
            src="/BA/logo.png"
            alt="logo"
            width={200}
            height={200}
            className="animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          />
          <h1
            className="text-2xl text-center font-bold text-white animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            Create Your Own AI Fashion Model for your Clothes
          </h1>
          <Link
            href="https://pixpose.onelink.me/BEOc/trn43ini"
            className="animate-fade-in-up hover:scale-105 transition-transform duration-300"
            style={{ animationDelay: "0.6s" }}
          >
            <Image
              src="/img/r.svg"
              alt="App Store"
              width={500}
              height={500}
              className="w-56 mt-12"
            />
          </Link>
        </div>
      </div>
    </>
  );
}
