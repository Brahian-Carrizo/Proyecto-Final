import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Contact from "../Page/Contact";
import Inicio from "../Page/Inicio";
import Aboutus from "../Page/About us";
import Register from "../Page/login";

function AppRouter() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="" element={<Inicio />} />
                <Route path="/login" element={<Register />} />
                <Route path="/Aboutus" element={<Aboutus />} />
                <Route path="/Contact" element={<Contact/>} />
            </Routes>
            <Footer />
        </Router>
    )
};

export default AppRouter;