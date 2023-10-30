import { Route, Routes } from "react-router-dom";
import { Dairies } from "../components/pages/DairiesPage";
import { Images } from "../components/pages/ImagesPage";
import { Geolocations } from "../components/pages/GeolocationsPage";
import { SingleDairy } from "../components/pages/SingleDairyPage";
import { SingleImage } from "../components/pages/SingleImagePage";


const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/dairies" element={<Dairies />} />
      <Route path="/dairies/:id" element={<SingleDairy />} />

      <Route path="/images" element={<Images />} />

      <Route path="/images/:id" element={<SingleImage />} />

      <Route path="/geolocations" element={<Geolocations />} />
    </Routes>
  );
};

export default AllRoutes;
