import { createBrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./screens/Home";
import About from "./screens/About";
import Root from "./Root";
import NotFound from "./screens/NotFound";

const router = createBrowserRouter([
  {
    // 전체 route의 container
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
