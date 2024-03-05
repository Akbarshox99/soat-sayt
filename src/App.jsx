import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayouts from "./layouts/MainLayouts";
import Kontact from './pages/kontact'
import Sotish from "./pages/Sotish";
import Katalog from "./pages/Katalog";
import Xizmatlar from "./pages/Xizmatlar";
import Onlain from "./pages/Onlain";
import Kompaniya from "./pages/Kompaniya";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayouts />}>
        <Route index element={<Sotish />} />
        <Route path="/sotib" element={<Sotish />} />
        <Route path="/katalog" element={<Katalog />} />
        <Route path="/xizmatlar" element={<Xizmatlar />} />
        <Route path="/onlain" element={<Onlain />} />
        <Route path="/kompaniya" element={<Kompaniya />} />
        <Route path="/kontact" element={<Kontact />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
