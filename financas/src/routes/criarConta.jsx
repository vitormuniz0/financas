import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/criarconta.module.css'

const CriarConta = () =>{
    
    const [inputNome , setInputNome] = useState('');
    const [inputUser , setInputUser] = useState('');
    const [inputSenha , setInputSenha] = useState('');
    const [inputConfirmSenha , setInputConfirmSenha] = useState('');
    const [erroNome, setErroNome] = useState('');
    const [erroUser, setErroUser] = useState('');
    const [erroSenha, setErroSenha] = useState('');
    const [erroConfirmSenha, setErroConfirmSenha] = useState('');
    



    const handleSubmit = (event) =>{
        event.preventDefault()

        if(!inputNome){
            setErroNome('* Por favor, preencha o  campo Nome *');
        } else {
            setErroNome('');
        }

        if(!inputUser){
          setErroUser('* Por favor, preencha o  campo Usuário *');
        } else {
          setErroUser('');
        }

        if(!inputSenha){
            setErroSenha('* Por favor, preencha o campo Senha *');
        } else {
            setErroSenha('');
        }

        if(!inputConfirmSenha){
          setErroConfirmSenha('* Por favor, preencha o campo Confirmar Senha *');
        } else {
          setErroConfirmSenha('');
        }

    }

    return(
    <>
      <div className={styles.body}>
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
            onChange={(e)=> setInputUser(e.target.value)}/> {''}<br/>
            {erroUser && <span style={{ color: 'red' }}>{erroUser}</span>}
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
            onChange={(e)=> setInputConfirmSenha(e.target.value)} /> {''} <br/>
            {erroConfirmSenha && <span style={{ color: 'red' }}>{erroConfirmSenha}</span>}
          </div>
          <input type='submit' value = 'Criar' className={styles.buttonEnviar}/> <br/>
          <Link to="/" className={styles.linkCadastro}>Entrar</Link>
        </form>
      </div>
    </>
  );
}

export default CriarConta;