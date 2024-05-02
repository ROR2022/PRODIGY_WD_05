import { createHashRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contac";
import Error from "../pages/Error";
import BasicTemplate from "../pages/BasicTemplate";
import StopwatchPage from "../pages/StopwatchPage";
import TicTacToe from "../components/TicTacToe"
import RorPortfolio from "../components/RorPortfolio";

export const routes = createHashRouter([
  {
    path: "/",
    element: (
      <BasicTemplate>
        <Home />
      </BasicTemplate>
    ),
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: (
      <BasicTemplate>
        <About />
      </BasicTemplate>
    ),
  },
  {
    path: "/contact",
    element: (
      <BasicTemplate>
        <Contact />
      </BasicTemplate>
    ),
  },
  {
    path: "/stopwatch",
    element: (
      <BasicTemplate>
        <StopwatchPage />
      </BasicTemplate>
    ),
  },
  {
    path: "/tictactoe",
    element: (
      <BasicTemplate>
        <TicTacToe />
      </BasicTemplate>
    ),
  },
  {
    path: "/portfolio",
    element: (
      <BasicTemplate>
        <RorPortfolio />
      </BasicTemplate>
    ),
  },
  {
    path: "*",
    element: (
      <BasicTemplate>
        <Error />
      </BasicTemplate>
    ),
  },
]);
