import useTheme from "hooks/useTheme";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";
import "assets/css/hamburger.css";
import { useState } from "react";

const Header = () => {
  const { theme, changeTheme } = useTheme();
  const [isActive, setIsActive] = useState(false);

  const toggleSidebar = () => {
    document.querySelector(".sidebar")?.classList.toggle("active");
    setIsActive(!isActive);
  };

  return (
    <div className="flex h-15 w-full flex-shrink-0 items-center justify-between border-b border-gray-100 px-2 dark:border-gray-700 lg:px-3">
      <button onClick={toggleSidebar} className="block dark:text-white lg:hidden" type="button">
        <div className={`hamburger hamburger--spring ${isActive ? " is-active" : ""}`}>
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </div>
      </button>
      <Link to="/" className="hidden text-2xl dark:text-white lg:block">
        Tailwind
      </Link>
      <div className="flex gap-2">
        <button
          onClick={changeTheme}
          className="flex h-10 w-full items-center gap-1 rounded bg-gray-700 px-4 text-white transition-colors hover:bg-gray-600 dark:bg-white dark:text-gray-700"
        >
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </div>
  );
};

export default Header;
