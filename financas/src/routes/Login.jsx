import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/login.module.css'

const Login = () =>{
    
    const [inputNome , setInputNome] = useState('');
    const [inputSenha , setInputSenha] = useState('');
    const [erroNome, setErroNome] = useState('');
    const [erroSenha, setErroSenha] = useState('');



    const handleSubmit = (event) =>{
        event.preventDefault()

        if(!inputNome){
            setErroNome('* Por favor, preencha o  campo Usuário *');
        } else {
            setErroNome('');
        }

        if(!inputSenha){
            setErroSenha('* Por favor, preencha o campo Senha *');
        } else {
            setErroSenha('');
        }

    }

    return(
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.title}>Login</h1>
        <div>
          <input type='text' 
          placeholder='Usuário'
          className={styles.inputUser} 
          onChange={(e)=> setInputNome(e.target.value)}/> {''}<br/>
          {erroNome && <span style={{ color: 'red' }}>{erroNome}</span>}
        </div>
        <div>
          <input type='password' 
          placeholder='Senha' 
          className={styles.inputSenha}
          onChange={(e)=> setInputSenha(e.target.value)} /> {''} <br/>
          {erroSenha && <span style={{ color: 'red' }}>{erroSenha}</span>}
        </div>
        <input type='submit' value = 'Entrar' className={styles.buttonEnviar}/> <br/>
        <Link to="/CriarConta" className={styles.linkCadastro}>Criar Conta</Link>
      </form>
   
    </>
  );
}

export default Login;