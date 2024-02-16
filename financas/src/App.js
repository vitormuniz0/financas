import './App.css';
import React, { useState } from 'react';

function App() {

  const [inputNome , setInputNome] = useState('');
  const [inputSenha , setInputSenha] = useState('');
  const [erroNome, setErroNome] = useState('');
  const [erroSenha, setErroSenha] = useState('');


  const handleSubmit = (event) =>{
    event.preventDefault()

    if(!inputNome){
      setErroNome('* Por favor, preencha o  campo Usúario *');
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
    <form className='form' onSubmit={handleSubmit}>
      <h1 className='title'>Login</h1>
      <div>
        <input type='text' 
        placeholder='Usúario'
        className='inputUser' 
        onChange={(e)=> setInputNome(e.target.value)}/> {''}<br/>
        {erroNome && <span style={{ color: 'red' }}>{erroNome}</span>}
      </div>
      <div>
        <input type='password' 
        placeholder='Senha' 
        className='inputSenha'
        onChange={(e)=> setInputSenha(e.target.value)} /> {''} <br/>
        {erroSenha && <span style={{ color: 'red' }}>{erroSenha}</span>}
      </div>
      <input type='submit' value = 'Entrar' className='buttonEnviar'/> <br/>
      <a href='./criarConta.js' className='linkCadastro'>Criar Conta</a>
    </form>
   

  );
}

export default App;
