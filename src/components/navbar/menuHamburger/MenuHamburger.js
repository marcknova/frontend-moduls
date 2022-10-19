import { useContext } from "react";
import { AuthContext } from "../../../context/usercontext/UserContext";
import "./menuHamburger.css";

const MenuHamburger = () => {
  const { hamburger, setHamburger } = useContext(AuthContext);
  return (
    <>
      <div className="md:hidden block">
        <button
          type="button"
          title="hamburger"
          id="button-menu"
          className={hamburger ? "button-menu" : "button-menu close"}
          onClick={() => setHamburger(!hamburger)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </>
  );
};

export default MenuHamburger;
