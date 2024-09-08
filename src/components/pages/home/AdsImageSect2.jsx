import { Link } from "react-router-dom";
import doctorabzar1 from "./images/doctorabzar.com-4x-banner-01.webp";
import doctorabzar2 from "./images/doctorabzar.com-4x-banner-06.webp";
export default function FirstSliderSect({ slidersData }) {
  return (
    <section>
      <div className="customeCont flex  md:flex-row flex-col justify-between gap-5">
        <div className="md:w-1/2 w-full rounded-md overflow-hidden">
          <Link>
            <img src={doctorabzar1} alt="xxx" className="w-full" />
          </Link>
        </div>
        <div className="md:w-1/2 w-full rounded-md overflow-hidden">
          <Link>
            <img src={doctorabzar2} alt="xxx" className="w-full" />
          </Link>
        </div>
      </div>
    </section>
  );
}
