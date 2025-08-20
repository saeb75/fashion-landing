"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import MobHeader from "../HeaderComp/MobHeader";
import DesHeader from "../HeaderComp/DesHeader";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function MainHeader() {
  gsap.registerPlugin(SplitText, ScrollTrigger);
  // useGSAP(() => {
  //   gsap.timeline({ repeat: -1, yoyo: true }).fromTo(
  //     "#f1",
  //     {
  //       width: "10%",
  //     },
  //     {
  //       width: "90%",
  //       duration: 3,
  //       ease: "power1.inOut",
  //     },
  //     0
  //   );
  // }, []);

  useGSAP(() => {
    gsap
      .timeline({ repeat: -1, yoyo: true })
      .fromTo(
        "#f1",
        {
          width: "10%",
        },
        {
          width: "90%",
          duration: 2.5,
          ease: "power1.inOut",
        }
      )
      .to({}, { duration: 1 });
  }, []);
  useGSAP(() => {
    const Scrollt = gsap.timeline({
      scrollTrigger: {
        trigger: "#main",
        start: "top 80%",
      },
    });

    const textSp = SplitText.create("#HeroHeading", {
      type: "words",
    });
    const textSp2 = SplitText.create("#HeroDesciption", {
      type: "lines",
    });

    Scrollt.fromTo(
      textSp.words,
      {
        opacity: 0,
      },
      {
        opacity: 1,

        duration: 1,
        stagger: 0.1,
        onStart: () => {
          gsap.set("#HeroHeading", { opacity: 1 });
        },
      }
    );

    Scrollt.fromTo(
      textSp2.lines,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.3,
        duration: 1,
        ease: "expo",

        onStart: () => {
          gsap.set("#HeroDesciption", { opacity: 1 });
        },
      },
      1
    )
      .to("#LogoImage", {
        rotate: 5,
        x: 5,
        y: 5,

        duration: 1,
        ease: "power1.inOut",
      })
      .to("#LogoImage", {
        rotate: 0,
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.4,
        ease: "power1.inOut",
      });
  }, []);

  const [ClickMenu, setClickMenu] = useState(false);

  useEffect(() => {
    if (ClickMenu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [ClickMenu]);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div id="main" className="w-full h-full px-4 md:px-8 lg:px-16 xl:px-24  ">
        {/* Header Navigation */}
        <MobHeader ClickMenu={ClickMenu} setClickMenu={setClickMenu} />
        <DesHeader />

        {/* Mobile Menu Overlay */}
        {ClickMenu && (
          <div className="fixed inset-0 top-24 left-0 w-full h-full bg-white/95 backdrop-blur-sm z-50 animate-in slide-in-from-top-2 duration-300">
            <div className="w-full h-full flex flex-col justify-between items-center pt-24 pb-10 px-6">
              <div className="w-full flex flex-col justify-center items-center text-center gap-y-6">
                <Link
                  href="/"
                  className="text-2xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200 cursor-pointer"
                  onClick={() => setClickMenu(false)}
                >
                  Home
                </Link>
                <Link
                  href="/privacy-policy"
                  className="text-2xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200 cursor-pointer"
                  onClick={() => setClickMenu(false)}
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-of-service"
                  className="text-2xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200 cursor-pointer"
                  onClick={() => setClickMenu(false)}
                >
                  Terms of Service
                </Link>
              </div>
              <div className="w-full flex flex-col justify-center items-center text-center">
                <div className="w-full h-[1px] bg-gray-200 mb-4"></div>
                <h1 className="text-2xl font-bold text-gray-800 mb-2">
                  2025 Fashion Dreamer
                </h1>
                <h3 className="text-gray-600 font-medium">
                  All rights reserved
                </h3>
              </div>
            </div>
          </div>
        )}

        {/* Hero Section */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 mt-12 md:mt-20 lg:mt-24">
          {/* Left Column - Content */}
          <div className="col-span-1 flex flex-col justify-center order-2 lg:order-1">
            <div className="w-full flex flex-col gap-y-6 md:gap-y-8">
              {/* Logo Image */}
              <Image
                id="LogoImage"
                src="/img/1.jpg"
                alt="Fashion Dreamer Logo"
                width={500}
                height={500}
                className="w-20 md:w-24 lg:w-28 object-cover rounded-2xl shadow-lg hidden md:block mb-2"
              />

              {/* Main Heading */}
              <div className="space-y-4 md:space-y-6">
                <h1
                  id="HeroHeading"
                  className="text-4xl opacity-0 md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight "
                >
                  <span>See your Clothes on </span>
                  <span className="block">Elegant Styles </span>
                </h1>

                {/* Subheading */}
                <h2
                  id="HeroDesciption"
                  className="text-lg md:text-xl lg:text-2xl font-normal leading-relaxed text-gray-600 max-w-lg opacity-0"
                >
                  Reimagine Your Wardrobe: Let AI Creatively Showcase Your
                  Clothes in Stunning, Realistic Styles.
                </h2>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-row sm:flex-row items-start sm:items-center gap-4 justify-center  pt-6 md:pt-8">
                <Image
                  src="/img/r.svg"
                  alt="App Store"
                  width={500}
                  height={500}
                  className="w-40 md:w-40 lg:w-56 object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                />
                <Image
                  src="/img/e.png"
                  alt="Google Play"
                  width={500}
                  height={500}
                  className="w-40 md:w-40 lg:w-56 object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="col-span-1 order-1 lg:order-2 flex items-center justify-center">
            <div className="relative w-full max-w-lg lg:max-w-none flex overflow-hidden rounded-3xl">
              <Image
                id="f2"
                src="/BA/f1.jpg"
                alt="AI Interior Design Preview"
                width={2000}
                height={2000}
                className="w-[90%] h-[239px] rounded-l-3xl md:h-[300px] lg:h-[550px] object-cover shadow-2xl"
              />

              <Image
                id="f1"
                src="/BA/f2.jpg"
                alt="AI Interior Design Preview"
                width={2000}
                height={2000}
                className="absolute top-0 right-0 h-[239px] md:h-[300px] lg:h-[550px] object-cover rounded-r-3xl shadow-2xl"
                style={{ width: "10%" }}
              />

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
