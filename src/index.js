import "./index.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => (
  <RouterProvider router={createBrowserRouter(routes)}>
    {routes}
  </RouterProvider>
);

root.render(<RouterProvider router={createBrowserRouter(routes)} />);