import React, { useState, useEffect } from "react";
import { FaPlus, FaSearch, FaShoppingCart, FaTimes, FaMinus, FaBars } from "react-icons/fa"; 

import { Button } from "@heroui/button";
import AppDrawer from "../Drawer";
import { Link } from "react-router-dom"; 
import { useNavigate } from "react-router-dom";

const placeholders = [
    "sugar",
    "milk",
    "chips",
    "crud",
    "milik",
    "rice",
    "vegetable",
    "fruits",
    "bread",
    "butter",
    "oil",
    "snacks",
    "cold drinks",
    "biscuits",
    "pulses"
];

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [placeholderIndex, setPlaceholderIndex] = useState(0);
    // const [isLoginOpen, setIsLoginOpen] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    const navigate = useNavigate();

    const setIsLoginOpen = () => {
        navigate('/login')
    }

    return (
        <>
            <header className="px-6 py-4 bg-white shadow-md">
                <div className="container mx-auto flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <Link  to = "/" className="text-yellow-500 text-3xl">Insta</Link>
                        <Link  to = "/" className="text-green-500 text-3xl">grocery</Link>
                    </div>

                    <button className="lg:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>

                    {/* navBar */}
                    <nav className={`lg:flex lg:items-center lg:gap-6 ${isMenuOpen ? "block" : "hidden"} absolute lg:static top-16 left-0 w-full bg-white lg:w-auto p-4 lg:p-0 shadow-md lg:shadow-none`}>
                        <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                            <div className="text-center">
                                <h5 className="text-black font-bold text-lg">Delivery in 13 minutes</h5>
                                <p className="text-gray-500 text-sm">405, Varachha Main Rd</p>
                            </div>

                            <div className="relative w-full lg:w-96 flex items-center bg-gray-100 px-4 py-3 border border-gray-300 rounded-full focus-within:ring-2 focus-within:ring-green-500 transition-all duration-300">
                                <FaSearch className="text-gray-500" />
                                <input
                                    type="search"
                                    placeholder={placeholders[placeholderIndex]}
                                    className="w-full bg-transparent outline-none px-3 text-lg transition-all duration-500 ease-in-out placeholder-opacity-100 placeholder-animated"
                                />
                            </div>
                        </div>
                    </nav>

                    {/* Login & Cart */}
                    <div className="hidden lg:flex items-center gap-6">
                        <Button variant="light" className="text-black font-medium text-md" onClick={() => setIsLoginOpen(true)}>
                            Login
                        </Button>
                        <AppDrawer/>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
