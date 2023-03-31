import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import './index.scss';


const Login = () => {
  return ( 
    <section className="login">
      <Header/>
    <form onSubmit={scannerItens} className="login__form">
      <h1>Acesse com seu login ou cadastre-se!</h1>
      <h2>você pode entrar com o seu CPF</h2>
      <div className="login__input-wrapper">
        <label htmlFor="name">Digite seu nome:</label>
        <input type="text" placeholder='Nome Completo' id='name' className='login__input-name'/>
        <span id="erroNome"></span>
        
        <label htmlFor="password">Senha:</label>
        <input type="password" id="password" placeholder='******' />
        <span id="erroSenha"></span>
        
      </div>
        <button type='submit'>
          <Link to={`/home`}>Entrar</Link> 
        </button><p>
        <span id="sucess"></span>
        </p>
      </form>
    </section> 
  );
};


function scannerItens (value) {
  event.preventDefault();
    
  const nome = event.target.querySelector("#name");
  const senha = event.target.querySelector("#password");
  const sucesso = event.target.querySelector("#sucess");

  const nomeVazio = event.target.querySelector("#erroNome");
  const senhaVazia = event.target.querySelector("#erroSenha");
  const erroMsg = "*Campo Obrigatório"

  if (nome.value === '') {
      nomeVazio.style.visibility = 'visible'
      nomeVazio.style.fontFamily = 'Raleway'
      nomeVazio.style.fontSize = '10px'
      nomeVazio.style.color = 'red'
      nomeVazio.textContent = erroMsg
      nome.style.border = '2px solid red'
  } else {
      nomeVazio.style.visibility = 'hidden'
      nome.style.border = '2px solid gray'
  }

  if (senha.value === '') {
      senhaVazia.style.visibility = 'visible'
      senhaVazia.style.fontFamily = 'Raleway'
      senhaVazia.style.fontSize = '10px'
      senhaVazia.style.color = 'red'
      senhaVazia.textContent = erroMsg
      senha.style.border = '2px solid red'
  } else {
      senhaVazia.style.visibility = 'hidden'
      senhaVazia.style.fontSize = '10px'
      senha.style.border = '2px solid gray'
  };

  if (nome.value != '' && senha.value != '') {
      sucesso.textContent = 'Sucesso!!'
      sucesso.style.color = 'green'
      sucesso.style.fontFamily = 'Raleway'
      sucesso.style.fontSize = '15px'

      sucesso.style.visibility = 'visible'
      nomeVazio.style.visibility = 'hidden'
      senhaVazia.style.visibility = 'hidden'
      
  } else {
      sucesso.style.fontFamily = 'Raleway';
      sucesso.textContent = "Campos obrigatórios não preenchidos!"
      sucesso.style.color = 'red'
      sucesso.style.visibility = 'visible'
      sucesso.style.fontSize = '15px'
  }
}
export default Login