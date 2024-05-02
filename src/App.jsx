import { RouterProvider } from "react-router";
//import "./App.css";
import { routes } from "./routes/routes";

//estableceremos el titulo del documento
document.title = "PRODIGY_WD_05";
function App() {
  

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
