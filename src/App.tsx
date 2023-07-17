import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Test from "./pages/products";
import Layout from "./pages/layout";
import ProductDetail from "./pages/productDetail";
import Auth from "./pages/auth";
import CalendarPage from "./pages/calendar";
import ModalSheetPage from "./pages/modalSheet";
import Pdf from "./pages/pdf";
import LeafletMap from "./pages/map";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route path="products" element={<Test />} />
        <Route path="product-detail/:productId" element={<ProductDetail />} />
        <Route path="auth" element={<Auth />} />
        <Route path="calendar" element={<CalendarPage />} />
        <Route path="modal-sheet" element={<ModalSheetPage />} />
        <Route path="react-pdf" element={<Pdf />} />
        <Route path="leaflet-map" element={<LeafletMap />} />
      </Route>
    </Routes>
  );
}
//react-pdf
export default App;
