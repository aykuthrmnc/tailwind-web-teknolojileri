import { useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const toggle = () => setSidebar(!sidebar);

  return (
    <div className={`flex transition-all lg:w-64 duration-1000${sidebar ? " lg:!w-0" : ""}`}>
      <aside className={`sidebar${sidebar ? " lg:-translate-x-60" : ""}`}>
        <button
          onClick={toggle}
          className={`absolute top-5 -right-5 z-50 hidden rounded-full border-8 border-current bg-gray-700 text-white transition-transform duration-1000 dark:bg-gray-300 dark:text-gray-800 lg:block p-1${
            sidebar ? " -rotate-180" : ""
          }`}
        >
          <FaAngleLeft />
        </button>
        <nav className="space-y-1">
          <NavLink to="/" className="nav-link">
            Tailwind Nedir?
          </NavLink>
          <NavLink to="/utility-first" className="nav-link">
            Temel Karşılaştırma
          </NavLink>
          <NavLink to="/hover-focus" className="nav-link">
            Hover, Focus ve Diğer Durumlar
          </NavLink>
          <NavLink to="/responsive-design" className="nav-link">
            Responsive Tasarım
          </NavLink>
          <NavLink to="/dark-mode" className="nav-link">
            Koyu Mod
          </NavLink>
          <NavLink to="/custom-styles" className="nav-link">
            Özelleştirmeler
          </NavLink>
          <NavLink to="/functions-directives" className="nav-link">
            Fonksiyonlar ve Direktifler
          </NavLink>
          <NavLink to="/hazirlayanlar" className="nav-link">
            Hazırlayanlar
          </NavLink>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
