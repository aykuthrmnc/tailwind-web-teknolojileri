import Loader from "components/Loader";
import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import routes from "routes";

const App = () => {
  const showRoutes = useRoutes(routes);

  return <Suspense fallback={<Loader />}>{showRoutes}</Suspense>;
};

export default App;
