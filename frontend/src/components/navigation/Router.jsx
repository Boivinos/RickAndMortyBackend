import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ContactPage from "../pages/ContactPage";
import RickAndMortyDetails from "../pages/RickAndMortyDetails";
import Admin from "../pages/Admin";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/character/:id" element={<RickAndMortyDetails />} />
        </Routes>
    )
}

export default Router;