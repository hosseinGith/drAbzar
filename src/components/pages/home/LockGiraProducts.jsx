import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import img4_1 from "./images/4-1.jpg";
export default function LockGiraProducts({}) {
  const sliderData = {
    slider1: [
      Array(6).fill({
        image: img4_1,
        dsc: "doctorabzar.com-banner-05",
      })[0],
    ],
  };
  const products = Array(6).fill({
    image: img4_1,
    dsc: "قفل موتوری گیرا 030",
    oldPrice: 950000,
    price: 880000,
  });
  return (
    <section>
      <div className="customeCont flex md:flex-row flex-col text-center">
        <div className="md:w-1/3">
          <h1>پرفروش‌های قفل گیرا</h1>
          <Swiper slidesPerView={1} loop="true" className="w-full ">
            {sliderData.slider1.map((slider, index) => (
              <SwiperSlide key={index} className="swiper-slide h-full">
                <Link className="inline-block w-full">
                  <img src={slider.image} className="w-full" alt={slider.dsc} />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="w-full">
          <h1>قفل گیرا</h1>
          <ul className="w-full justify-items-center grid md:grid-cols-3 grid-cols-2 gap-2">
            {products.map((item, index) => (
              <li key={index}>
                <img src={item.image} alt={item.dsc} />
                <p>{item.dsc}</p>
                <p className="flex flex-wrap gap-2 items-center text-sm">
                  {item.price && (
                    <del>{Number(item.oldPrice).toLocaleString()} تومان </del>
                  )}
                  <span className="text-primaryColor">
                    {Number(item.price).toLocaleString()} تومان
                  </span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
