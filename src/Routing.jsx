import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Registration } from "./Pages/Registration";
import { NotFound } from "./Pages/NotFound";

export const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Registration />} />
                <Route path="/register" element={<Registration />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );  
}