import './index.css'
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Error from "./components/Error";
import Menu from "./components/Menu";
import { Suspense, lazy } from "react";
import useOnline from "./utils/useOnline";
const About = lazy(() => import("./components/About"));
import { createBrowserRouter, Outlet } from "react-router";
const App = () => {
  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>You are offline, please check your internet connection</h1>;
  }
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        Component: Body,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/cart",
        Component: Cart,
      },
      {
        path: "/restaurant/:id",
        Component: Menu,
      },
    ],
  },
]);

export default App;
