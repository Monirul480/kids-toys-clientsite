import React, {useEffect} from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

import AOS from "aos";
import "aos/dist/aos.css";


import img1 from "../../../assets/1.jpg";
import img2 from "../../../assets/2.jpg";
import img3 from "../../../assets/3.jpg";
import img4 from "../../../assets/4.jpg";
import img5 from "../../../assets/5.jpg";
import img6 from "../../../assets/6.jpg";

const ReviewCard = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div data-aos="fade-up" className="min-h-[calc(100vh-35vh)] bg-slate-200">
      <h1 className="text-2xl pt-6 pb-4 font-bold text-center text-primary">
        Web site Review
      </h1>
      <div className="lg:flex pb-6">
        <div className="lg:w-3/12 p-3 mx-3 border-2 border-lime-400 rounded-md text-center">
          <img
            className="h-16 flex mx-auto rounded-3xl w-16"
            src={img1}
            alt=""
          />
          <h1 className="text-xl mt-4 font-bold ">Name : Monirul islam</h1>
          <Rating
            className="my-4 flex mx-auto"
            style={{ maxWidth: 150 }}
            readOnly
            value={4.5}
          />
          <h3>
            We recommend Embed Social. Pre-pandemic I was constantly searching
            for New York City restaurants and I base my decisions on #stars and
            #reviews to make my decision. Its #socialproof and I continue to do
            it with just about everything we .
          </h3>
          <p className="font-bold mt-6 pb-6">1 Year</p>
        </div>
        <div className="lg:w-3/12 p-3 mx-3 border-2 border-lime-400 rounded-md text-center">
          <img
            className="h-16 flex mx-auto rounded-3xl w-16"
            src={img2}
            alt=""
          />
          <h1 className="text-xl mt-4 font-bold ">Dannielle </h1>
          <Rating
            className="my-4 flex mx-auto"
            style={{ maxWidth: 150 }}
            readOnly
            value={5}
          />
          <h3>
            We recommend Embed Social. Pre-pandemic I was constantly searching
            for New York City restaurants and I base my decisions on #stars and
            #reviews to make my decision. Its #socialproof and I continue to do
            it with just about everything we .
          </h3>
          <p className="font-bold mt-6 pb-6">3 Year</p>
        </div>
        <div className="lg:w-3/12 p-3 mx-3 border-2 border-lime-400 rounded-md text-center">
          <img
            className="h-16 flex mx-auto rounded-3xl w-16"
            src={img3}
            alt=""
          />
          <h1 className="text-xl mt-4 font-bold ">Joe Smith  </h1>
          <Rating
            className="my-4 flex mx-auto"
            style={{ maxWidth: 150 }}
            readOnly
            value={3.5}
          />
          <h3>
            We recommend Embed Social. Pre-pandemic I was constantly searching
            for New York City restaurants and I base my decisions on #stars and
            #reviews to make my decision. Its #socialproof and I continue to do
            it with just about everything we .
          </h3>
          <p className="font-bold mt-6 pb-6">6 Month</p>
        </div>
        <div className="lg:w-3/12 p-3 mx-3 border-2 border-lime-400 rounded-md text-center">
          <img
            className="h-16 flex mx-auto rounded-3xl w-16"
            src={img4}
            alt=""
          />
          <h1 className="text-xl mt-4 font-bold ">Mare</h1>
          <Rating
            className="my-4 flex mx-auto"
            style={{ maxWidth: 150 }}
            readOnly
            value={2.5}
          />
          <h3>
            We recommend Embed Social. Pre-pandemic I was constantly searching
            for New York City restaurants and I base my decisions on #stars and
            #reviews to make my decision. Its #socialproof and I continue to do
            it with just about everything we .
          </h3>
          <p className="font-bold mt-6 pb-6">7 days</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
