import React, {useState} from "react";
import Mundial from '../assets/imagens/mundial.png';

 const LoginForm = () =>{
    const [email ,setEmail] = useState('')
    const [senha ,setSenha] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault();
        alert(`Email: ${email} \nSenha:${senha}`)
    }



    return(
        <>
            <div
      className="min-h-screen bg-full p-80"
      style={{ backgroundImage: `url(${Mundial})` }}
    ></div>
            <div className="bg-gray-100 p-8 rounded-2xl shadow-lg w-full max-w-md">
                    <h2 className="text-2xl font-semibold text-center mb-6"> Login</h2>
                    <form onSubmit={handleSubmit}>
                        
                        <div>
                            <label>E-mail</label>
                            <input
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 text-sm sm:text-base"
                    placeholder="Digite seu email"/>
                        </div>
                        <div>
                            <label>Senha</label>
                            <input
                    id="password"
                    type="password"
                    name="password"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    required
                    className="w-full border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 text-sm sm:text-base"
                    placeholder="Digite sua senha"/>

                        </div>
                        <button type="submit" className="w-full bg-black text-white py-2 px-6 rounded-b-lg hover:bg-gray-600 transition ">
                            Entrar
                        </button>
                    </form>
                    <p className="mt-6 text-center text-sm text-gray-600">nao tem conta?
                    <a href="/register" className="text-gray-600 hover:underline text-center p-2">Cadastre-se</a>
                    </p>
            </div>
        </>
    )
 }

 export default LoginForm