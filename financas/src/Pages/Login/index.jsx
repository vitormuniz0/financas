import React, { useState } from "react"
import jpIMG from '../../assets/jp.svg'
import "../../css/global.css"
import { Link } from "react-router-dom"
import { LayoutComponents } from "../../Components/layoutcomponents/LayoutComponents"

export const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <LayoutComponents>
            <form className="login-form">

                <span className="login-form-title">Bem Vindo!</span>

                <span className="login-form-title">
                    <img src={jpIMG} alt="Jovem Programador" />
                </span>

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
                    <span className="text1">Não possui conta?</span>

                    <Link to="/register" className="text2">Criar Conta.</Link>
                </div>

            </form>
        </LayoutComponents>
    );
}