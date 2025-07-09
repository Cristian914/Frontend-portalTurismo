import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const user = localStorage.getItem('user');
        setIsAuthenticated(!!user);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem('user');
        setIsAuthenticated(false);
        window.location.href = '/';
    };

    const menuLinks = (
        <>
            <a href="/" className="text-white hover:text-red-600 transition-colors duration-300 text-lg font-bold">Hino</a>
            <a href="/about" className="text-white hover:text-red-600 transition-colors duration-300 text-lg font-bold">Sobre</a>
            <a href="/service" className="text-white hover:text-red-600 transition-colors duration-300 text-lg font-bold">Jogadores</a>
            <a href="/contact" className="text-white hover:text-red-600 transition-colors duration-300 text-lg font-bold">Contato</a>
            {isAuthenticated ? (
                <>
                    <a href="/profile" className="text-white hover:text-red-600 transition-colors duration-300 text-lg font-bold">Perfil</a>
                    <button onClick={handleLogout} className="text-white hover:text-red-600 transition-colors duration-300 text-lg font-bold">Sair</button>
                </>
            ) : (
                <a href="/login" className="text-white hover:text-red-600 transition-colors duration-300 text-lg font-bold">Login</a>
            )}
        </>
    );

    return (
        <nav className="w-full bg-black text-white py-3 px-4 shadow-lg fixed top-0 left-0 z-30 border-b-2 border-white">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <a href="/" className="text-3xl font-extrabold text-white hover:text-red-600 transition-colors duration-300">
                        Corinthians 🔥
                    </a>
                </div>

           
                <div className="hidden lg:flex space-x-8">
                    {menuLinks}
                </div>

           
                <div className="lg:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

          
            <div className={`lg:hidden bg-black border-t border-white p-4 transition-all duration-300 ${isMenuOpen ? 'block' : 'hidden'}`}>
                {menuLinks}
            </div>
        </nav>
    );
};

export default Navbar;
