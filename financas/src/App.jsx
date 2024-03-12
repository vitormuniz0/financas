import React from "react"
import jpIMG from './assets/jp.svg'
import "./css/styles.css"

const App = ()=> {
    return (
        <div className="container">
            <div className="container-login">
                <div className="wrap-login">
                    <form className="login-form">

                        <span className="login-form-title">Bem Vindo!</span>

                        <span className="login-form-title">
                            <img src={jpIMG} alt="Jovem Programador"/>
                        </span>

                        <div className="wrap-input">
                            <input type="email" />
                            <span className="focus-email" data-placeholder="Email"></span>
                        </div>

                        <div className="wrap-input">
                            <input type="password" />
                            <span className="focus-email" data-placeholder="Password"></span>
                        </div>

                        <div className="container-login-form-btn">
                            <button className="login-form-btn">Login</button>
                        </div>

                        <div className="text-center">
                            <span className="text1">Não possui conta?</span>

                            <a href="#" className="text2">Criar Conta.</a>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default App;