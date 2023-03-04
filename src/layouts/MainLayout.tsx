import Header from "components/Header";
import Sidebar from "components/Sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Header />
      <div className="flex calc-max-h-screen-15 md:h-full md:calc-min-h-screen-15 lg:flex-1">
        <Sidebar />
        <section className="flex-auto overflow-y-auto lg:overflow-visible py-6 px-5 lg:px-10">
          <div className="mx-auto max-w-screen-xl">
            <Outlet />
          </div>
        </section>
      </div>
    </>
  );
};

export default MainLayout;
