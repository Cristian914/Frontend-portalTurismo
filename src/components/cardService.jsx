import React from "react";

const CardService= (props) => {
    return(
        <>
        <div className="w-full max-w-sm sm:max-w-md md:max-w-lg bg-gray-950 
                        border-gray-200 rounded-2xl shadow-md overflow-hidden m-2 flex flex-col ml-auto mr-auto">
            <img
                src={props.img}
                alt={props.alt}
                className="w-full h-48 sm:h-56 md:h-64 object-cover"/>
            <div className="p-4 flex flex-col flex-grow">
                <h1 className="text-lg sm:text-x1 font-semibold text-white">{props.titulo}</h1>
                <p className="text-white mt-2 text-sm sm:text-base">{props.descricao}</p>
                <a href={props.link} className="mt-4 inline-block bg-gray-500 text-white px-4 py-4 rounded-3xl text-center
                                                hover:bg-gray-800 transition duration-300">
                    {props.botao}</a>
            </div>

        </div>
        </>
    )
}
export default CardService

    
