import React from "react";
import { FaFacebookF, FaWhatsapp, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="w-full bg-black text-white py-4 px-6 shadow-inner mt-auto border-t-2 border-white">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
                

                <div className="text-center md:text-left mb-4 md:mb-0">
                    <p className="text-sm md:text-base font-semibold">
                        Venha conhecer a história dos nossos guerreiros em campo!
                    </p>
                </div>

       
                <div className="flex space-x-6 text-xl">
                    <a href="#" className="hover:text-red-600 transition-colors duration-300">
                        <FaFacebookF />
                    </a>
                    <a href="#" className="hover:text-red-600 transition-colors duration-300">
                        <FaWhatsapp />
                    </a>
                    <a href="#" className="hover:text-red-600 transition-colors duration-300">
                        <FaInstagram />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
