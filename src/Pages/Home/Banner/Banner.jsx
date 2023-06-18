import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "./Bannde.css";


import { Pagination } from "swiper";
const Banner = () => {
  return (
    <div className="lg:h-[calc(100vh-20vh)] h-72">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: `url("https://i.ibb.co/0G6VJMQ/1.jpg")`,
            }}
          >
            <div className="hero-overlay bg-slate-600 bg-opacity-50"></div>
            <div className="hero-content text-white text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Collectible Toys</h1>
                <p className="mb-5">Sale up to 60% off Today</p>
                <button className="btn text-white btn-primary">Shop now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: `url("https://i.ibb.co/MNxNDFS/2.jpg")`,
            }}
          >
            <div className="hero-overlay bg-slate-600 bg-opacity-50"></div>
            <div className="hero-content text-white text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Building Toys</h1>
                <p className="mb-5">Sale up to 60% off Today</p>
                <button className="btn text-white btn-primary">Shop now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: `url("https://i.ibb.co/HHZfJnF/3.jpg")`,
            }}
          >
            <div className="hero-overlay bg-slate-600 bg-opacity-50"></div>
            <div className="hero-content text-white text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Arts Toys</h1>
                <p className="mb-5">Sale up to 60% off Today</p>
                <button className="btn text-white btn-primary">Shop now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: `url("https://i.ibb.co/xzkLTN0/4.jpg")`,
            }}
          >
            <div className="hero-overlay bg-slate-600 bg-opacity-50"></div>
            <div className="hero-content text-white text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Collectible Toys</h1>
                <p className="mb-5">Sale up to 60% off Today</p>
                <button className="btn text-white btn-primary">Shop now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: `url("https://i.ibb.co/pvYy61Y/5.jpg")`,
            }}
          >
            <div className="hero-overlay bg-slate-600 bg-opacity-50"></div>
            <div className="hero-content text-white text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Building Toys</h1>
                <p className="mb-5">Sale up to 60% off Today</p>
                <button className="btn text-white btn-primary">Shop now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: `url("https://i.ibb.co/ZBDVqhk/6.jpg")`,
            }}
          >
            <div className="hero-overlay bg-slate-600 bg-opacity-50"></div>
            <div className="hero-content text-white text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Arts Toys</h1>
                <p className="mb-5">Sale up to 60% off Today</p>
                <button className="btn text-white btn-primary">Shop now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: `url("https://i.ibb.co/W2CDfdv/7.jpg")`,
            }}
          >
            <div className="hero-overlay bg-slate-600 bg-opacity-50"></div>
            <div className="hero-content text-white text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Arts Toys</h1>
                <p className="mb-5">Sale up to 60% off Today</p>
                <button className="btn text-white btn-primary">Shop now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default Banner;
