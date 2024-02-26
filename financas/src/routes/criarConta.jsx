import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/criarconta.module.css'
import {Form , Field, ErrorMessage, Formik} from "formik";
import * as yup from "yup";

const CriarConta = () =>{
    
  const validationLogin = yup.object().shape({

    nome: yup.string().required("Este campo é obrigatorio"),
    usuario: yup.string().required("Este campo é obrigatorio"),
    senha: yup.string().min(8, "A senha deve conter no minino 8 caracteres").required("Este campo é obrigatorio"),
    confirmSenha : yup.string().min(8).required("Este campo é obrigatorio")
  })


  const handleClickLogin = (values) =>{
    console.log(values)
  }
    

    return(
    <>
      <div className={styles.body}>
      <Formik  initialValues={{}} onSubmit={handleClickLogin} validationSchema={validationLogin}>
          <Form className={styles.form}>
            <h1 className={styles.title}>Criar Conta</h1>

            <div>
              <Field type='text' 
              name = 'nome'
              placeholder='Nome'
              className={styles.inputName}/><br/>
              <ErrorMessage 
              name='nome'
              component='Span'
              className={styles.error}/>
            </div>


            <div>
              <Field type='text' 
              name = 'usuario'
              placeholder='Usuário'
              className={styles.inputUser}/><br/>
              <ErrorMessage
              name='usuario'
              component='Span'
              className={styles.error}
              />
            </div>

            <div>
              <Field type='password'
              name = 'senha' 
              placeholder='Senha' 
              className={styles.inputSenha}/><br/>
              <ErrorMessage 
              name='senha'
              component='Span'
              className={styles.error}/>
            </div>

            <div>
              <Field type='password' 
              name = 'confirmSenha'
              placeholder='Confirmar Senha' 
              className={styles.inputConfirmSenha}/><br/>
              <ErrorMessage 
              name='confirmSenha'
              component='Span'
              className={styles.error}/>
            </div>

            <button type='submit' value='Criar' className={styles.buttonEnviar}/> <br/>
            <Link to="/" className={styles.linkCadastro}>Entrar</Link>
          </Form>
        </Formik>
      </div>
    </>
  );
}

export default CriarConta;