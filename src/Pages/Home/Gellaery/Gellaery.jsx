import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";


import AOS from "aos";
import "aos/dist/aos.css";

import img1 from "../../../assets/1.jpg";
import img2 from "../../../assets/2.jpg";
import img3 from "../../../assets/3.jpg";
import img4 from "../../../assets/4.jpg";
import img5 from "../../../assets/5.jpg";
import img6 from "../../../assets/6.jpg";
import img7 from "../../../assets/7.jpg";

const Gellaery = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div data-aos="fade-up" className="bg-slate-100">
      <h1 className="text-center text-primary font-semibold text-4xl py-6">
        Toys Gallery
      </h1>
      <div className="grid lg:grid-cols-4 gap-3 w-10/12 mx-auto">
        <img className="h-80 w-full lg:w-72 mr-4 rounded-lg" src={img1} alt="" />
        <img className="h-80 w-full lg:w-72 mr-4 rounded-lg" src={img3} alt="" />
        <img className="h-80 w-full lg:w-72 mr-4 rounded-lg" src={img4} alt="" />
        <img className="h-80 w-full lg:w-72 mr-4 rounded-lg" src={img5} alt="" />
        <img className="h-80 w-full lg:w-72 mr-4 rounded-lg" src={img6} alt="" />
        <img className="h-80 w-full lg:w-72 mr-4 rounded-lg" src={img7} alt="" />
        <img className="h-80 w-full lg:w-72 mr-4 rounded-lg" src={img1} alt="" />
        <img className="h-80 w-full lg:w-72 mr-4 rounded-lg" src={img6} alt="" />
      </div>
    </div>
  );
};

export default Gellaery;


