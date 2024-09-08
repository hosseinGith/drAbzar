import { useContext } from "react";
import AppContext from "../context/AppContext";
import { useNavigate } from "react-router";

export default function SearchDesgin({
  formClass,
  inputClass,
  iconStyle,
  iconClass,
  inputPlaceholder,
}) {
  const { searchValue, setHeaderState } = useContext(AppContext);
  const navigate = useNavigate();
  console.log();
  function changeInputHand(e) {
    setHeaderState((state) => ({ ...state, searchValue: e.target.value }));
  }
  function submitForm(e) {
    e.preventDefault();
    if (searchValue.trim()) navigate("?q=" + searchValue.trim());
  }
  return (
    <form onSubmit={submitForm} className={formClass}>
      <input
        type="search"
        placeholder={inputPlaceholder}
        name="q"
        className={inputClass}
        value={searchValue}
        onChange={changeInputHand}
        dir="rtl"
      />
      <button className={iconClass} style={iconStyle}>
        <i className="fa fa-search"></i>
      </button>
    </form>
  );
}
