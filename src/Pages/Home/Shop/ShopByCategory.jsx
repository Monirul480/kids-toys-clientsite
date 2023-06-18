import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { NavLink } from "react-router-dom";
import { FaRegStar, FaStar, FaRegStarHalf } from "react-icons/fa";

import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import SingleCard from "./SingleCard";

import AOS from "aos";
import "aos/dist/aos.css";

const ShopByCategory = () => {
  const rating = 3.5;

  const [cars, setCar] = useState([]);
  const [track, setTrack] = useState([]);
  const [train, setTrain] = useState([]);

  
   const car = 'car';
   const trackId = 'track'
   const trainId = 'train'


   
  
    useEffect(() => {
    fetch(`https://kids-toys-server.vercel.app/category/${car}`)
      .then((res) => res.json())
      .then((data) => setCar(data));
    },[]);

    const tracknHandle = () =>{
      fetch(`https://kids-toys-server.vercel.app/category/${trackId}`)
      .then((res) => res.json())
      .then((data) => {
        
      setTrack(data);
      })
    }

    const trainHandle = () =>{
      fetch(`https://kids-toys-server.vercel.app/category/${trainId}`)
      .then((res) => res.json())
      .then((data) => {
        
      setTrain(data);
      })
    }


    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

  return (
    <div data-aos="fade-up" className="bg-slate-200">
      <p  className="text-center text-3xl py-6 font-semibold text-primary">
        Shop by Category
      </p>
      <Tabs>
        <TabList>
          <div className="lg:w-2/4 pt-4 mx-auto mb-0 pb-0 text-blue-400 text-center justify-around space-x-6 ">
            <Tab>Cars</Tab>
            <Tab onClick={tracknHandle}>Track</Tab>
            <Tab  onClick={trainHandle}>Train</Tab>
          </div>
        </TabList>
        <TabPanel>
          <h1 className="text-center text-3xl text-Violet-400">
            Cars Category
          </h1>
          <div className="grid pt-4 mt-3 mb-4 lg:grid-cols-3 gap-4 mx-4">
            {cars.map((car) => (
              <SingleCard key={car._id} data={car}></SingleCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h1 className="text-center text-2xl text-Violet-400">Bus Category</h1>
          <div className="grid pt-4 mt-3 mb-4 lg:grid-cols-3 gap-4 mx-4">
            {track.map((car) => (
              <SingleCard key={car._id} data={car}></SingleCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
            <h1 className="text-center text-2xl text-Violet-400">
              Train Category
            </h1>
            <div className="grid mt-3 mb-4 lg:grid-cols-3 gap-4 mx-4">
            {train.map((car) => (
              <SingleCard key={car._id} data={car}></SingleCard>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
