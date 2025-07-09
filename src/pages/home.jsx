import React from "react";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import aren from '../assets/imagens/aren.png';

const Home = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen bg-black text-white">
                <Navbar />

                <Hero 
                    Background={aren} 
                    titulo="Maior de SP" 
                    paragrafo="Corinthians, tu és meu orgulho!" 
                    rota="#" 
                    botao="Corinthians é Mais" 
                />

              
                <section className="px-4 py-10 md:px-20 bg-black text-white text-center">
                    <h1 className="text-2xl md:text-4xl font-extrabold mb-8 border-b-4 border-white inline-block pb-2">
                        Hino do Corinthians
                    </h1>

                    <p className="text-lg md:text-xl font-medium leading-relaxed whitespace-pre-line text-gray-200 max-w-3xl mx-auto">
                        Salve o Corinthians<br />
                        O campeão dos campeões<br />
                        Eternamente<br />
                        Dentro dos nossos corações<br /><br />

                        Salve o Corinthians<br />
                        De tradições e glórias mil<br />
                        Tu és o orgulho<br />
                        Dos esportistas do Brasil<br /><br />

                        Teu passado é uma bandeira<br />
                        Teu presente, uma lição<br />
                        Figuras entre os primeiros<br />
                        Do nosso esporte bretão<br /><br />

                        Corinthians grande<br />
                        Sempre altaneiro<br />
                        És do Brasil<br />
                        O clube mais brasileiro
                    </p>
                </section>

                <Footer />
            </div>
        </>
    );
};

export default Home;
