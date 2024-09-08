import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import SearchDesgin from "./SearchDesign";
import AppContext from "../context/AppContext";

export default function NavBar() {
  const { menuShow, setHeaderState } = useContext(AppContext);
  const [{ search, category }, setNavBarState] = useState({
    search: "",
    category: false,
  });
  const navLinks = {
    category: [
      "ابزار اندازه گیری",
      "ابزار بادی و نجاری",
      "ابزار برقی و شارژی",
      "ابزار جوش و برش",
      "ابزار باغبانی",
      "تجهیزات گاراژی",
      "ابزار دستی و یراق",
      "تجهیزات ایمنی",
    ],
    menu: [
      { text: "خانه", icon: "" },
      { text: "فروشگاه", icon: "" },
      { text: "مجله خبری", icon: "" },
      { text: "تماس با ما", icon: "" },
      { text: "درباره ما", icon: "" },
      { text: "رویه بازگشت کالا", icon: "" },
      { text: "روش‌های پرداخت", icon: "" },
      { text: "سیاست حفظ حریم خصوصی", icon: "" },
      { text: "فروش به شرکت ها و سازمان ها", icon: "" },
      { text: "علاقه مندی", icon: "far fa-heart" },
      { text: "مقايسه", icon: "fa fa-sync" },
    ],
  };
  function changeShowNavBarMode(status) {
    setNavBarState((state) => {
      return { ...state, category: status };
    });
  }
  function hideNavBar(e) {
    if (e.target.id === "navBarMenu") {
      setHeaderState((stats) => ({ ...stats, menuShow: false }));
    }
  }
  return (
    <nav
      onClick={hideNavBar}
      className={`${
        menuShow ? "showNavBar" : "hideNavBar "
      }  lg:hidden duration-700 z-10 transition-all fixed right-0 top-0 w-full h-full grid bg-navBarLowOpacityColor`}
      id="navBarMenu"
    >
      <ul
        className={`${
          menuShow ? "navBarUlShow" : "navBarUlHide"
        } duration-700 transition-all translate-x-0 bg-whiteColor  max-w-[300px] overflow-y-auto py-4`}
      >
        <li>
          <SearchDesgin
            formClass="py-3 flex bg-whiteColor px-4 w-full "
            inputClass="w-full outline-none bg-[transparent] basis-[95%]"
            iconStyle={{ fontSize: "20px", opacity: 0.4 }}
            iconClass=""
          />
        </li>
        <li>
          <div className="flex">
            <button
              onClick={() => changeShowNavBarMode(true)}
              className={`transition-all group relative p-4 w-full ${
                category ? "bg-navBarActiveColor" : "bg-navBarDeActiveColor"
              }`}
            >
              <span
                className={`transition-opacity group-hover:opacity-100 ${
                  category ? "opacity-100" : "opacity-45"
                }`}
              >
                دسته بندی ها
              </span>
              <span
                className={`absolute group-hover:w-full transition-all left-0 bottom-0 h-[2px] bg-primaryColor ${
                  category ? "w-full" : "w-0"
                }`}
              ></span>
            </button>
            <button
              onClick={() => changeShowNavBarMode(false)}
              className={`transition-all group relative p-4 w-full ${
                category ? "bg-navBarDeActiveColor " : "bg-navBarActiveColor"
              }`}
            >
              <span
                className={`transition-opacity group-hover:opacity-100 ${
                  !category ? "opacity-100" : "opacity-45"
                }`}
              >
                منو
              </span>
              <span
                className={`absolute group-hover:w-full transition-all right-0 bottom-0 h-[2px] bg-primaryColor ${
                  !category ? "w-full" : "w-0"
                }`}
              ></span>
            </button>
          </div>
        </li>
        <li>
          <ul className="text-sm">
            <li
              className={`${
                category ? "block" : "hidden"
              } animate-opacityShow divide-y divide-lowBorderColor border-b border-lowBorderColor`}
            >
              {navLinks.category.map((text, index) => (
                <NavLink
                  key={index}
                  className="w-full justify-between flex items-center"
                >
                  <span className="px-2 inline-block basis-[80%] w-full">
                    {text}
                  </span>
                  <span className="inline-block p-3 border-r border-lowBorderColor">
                    <i className="fa fa-angle-left opacity-50 text-lg"></i>
                  </span>
                </NavLink>
              ))}
            </li>
            <li
              className={`animate-opacityShow ${
                !category ? "block" : "hidden"
              }`}
            >
              {navLinks.menu.map((item, index) => (
                <NavLink
                  key={index}
                  to={
                    item.text === "خانه"
                      ? "/"
                      : "/" + item.text.replaceAll(" ", "-")
                  }
                  className="navBarLinks w-full gap-2 flex items-center px-2"
                >
                  {item.icon ? <i className={item.icon}></i> : null}
                  <span className=" inline-block py-3 basis-[80%] w-full">
                    {item.text}
                  </span>
                </NavLink>
              ))}
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
