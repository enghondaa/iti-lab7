import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import Rootlayout from "./Components/Rootlayout/Rootlayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Components/Errorpage";
import Movies from "./Components/Movies";
function App() {
  const router = createBrowserRouter([
    {
      path: "/", element: <Rootlayout />,children: [
        { index: true, element: <Home /> },
        { path: "portfolio", element: <Portfolio /> },
        { path: "contact", element: <Contact /> },
        { path: "about", element: <About /> },
        { path: "movies", element: <Movies /> },
        { path: "*", element: <ErrorPage /> },],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
