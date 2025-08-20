"use client";

import Image from "next/image";

import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

function OperationSection() {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    if (window.innerWidth <= 768) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#imageSection",
          start: "center center",
          end: "+=350%",
          scrub: 1,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
        },
      });

      tl
        // Image 1 fade out

        .to(
          "#image1",
          {
            opacity: 0,
            duration: 1,
            scale: 0.8,
            ease: "power1.inOut",
          },
          "0.1"
        )
        // Image 2 slide up
        .fromTo(
          "#image2",
          {
            y: "100%",
          },
          {
            y: "0%",
            ease: "power1.inOut",
            duration: 1,
          },
          "0.1"
        )
        // Image 2 fade out
        .to(
          "#image2",
          {
            opacity: 0,
            duration: 1,
            scale: 0.8,
          },
          "1.3"
        )
        // Image 3 slide up
        .fromTo(
          "#image3",
          {
            y: "100%",
          },
          {
            y: "0%",
            duration: 1,
            ease: "power1.inOut",
          },
          "1.3"
        )
        // Image 3 fade out
        .to(
          "#image3",
          {
            opacity: 0,
            duration: 1,
            scale: 0.8,
          },
          "2.5"
        )
        // Image 4 slide up
        .fromTo(
          "#image4",
          {
            y: "100%",
          },
          {
            y: "0%",
            duration: 1,
            ease: "power1.inOut",
          },
          "2.5"
        )
        // Image 4 fade out

        // Final section transition
        .to(
          "#imageSection",
          {
            scale: 0.95,
            opacity: 0.8,
            duration: 1,
            ease: "power2.inOut",
          },
          "3.5"
        );
    }
  }, []);
  return (
    <div
      className="w-full pb-6   md:hidden bg-gradient-to-br from-gray-50 to-white  h-[33rem]"
      id="imageSection"
    >
      <div className="relative w-full h-[32rem] overflow-hidden ">
        <Image
          id="image1"
          src="/img2/1.jpg"
          width={2000}
          height={2000}
          alt="OP image1"
          className=" absolute rounded-2xl shadow-2xl left-0  h-[32rem] right-0 w-[90%] mx-auto object-cover"
        />

        <Image
          id="image2"
          src="/img2/2.jpg"
          width={2000}
          height={2000}
          alt="OP image2"
          className="absolute rounded-2xl shadow-2xl right-0 left-0 w-[90%] h-[32rem]  mx-auto  object-cover "
        />
        <Image
          id="image3"
          src="/img2/3.jpg"
          width={2000}
          height={2000}
          alt="OP image3"
          className="absolute rounded-2xl shadow-2xl inset-0 w-[90%] h-[32rem]   mx-auto  object-cover "
        />
        <Image
          id="image4"
          src="/img2/4.jpg"
          width={2000}
          height={2000}
          alt="OP image2"
          className="absolute rounded-2xl shadow-2xl inset-0 w-[90%] h-[32rem]  mx-auto  object-cover "
        />
      </div>
    </div>
  );
}

export default OperationSection;
