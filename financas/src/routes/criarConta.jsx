import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/criarconta.module.css'

const CriarConta = () =>{
    
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
        <h1 className={styles.title}>Criar Conta</h1>
        <div>
          <input type='text' 
          placeholder='Nome'
          className={styles.inputName}
          onChange={(e)=> setInputNome(e.target.value)}/> {''}<br/>
          {erroNome && <span style={{ color: 'red' }}>{erroNome}</span>}
        </div>
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
        <div>
          <input type='password' 
          placeholder='Confirmar Senha' 
          className={styles.inputConfirmSenha}
          onChange={(e)=> setInputSenha(e.target.value)} /> {''} <br/>
          {erroSenha && <span style={{ color: 'red' }}>{erroSenha}</span>}
        </div>
        <input type='submit' value = 'Criar' className={styles.buttonEnviar}/> <br/>
        <Link to="/" className={styles.linkCadastro}>Entrar</Link>
      </form>
   
    </>
  );
}

export default CriarConta;