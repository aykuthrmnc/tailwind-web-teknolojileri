import { lazy } from "react";

const MainLayout = lazy(() => import("layouts/MainLayout"));
const Home = lazy(() => import("pages/Home"));
const CustomStyles = lazy(() => import("pages/CustomStyles"));
const UtilityFirst = lazy(() => import("pages/UtilityFirst"));
const Hazirlayanlar = lazy(() => import("pages/Hazirlayanlar"));
const DarkMode = lazy(() => import("pages/DarkMode"));
const FunctionsDirectives = lazy(() => import("pages/FunctionsDirectives"));
const HoverFocus = lazy(() => import("pages/HoverFocus"));
const ResponsiveDesign = lazy(() => import("pages/ResponsiveDesign"));

const routes = [
  {
    name: "home",
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "utility-first",
        element: <UtilityFirst />,
      },
      {
        path: "hover-focus",
        element: <HoverFocus />,
      },
      {
        path: "responsive-design",
        element: <ResponsiveDesign />,
      },
      {
        path: "dark-mode",
        element: <DarkMode />,
      },
      {
        path: "custom-styles",
        element: <CustomStyles />,
      },
      {
        path: "functions-directives",
        element: <FunctionsDirectives />,
      },
      {
        path: "hazirlayanlar",
        element: <Hazirlayanlar />,
      },
    ],
  },
];

export default routes;
