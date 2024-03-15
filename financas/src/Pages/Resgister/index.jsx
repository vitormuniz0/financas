import { LayoutComponents } from "../../Components/layoutcomponents/LayoutComponents"
import React, { useState } from "react"
import jpIMG from '../../assets/jp.svg'
import { Link } from "react-router-dom"
import "../../css/global.css"

export const Register = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <LayoutComponents>
            <form className="login-form">

                <span className="login-form-title">Cadastre-se!</span>

                <span className="login-form-title">
                    <img src={jpIMG} alt="Jovem Programador" />
                </span>

                <div className="wrap-input">
                    <input
                        type="email"
                        className={name !== "" ? 'has-val input' : 'input'}
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Nome"></span>
                </div>

                <div className="wrap-input">
                    <input
                        type="email"
                        className={email !== "" ? 'has-val input' : 'input'}
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Email"></span>
                </div>

                <div className="wrap-input">
                    <input
                        type="password"
                        className={password !== "" ? 'has-val input' : 'input'}   //if a senha for diferende de "" a class é has-val e input
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Password"></span>
                </div>

                <div className="container-login-form-btn">
                    <button className="login-form-btn">Login</button>
                </div>

                <div className="text-center">
                    <span className="text1">Já Possui Conta?</span>

                    <Link to="/register" className="text2">Acessar com e-mail e Conta</Link>
                </div>

            </form>
        </LayoutComponents>
    )

}