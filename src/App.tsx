import React from "react";
import FrontPage from "./components/Main";
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Mens from "./components/pages/Mens";
import Admin from "./components/pages/Admin";
import Login from "./components/pages/Login";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import CheckoutModal from "./components/Modal";

function App(): JSX.Element {
    return (
        <ShoppingCartProvider>
            <div>
                <React.StrictMode>
                    <Router>
                        <Routes>
                            <Route path="/" element={<FrontPage />} />
                            <Route path="/men" element={<Mens />} />
                            <Route path="/admin" element={<Admin />} />
                            <Route path="/login" element={<Login />} />
                            <Route
                                path="/checkout"
                                element={<CheckoutModal />}
                            />
                        </Routes>
                    </Router>
                </React.StrictMode>
            </div>
        </ShoppingCartProvider>
    );
}

export default App;
