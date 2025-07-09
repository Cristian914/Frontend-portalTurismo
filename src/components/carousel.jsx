import React from "react";
import CardService from "./cardService";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import tiochico from "../assets/imagens/tiochico.png";
import loira from "../assets/imagens/loira.jpg";
import garro from "../assets/imagens/garro.png";
import talles from "../assets/imagens/talles.png";
import romero from "../assets/imagens/romero.png";
import giu from "../assets/imagens/giu.png";

const tourist_places = [
    { Image: tiochico, title: "Fábio Santos", description: "Tio Chico, nosso guardião fiel." },
    { Image: loira, title: "Roger Guedes", description: "Traidor... era só ter ficado até o fim da temporada." },
    { Image: garro, title: "Rodrigo Garro", description: "Era só ter tocado pro Yuri." },
    { Image: talles, title: "Talles Magno", description: "Volta pro Vasco, seu bagre." },
    { Image: romero, title: "Ángel Romero", description: "Você é maravilhoso! 🖤" },
    { Image: giu, title: "Giuliano", description: "Vai pro Santos mesmo, traíra." },
];

const Carousel = () => {
    return (
        <div className="relative z-10 bg-black py-16 px-4 md:px-12">
            <h1 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-12 border-b-4 border-white inline-block pb-2">
                Jogadores e Suas Cagadas
            </h1>

            <div>
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    slidesPerView={2}
                    spaceBetween={20}
                    loop={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                    className="swiper-custom"
                >
                    {tourist_places.map((place, index) => (
                        <SwiperSlide key={index}>
                            <CardService
                                img={place.Image}
                                alt={place.description}
                                titulo={place.title}
                                descricao={place.description}
                                link="#"
                                botao="Saiba Mais"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Carousel;
