import React, { useContext, useState } from "react"
import jpIMG from '../../assets/jp.svg'
import "../../css/global.css"
import { Link, Navigate } from "react-router-dom"
import { LayoutComponents } from "../../Components/Layoutcomponents/index"

import { AuthContext } from "../../context/auth"

export const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { signIn, signed, loading } = useContext(AuthContext)

    const handleSignIn = async (e) => {
        e.preventDefault()
        const data = {  email, password}
        await signIn(data)
    }

    if (signed && !loading) {
        return <Navigate to="/home" />
    } else {
        return (
            <LayoutComponents>
                <form onSubmit={handleSignIn} className="login-form"  >
                        <span className="login-form-title">Bem Vindo!</span>

                        <span className="login-form-title">
                            <img src={jpIMG} alt="Jovem Programador" />
                        </span>

                        <div className="wrap-input">
                            <input
                                type="email"
                                className={email !== "" ? 'has-val input' : 'input'}
                                value={email}
                                name="email"
                                onChange={e => setEmail(e.target.value)}
                                
                            />
                            <span className="focus-input" data-placeholder="Email"></span>
                        </div>

                        <div className="wrap-input">
                            <input
                                type="password"
                                className={password !== "" ? 'has-val input' : 'input'}   //if a senha for diferende de "" a class é has-val e input
                                value={password}
                                name="password"
                                onChange={e => setPassword(e.target.value)}
                               
                            />
                            <span className="focus-input" data-placeholder="Password"></span>
                        </div>

                        <div className="container-login-form-btn">
                            <button className="login-form-btn" type="submit">Login</button>
                        </div>

                        <div className="text-center">
                            <span className="text1">Não possui conta?</span>

                            <Link to="/register" className="text2">Criar Conta.</Link>
                        </div>

                </form>
            </LayoutComponents>
        );
    }
}