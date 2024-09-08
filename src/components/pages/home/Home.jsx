import "swiper/css";

import { Link } from "react-router-dom";
import FirstSliderSect from "./FirstSliderSect";
import AdsImageSect2 from "./AdsImageSect2";
import LockGiraProducts from "./LockGiraProducts";

export default function Home() {
  return (
    <>
      <FirstSliderSect />
      <AdsImageSect2 />
      <LockGiraProducts />
    </>
  );
}
