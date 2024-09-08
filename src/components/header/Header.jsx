import { Link, useParams, useSearchParams } from "react-router-dom";
import logo from "../../assets/images/logo2.png";
import NavBar from "./NavBar";
import AppContext from "../context/AppContext";
import { useEffect, useState } from "react";
import ToolBoxNavBar from "./ToolBoxNavBar";
export default function Header() {
  const search = useSearchParams()[0].get("q");
  const [{ menuShow, searchValue }, setHeaderState] = useState({
    menuShow: false,
    searchValue: search ? search : "",
  });
  function showNavBar() {
    setHeaderState((stats) => ({ ...stats, menuShow: !stats.menuShow }));
  }
  return (
    <AppContext.Provider
      value={{
        searchValue: searchValue,
        menuShow: menuShow,
        setHeaderState: setHeaderState,
      }}
    >
      <header className="relative z-[20]">
        <section>
          <div className="customeCont flex justify-between">
            <div className="lg:hidden flex basis-[30%] items-center ">
              <button onClick={showNavBar} className="cursor-pointer">
                <svg
                  className="svg-icon"
                  style={{
                    width: "25px",
                    height: "25px",
                    verticalAlign: "middle",
                    fill: "currentColor",
                    overflow: "hidden",
                  }}
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M972.8 512c0 11.264-9.216 20.48-20.48 20.48H71.68c-11.264 0-20.48-9.216-20.48-20.48s9.216-20.48 20.48-20.48h880.64c11.264 0 20.48 9.216 20.48 20.48zM71.68 286.72h880.64c11.264 0 20.48-9.216 20.48-20.48s-9.216-20.48-20.48-20.48H71.68c-11.264 0-20.48 9.216-20.48 20.48s9.216 20.48 20.48 20.48z m880.64 450.56H71.68c-11.264 0-20.48 9.216-20.48 20.48s9.216 20.48 20.48 20.48h880.64c11.264 0 20.48-9.216 20.48-20.48s-9.216-20.48-20.48-20.48z" />
                </svg>
              </button>
            </div>
            <NavBar />
            <div className=" gap-2 basis-[30%] lg:flex hidden items-center">
              <Link className="hover:opacity-75" to="/تماس با-ما">
                تماس با ما
              </Link>
              <span className="opacity-25 hidden lg:inline">|</span>
              <Link className="hover:opacity-75" to="/درباره-ما">
                درباره ما
              </Link>
            </div>
            <div>
              <Link to="/">
                <img src={logo} alt="دکتر ابزار" className="max-w-[150px]" />
              </Link>
            </div>
            <div className="basis-[30%] flex items-center justify-end gap-4">
              <Link
                to="/"
                className="hover:opacity-75 opacity-95 lg:flex hidden  gap-2 items-center"
              >
                <i className="far fa-cart-plus "></i>
                <span>0</span>
                <span>/</span>
                <span>0</span>
                <span>تومان</span>
              </Link>
              <span className="opacity-25 hidden lg:inline">|</span>
              <Link
                to="/"
                className="hover:opacity-75 opacity-95 lg:flex hidden "
              >
                <i className="far fa-heart align-middle "></i>
              </Link>
              <span className="opacity-25 hidden lg:inline">|</span>
              <Link to="/user" className="hover:opacity-75 inline-block">
                <svg
                  style={{
                    width: "25px",
                    height: "25px",
                    verticalAlign: "middle",
                    fill: "currentColor",
                    overflow: " hidden",
                  }}
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M843.282963 870.115556c-8.438519-140.515556-104.296296-257.422222-233.908148-297.14963C687.881481 536.272593 742.4 456.533333 742.4 364.088889c0-127.241481-103.158519-230.4-230.4-230.4S281.6 236.847407 281.6 364.088889c0 92.444444 54.518519 172.183704 133.12 208.877037-129.611852 39.727407-225.46963 156.634074-233.908148 297.14963-0.663704 10.903704 7.964444 20.195556 18.962963 20.195556l0 0c9.955556 0 18.299259-7.774815 18.962963-17.73037C227.745185 718.506667 355.65037 596.385185 512 596.385185s284.254815 122.121481 293.357037 276.195556c0.568889 9.955556 8.912593 17.73037 18.962963 17.73037C835.318519 890.311111 843.946667 881.019259 843.282963 870.115556zM319.525926 364.088889c0-106.287407 86.186667-192.474074 192.474074-192.474074s192.474074 86.186667 192.474074 192.474074c0 106.287407-86.186667 192.474074-192.474074 192.474074S319.525926 470.376296 319.525926 364.088889z" />
                </svg>
              </Link>
              <Link
                to="/"
                className="hover:opacity-75 opacity-95 lg:flex hidden"
              >
                <i className="fa fa-sync-alt align-middle "></i>
              </Link>
            </div>
          </div>
        </section>
        <ToolBoxNavBar />
      </header>
    </AppContext.Provider>
  );
}
