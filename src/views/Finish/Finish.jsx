import React from 'react'
import './index.scss'
import Footer from '../../components/Footer/Footer'
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu'
import Correios from '../../assets/logo-correios.png'

const Finish = () => {
  return (
    <div className="finish-time">
        <HeaderMenu />
        <div className="code-order">
            <h1 className="code-order-text">Obrigado por comprar no nosso site!</h1>
            <h2 className="code-order-number">Número do seu pedido: 25952125365</h2>

            <div className="rastreiamento">
                <a href="https://rastreamento.correios.com.br/app/index.php" target="_blank"><img className='logo-correios' src={Correios}></img></a>
            </div>

        
            <Footer />
        </div>
    </div>
  )
}


export default Finish