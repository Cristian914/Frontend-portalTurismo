import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import AboutHero from "../components/aboutHero";

const Home = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Navbar/>
                <div>
                    <div>
                        <AboutHero botao="Animaçao"/>
                        <main className="flex-grow flex justify-center m-8 mt-16 h-[830px]">
       <div className="w-full bg-gradient-to-r from-gray-500 to-gray-800 text-white py-0 px-2 shadow-lg">
    <h1 className="text-center pt-8 text-3xl font-bold">Minha Experiência</h1>
    <p className="text-white font-semibold">
    Eu Achei dahora seloko peguei o jeito de usar os /route lá do App.jsx e também a importação de imagem, um pouco sobre a Estilizaçao.
    </p>
  </div>
</main>
                    </div>
                </div>
                    <Footer />
            </div>


        </>
    )
}

export default Home;