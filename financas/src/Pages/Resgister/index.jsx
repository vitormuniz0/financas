import { LayoutComponents } from "../../Components/layoutcomponents/LayoutComponents"
import React, { useState } from "react"
import jpIMG from '../../assets/jp.svg'
import { Link } from "react-router-dom"
import "../../css/global.css"
import { Form, Field, ErrorMessage, Formik } from "formik";
import * as yup from "yup";

export const Register = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const inicialvalues = {
        name: "" ,
        email: "" ,
        password: ""
    }

    const validationRegister = yup.object().shape({

        name: yup
            .string()
            .required("*Este campo é Obrigatório*"),
        email: yup
            .string()
            .email("*Este Email é invalido*")
            .required("*Este campo é Obrigatório*"),
        password: yup
            .string()
            .min(8, "A senha deve conter no minino 8 caracteres!")
            .required("*Este campo é Obrigatório*"),
    })

    return (
        <LayoutComponents>
            <Formik className="login-form" validationSchema={validationRegister} initialValues={inicialvalues}>
                <Form>
                    <span className="login-form-title">Cadastre-se!</span>

                    <span className="login-form-title">
                        <img src={jpIMG} alt="Jovem Programador" />
                    </span>

                    <div className="wrap-input">
                        <Field
                            type="text"
                            className={name !== "" ? 'has-val input' : 'input'}
                            value={name}
                            name="name"
                            onChange={e => setName(e.target.value)}
                        />
                        <span className="focus-input" data-placeholder="Nome"></span>
                        <div className='errorMessage'><ErrorMessage component='span' name='name'  /></div>
                    </div>

                    <div className="wrap-input">
                        <Field
                            type="email"
                            className={email !== "" ? 'has-val input' : 'input'}
                            value={email}
                            name = "email"
                            onChange={e => setEmail(e.target.value)}
                        />
                        <span className="focus-input" data-placeholder="email"></span>
                        <div className='errorMessage'><ErrorMessage component='span' name='email'  /></div>
                    </div>

                    <div className="wrap-input">
                        <Field
                            type="password"
                            className={password !== "" ? 'has-val input' : 'input'}   //if a senha for diferende de "" a class é has-val e input
                            value={password}
                            name = "password"
                            onChange={e => setPassword(e.target.value)}
                        />
                        <span className="focus-input" data-placeholder="Password"></span>
                        <div className='errorMessage'><ErrorMessage component='span' name='password'  /></div>
                    </div>

                    <div className="container-login-form-btn">
                        <button className="login-form-btn">Login</button>
                    </div>

                    <div className="text-center">
                        <span className="text1">Já Possui Conta?</span>

                        <Link to="/register" className="text2">Acessar com e-mail e Conta</Link>
                    </div>
                </Form>
            </Formik>
        </LayoutComponents>
    )

}