import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import doctorabzar from "./images/doctorabzar.com-banner-05.webp";
import img4_1 from "./images/4-1.jpg";
export default function FirstSliderSect() {
  const slidersData = {
    slider1: [
      {
        image: doctorabzar,
        dsc: "doctorabzar.com-banner-05",
      },
      {
        image: doctorabzar,
        dsc: "doctorabzar.com-banner-05",
      },
      {
        image: doctorabzar,
        dsc: "doctorabzar.com-banner-05",
      },
      {
        image: doctorabzar,
        dsc: "doctorabzar.com-banner-05",
      },
    ],
    slider2: [
      {
        image: img4_1,
        dsc: "doctorabzar.com-banner-05",
      },
      {
        image: img4_1,
        dsc: "doctorabzar.com-banner-05",
      },
      {
        image: img4_1,
        dsc: "doctorabzar.com-banner-05",
      },
      {
        image: img4_1,
        dsc: "doctorabzar.com-banner-05",
      },
      {
        image: img4_1,
        dsc: "doctorabzar.com-banner-05",
      },
    ],
  };

  return (
    <section>
      <div className="customeCont flex  md:flex-row flex-col justify-center py-5">
        <div className="md:w-[65%] w-full">
          <div className="swiper h-full">
            <Swiper slidesPerView={1} loop="true" className=" h-full">
              {slidersData.slider1.map((slider, index) => (
                <SwiperSlide key={index} className="swiper-slide h-full">
                  <Link className="inline-block h-full">
                    <img
                      src={slider.image}
                      className="object-cover h-full"
                      alt={slider.dsc}
                    />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="md:w-[35%] w-full bg-mainPageSliderBg p-4 min-h-[400px] flex flex-col">
          <h1 className="text-center lg:text-2xl md:text-[20px] text-2xl text-primaryColor font-bold py-4 basis-[10%]">
            محصولات شگفت‌انگیز
          </h1>
          <div className="swiper w-full basis-[90%]">
            <Swiper slidesPerView={1} loop="true">
              {slidersData.slider2.map((slider, index) => (
                <SwiperSlide
                  key={index}
                  className="swiper-slide text-center justify-between flex flex-col h-full "
                >
                  <Link className="flex items-center flex-col">
                    <img
                      src={slider.image}
                      className="h-full object-contain"
                      alt={slider.dsc}
                    />
                    <p className="hover:opacity-65 transition-opacity">
                      {slider.dsc}
                    </p>
                  </Link>
                  <span className="text-primaryColor font-bold">
                    تماس بگیرید
                  </span>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
