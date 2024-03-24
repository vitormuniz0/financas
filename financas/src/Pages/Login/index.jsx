import React, { useState } from "react"
import jpIMG from '../../assets/jp.svg'
import "../../css/global.css"
import { Link } from "react-router-dom"
import { LayoutComponents } from "../../Components/layoutcomponents/LayoutComponents"
import { Form, Field, ErrorMessage, Formik } from "formik";
import * as yup from "yup";

export const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const inicialvalues = {
        name: "" ,
        email: "" ,
        password: ""
    }

    const validationLogin = yup.object().shape({
        email: yup
            .string()
            .email("*Este Email é invalido*")
            .required("*Este campo é Obrigatório*"),
        password: yup
            .string()
            .min(8, "*A senha deve conter no minino 8 caracteres*")
            .max(25)
            .required("*Este Campo é Obrigatório*")
    })

    return (
        <LayoutComponents>
            <Formik className="login-form" validationSchema={validationLogin} initialValues={inicialvalues}>
                <Form>
                    <span className="login-form-title">Bem Vindo!</span>

                    <span className="login-form-title">
                        <img src={jpIMG} alt="Jovem Programador" />
                    </span>

                    <div className="wrap-input">
                        <Field
                            type="email"
                            className={email !== "" ? 'has-val input' : 'input'}
                            value={email}
                            name="email"
                            onChange={e => setEmail(e.target.value)}
                        />
                        <span className="focus-input" data-placeholder="Email"></span>
                        <div className='errorMessage'><ErrorMessage component='span' name='email'  /></div>
                    </div>
                    
                    <div className="wrap-input">
                        <Field
                            type="password"
                            className={password !== "" ? 'has-val input' : 'input'}   //if a senha for diferende de "" a class é has-val e input
                            value={password}
                            name="password"
                            onChange={e => setPassword(e.target.value)}
                        />
                        <span className="focus-input" data-placeholder="Password"></span>
                        <div className='errorMessage'><ErrorMessage component='span' name='password'  /></div>
                    </div>
                    
                    <div className="container-login-form-btn">
                        <button className="login-form-btn">Login</button>
                    </div>

                    <div className="text-center">
                        <span className="text1">Não possui conta?</span>

                        <Link to="/register" className="text2">Criar Conta.</Link>
                    </div>
                </Form>

            </Formik>
        </LayoutComponents>
    );
}