import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/login.module.css'
import {formik , Form , Field, ErrorMessage, Formik} from "formik";
import * as yup from "yup";

const Login = () =>{
    
    const validationLogin = yup.object().shape({
      usuario: yup
        .string()
        .required("Este campo é obrigatorio"),
      senha: yup
        .string()
        .min(8, "A senha deve conter no minino 8 caracteres")
        .required("Este campo é obrigatorio"),
    })


    const handleClickLogin = (values) =>{
        console.log(values)
    }

    return(
    <>
      <div className={styles.body}>
        <Formik  initialValues={{}} onSubmit={handleClickLogin} validationSchema={validationLogin}>
          <Form  className={styles.form}>
            <h1 className={styles.title}>Login</h1>
            
            <div>
              <Field type='text' 
              name="usuario"
              placeholder='Usuário'
              className={styles.inputUser} /><br/>
              <ErrorMessage 
              component='Span'
              name='usuario'
              className={styles.error}
              />
            </div>

            <div>
              <Field type='password' 
              name='senha'
              placeholder='Senha' 
              className={styles.inputSenha}/><br/>
              <ErrorMessage 
              component='Span'
              name='senha'
              className={styles.error}
              />
            </div>

            <input type='submit' value = 'Entrar' className={styles.buttonEnviar}/> <br/>
            <Link to="/CriarConta" className={styles.linkCadastro}>Criar Conta</Link>

          </Form>
        </Formik>
      </div>
    </>
  );
}

export default Login;