import React from "react";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import ele from '../assets/imagens/ele.jpg';
import Carousel from "../components/carousel";

const ServicePage = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen bg-black text-white">
              
                <Navbar />

               
                <Hero 
                    Background={ele} 
                    titulo="Portal de Jogadores" 
                    paragrafo="Venha conhecer os mais diversos jogadores que já passaram pelo Corinthians" 
                   md:text-4xl font-  rota="#" 
                    botao="Conhecer Agora" 
                />

               
                <section className="bg-black px-4 md:px-12 pt-12 pb-6 text-center">
                    <h2 className="text-3xlextrabold text-white border-b-4 border-red-600 inline-block pb-2">
                        Galeria dos Brabos (e dos bagres)
                    </h2>
                    <p className="mt-4 text-gray-300 text-lg max-w-3xl mx-auto">
                        Aqui estão os nomes que fizeram (ou quase destruíram) a história do Timão. Entre no túnel da memória!
                    </p>
                </section>

              
                <div className="py-6 px-2 md:px-12 bg-black">
                    <Carousel />
                </div>

              
                <Footer />
            </div>
        </>
    );
};

export default ServicePage;
