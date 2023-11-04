import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Contact from "../Page/Contact";
import Home from "../Page/Home";
import Aboutus from "../Page/About us";
import Login from "../Page/login";
import SingUp from "../Page/SingUp";

function AppRouter() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/SingUp" element={<SingUp />} />
                <Route path="/Aboutus" element={<Aboutus />} />
                <Route path="/Contact" element={<Contact/>} />
            </Routes>
            <Footer />
        </Router>
    )
};

export default AppRouter;