import useTheme from "hooks/useTheme";
import { FaMoon, FaSun } from "react-icons/fa";
import { VscMenu } from "react-icons/vsc";
import { Link } from "react-router-dom";

const Header = () => {
  const { theme, changeTheme } = useTheme();

  const toggleSidebar = () => {
    document.querySelector(".sidebar")?.classList.toggle("active");
  };

  return (
    <div className="flex h-15 w-full flex-shrink-0 items-center justify-between border-b border-gray-100 px-2 dark:border-gray-700 lg:px-3">
      <button onClick={toggleSidebar} className="block dark:text-white lg:hidden">
        <VscMenu />
      </button>
      <Link to="/" className="dark:text-white hidden lg:block text-2xl">Tailwind</Link>
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
