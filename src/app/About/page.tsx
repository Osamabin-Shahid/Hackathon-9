import React from "react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";

import about1 from "../../../public/about1.png";
import about2 from "../../../public/about2.png";
import about3 from "../../../public/about3.png";

function AboutUs() {
  return (
    <section className="bg-black px-4 md:px-8 lg:px-32 flex flex-col lg:flex-row items-center lg:justify-between py-10 lg:py-20">
      {/* Text Section */}
      <div className="text-white w-full lg:w-[50%]">
        <h1 className="text-[20px] md:text-[32px] font-normal text-[#FF9F0D] font-greatVibes">
          About Us
        </h1>

        <h1 className="text-[28px] md:text-[40px] lg:text-[50px] font-bold mt-2 lg:mt-4 leading-snug">
          <span className="text-[#FF9F0D]">We</span> Create the Best Foody
          Product
        </h1>

        <p className="text-[14px] md:text-[16px] font-normal mt-4 lg:mt-6 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
          augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
          sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
          consequat.
        </p>

        <ul className="mt-6 lg:mt-10 space-y-4">
          <li className="text-[14px] md:text-[16px] flex items-start">
            <FaCheck className="text-[#FF9F0D] mt-1 mr-3" />
            Lacus nisi, et ac dapibus sit eu velit in consequat.
          </li>
          <li className="text-[14px] md:text-[16px] flex items-start">
            <FaCheck className="text-[#FF9F0D] mt-1 mr-3" />
            Quisque diam pellentesque bibendum non dui volutpat fringilla.
          </li>
          <li className="text-[14px] md:text-[16px] flex items-start">
            <FaCheck className="text-[#FF9F0D] mt-1 mr-3" />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </li>
        </ul>

        <div className="mt-8 lg:mt-12">
          <button className="bg-[#FF9F0D] text-white text-sm md:text-base px-6 py-2 md:px-10 md:py-3 rounded-full hover:bg-yellow-800 transition duration-300">
            See More
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="mt-8 lg:mt-0 w-full lg:w-[45%] flex flex-col items-center lg:items-start">
        <Image
          src={about1}
          alt="About Image 1"
          className="w-full lg:w-[80%] rounded-lg"
        />
        <div className="flex flex-col md:flex-row justify-center lg:justify-start gap-4 mt-6 w-full">
          <Image
            src={about2}
            alt="About Image 2"
            className="w-full md:w-[48%] lg:w-[40%] rounded-lg"
          />
          <Image
            src={about3}
            alt="About Image 3"
            className="w-full md:w-[48%] lg:w-[40%] rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
