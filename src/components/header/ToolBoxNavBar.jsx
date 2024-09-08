import { Link, NavLink } from "react-router-dom";
import SearchDesign from "./SearchDesign";
import { useEffect, useRef, useState } from "react";
export default function ToolBoxNavBar(params) {
  const [{ isFixed }, setToolBoxState] = useState({
    isFixed: false,
    search: "",
  });
  let nav = useRef();
  window.addEventListener("load", () => {
    nav = nav.current;
    if (window.scrollY > nav.offsetTop) {
      setToolBoxState((state) => ({ ...state, isFixed: true }));
    }
    let oldYScroll = 0;
    window.addEventListener("scroll", () => {
      if (window.scrollY > nav.offsetTop) {
        setToolBoxState((state) => ({ ...state, isFixed: true }));
        if (oldYScroll < window.scrollY) {
          nav.style = "transform:translateY(-100%);";
        } else {
          nav.style = "transform:translateY(0%);";
        }
        oldYScroll = window.scrollY;
      } else {
        setToolBoxState((state) => ({ ...state, isFixed: false }));
      }
    });
  });
  const links = [
    {
      textLink: "ابزار اندازه گیری",
      dropDown: ["ابزار کار با چوب و فلز", "ابزار بادی"],
    },
    {
      textLink: "ابزار بادی و نجاری",
      dropDown: ["ابزار کار با چوب و فلز", "ابزار بادی"],
    },
    {
      textLink: "ابزار برقی و شارژی",
      dropDown: ["ابزار کار با چوب و فلز", "ابزار بادی"],
    },
    {
      textLink: "ابزار جوش و برش",
      dropDown: ["ابزار کار با چوب و فلز", "ابزار بادی"],
    },
    {
      textLink: "ابزار باغبانی",
      dropDown: ["ابزار کار با چوب و فلز", "ابزار بادی"],
    },
    {
      textLink: "تجهیزات گاراژی",
      dropDown: ["ابزار کار با چوب و فلز", "ابزار بادی"],
    },
    {
      textLink: "ابزار دستی و یراق",
      dropDown: ["ابزار کار با چوب و فلز", "ابزار بادی"],
    },
    {
      textLink: "تجهیزات ایمنی",
      dropDown: ["ابزار کار با چوب و فلز", "ابزار بادی"],
    },
  ];
  return (
    <section
      ref={nav}
      className={`z-9 bg-toolLinksBgColor w-full top-0 transition-all translate-y-[0%]${
        isFixed ? " fixed " : ""
      }`}
    >
      <div className="customeCont flex justify-center ">
        <nav className="lg:block hidden w-full">
          <ul className="flex gap-2">
            <li className="xl:flex grid grid-cols-4  text-[10px] items-center basis-[70%]">
              {links.map((link, index) => (
                <div
                  key={index}
                  className="group inline-block hover:text-primaryColor hover:font-bold p-4 relative text-nowrap cursor-pointer"
                >
                  <span className="inline-block ml-2">{link.textLink}</span>
                  <i className="fa fa-angle-down group-hover:rotate-180 transition-all inline-block align-middle"></i>
                  <div className="pointer-events-none cursor-default group-hover:pointer-events-auto group-hover:z-[3] group-hover:opacity-100 group-hover:translate-y-0 duration-500 translate-y-[100%] shadow transition-all opacity-0 z-[-1] absolute top-10 bg-whiteColor w-max flex flex-col px-4 py-2 gap-5">
                    {link.dropDown.map((text, ind) => (
                      <Link
                        key={ind}
                        className="text-blackColor hover:text-primaryColor hover:font-bold"
                        to={"/" + text.replaceAll(" ", "-")}
                      >
                        {text}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </li>
            <li className="basis-[4%] flex items-center">
              <span className="opacity-50 h-[30px] w-[2px] bg-navBarLowOpacityColor"></span>
            </li>
            <li className="basis-[26%] w-full min-w-[250px] flex items-center">
              <SearchDesign
                formClass="py-3 flex bg-whiteColor px-4 w-full "
                inputClass="w-full outline-none bg-[transparent] basis-[95%]"
                iconStyle={{ fontSize: "20px", opacity: 0.4 }}
                iconClass=""
              />
            </li>
          </ul>
        </nav>
        <SearchDesign
          formClass="flex bg-whiteColor lg:hidden justify-between px-1 rounded-full w-full items-center py-2 overflow-hidden"
          inputClass="w-full outline-none bg-[transparent] basis-[95%]"
          iconStyle={{ fontSize: "16px", width: "35px", height: "35px" }}
          iconClass="flex items-center justify-center rounded-full bg-searchColorIconColor text-whiteColor rouded "
        />
      </div>
    </section>
  );
}
