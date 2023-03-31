import React from 'react'
import { Link } from 'react-router-dom';
import Finish from '../../views/Finish/Finish';
import "./index.scss"



const Pay = () => {
  return (
    <div className="modal-pay">
        <div className="container">
          <form onSubmit={checkItens} className="pay-time">
            <h3 className='pay-title'>Finalizar compra: </h3>
            <label className='label-pay-type' htmlFor='name'>Digite seu nome:</label>
            <input className='input-pay' type={'text'} placeholder="Nome Completo" id='name'></input>
            <span id='nomeVazio'></span>

            <label className='label-pay-type' htmlFor='cpf'>Digite seu CPF:</label>
            <input className='input-pay' type={'text'} placeholder="EX: 123.456.789-00" id='cpf'></input>
            <span id='cpfVazio'></span>

            <label className='label-pay-type' htmlFor='adress'>Endereço:</label>
            <input className='input-pay' type={'password'} placeholder="********" id='endereco'></input>
            <span id='enderecoVazio'></span>

            <label className='label-pay-type' htmlFor='pay-tipe'>Forma de pagamento:</label>
            
            <label htmlFor="pix" className='label-pay-checkbox-type'>Pix</label>
            <input type="checkbox" id="checkbox" name="format" className='input-pay-checkbox'/> 
                 
            <label htmlFor="boleto" className='label-pay-checkbox-type'>Boleto</label>     
            <input type="checkbox" id="checkbox" name="format" className='input-pay-checkbox'/>
              
            <label htmlFor="credit-card" className='label-pay-checkbox-type'>Cartão de Crédito</label>
            <input type="checkbox" id="checkbox" name="format" className='input-pay-checkbox'/>
            <span id='checkboxVazio'></span>

            <button className='confirm-order'>
              <Link to={`/finish`}>Confirmar Pedido</Link>
          </button>
          <span id='sucess'></span>
        </form>
      </div>
  </div>           
  )
}

function checkItens (value) {
  event.preventDefault();
    
  const nome = event.target.querySelector("#name");
  const cpf = event.target.querySelector("#cpf");
  const endereco = event.target.querySelector("#endereco");
  const sucesso = event.target.querySelector("#sucess");
 

  const nomeVazio = event.target.querySelector("#nomeVazio");
  const cpfVazio = event.target.querySelector("#cpfVazio");
  const enderecoVazio = event.target.querySelector("#enderecoVazio");
  const erroMsg = "*Campo Obrigatório"

  if (nome.value === '') {
      nomeVazio.style.visibility = 'visible'
      nomeVazio.style.fontFamily = 'Raleway'
      nomeVazio.style.fontSize = '15px'
      nomeVazio.style.color = 'red'
      nomeVazio.textContent = erroMsg
  } else {
      nomeVazio.style.visibility = 'hidden'
  }

  if (cpf.value === '') {
    cpfVazio.style.visibility = 'visible'
    cpfVazio.style.fontFamily = 'Raleway'
    cpfVazio.style.fontSize = '15px'
    cpfVazio.style.color = 'red'
    cpfVazio.textContent = erroMsg
  } else {
    cpfVazio.style.visibility = 'hidden'
  }
  
  if (endereco.value === '') {
    enderecoVazio.style.visibility = 'visible'
    enderecoVazio.style.fontFamily = 'Raleway'
    enderecoVazio.style.fontSize = '15px'
    enderecoVazio.style.color = 'red'
    enderecoVazio.textContent = erroMsg
  } else {
    enderecoVazio.style.visibility = 'hidden'
  }

  if (nome.value != '' && cpf.value != '' && endereco.value != '') {
    sucesso.textContent = 'Sucesso!!'
    sucesso.style.color = 'green'
    sucesso.style.fontFamily = 'Raleway'
    sucesso.style.fontSize = '15px'

    sucesso.style.visibility = 'visible'
    nomeVazio.style.visibility = 'hidden'
    cpfVazio.style.visibility = 'hidden'
    enderecoVazio.style.visibility = 'hidden'
    
} else {
    sucesso.style.fontFamily = 'Raleway';
    sucesso.textContent = "Campos obrigatórios não preenchidos!"
    sucesso.style.color = 'red'
    sucesso.style.visibility = 'visible'
}

}


export default Pay;