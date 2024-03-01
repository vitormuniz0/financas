import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/criarconta.module.css'
import {Form , Field, ErrorMessage, Formik} from "formik";
import * as yup from "yup";
import Axios from "axios";

const CriarConta = () =>{

  const inicialvalues = {
    nome: "" ,
    usuario: "" ,
    senha: "",
    confirmSenha: ""
  }
    
  const validationCriarConta = yup.object().shape({

    nome: yup
      .string()
      .required("Este campo é obrigatorio!"),
    usuario: yup
      .string()
      .required("Este campo é obrigatorio!"),
    senha: yup
      .string()
      .min(8, "A senha deve conter no minino 8 caracteres!")
      .required("Este campo é obrigatorio!"),
    confirmSenha : yup
      .string()
      .oneOf([yup.ref("senha"), null], "As senhas não são iguais!")
  })


  const handleClickCriarConta = (values) =>{
    Axios.post("http://localhost:3002/cadastro" , {
      nome: values.nome,
      usuario: values.usuario , 
      senha: values.senha, 
    },{rejectUnauthorized: false}).then((response) =>{
      console.log(response);
    });
  }
    

    return(
    <>
      <div className={styles.body}>
      <Formik  initialValues={inicialvalues} onSubmit={handleClickCriarConta} validationSchema={validationCriarConta}>
          <Form className={styles.form}>
            <h1 className={styles.title}>Criar Conta</h1>

            <div>
              <Field type='text' 
              name= 'nome'
              placeholder='Nome'
              className={styles.inputName}/><br/>
              <ErrorMessage 
              name='nome'
              component='span'
              className={styles.error}/>
            </div>


            <div>
              <Field type='text' 
              name = 'usuario'
              placeholder='Usuário'
              className={styles.inputUser}/><br/>
              <ErrorMessage
              name='usuario'
              component='span'
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
              component='span'
              className={styles.error}/>
            </div>

            <div>
              <Field type='password' 
              name = 'confirmSenha'
              placeholder='Confirmar Senha' 
              className={styles.inputConfirmSenha}/><br/>
              <ErrorMessage 
              name='confirmSenha'
              component='span'
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