import React, { useState } from "react";
import aren from "../assets/imagens/aren.png";
import axios from 'axios'

const ContactForm = () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
    });
   
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
   
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const response = await axios.post("https://backend-portalturismo-wd1t.onrender.com/api/contacts", {
              name: formData.name,
              email: formData.email,
              message: formData.message,
          });
          alert("menssagem cadastrada com sucesso!!" + `nome: ${formData.name} email: ${formData.email}`)
          window.location.href = "/"
      } catch (error) {
          if (error.response) {
              alert("Erro ao cadastrar usuário")
          } else {
              alert("erro ao conectar ao servidor")
          }
      }
  };
   
   
    return (
        <div
            className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 py-8"
            style={{ backgroundImage: `url(${aren})` }}
        >
            <div className="bg-black bg-opacity-80 p-6 md:p-10 rounded-2xl shadow-2xl w-full max-w-xl text-white">
                <h2 className="text-3xl md:text-4xl font-extrabold text-center uppercase tracking-wide border-b-4 border-white pb-2 mb-6">
                    Entre em Contato
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-semibold mb-1">Nome</label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full bg-gray-900 text-white border border-gray-600 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                            placeholder="Digite seu nome"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold mb-1">E-mail</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full bg-gray-900 text-white border border-gray-600 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                            placeholder="Digite seu E-mail"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-semibold mb-1">Mensagem</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full bg-gray-900 text-white border border-gray-600 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                            placeholder="Digite sua Mensagem..."
                            rows="5"
                        />
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold uppercase transition duration-300 w-full"
                        >
                            Enviar Mensagem
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
