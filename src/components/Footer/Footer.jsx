import './index.scss';
import logoDNC2 from "../../assets/logo-footer.png"



const Footer = () => {
  return (
    <footer className='logo__footer'>
        <img src={logoDNC2} alt="logo footer" className='logo__footer-img'/>
    
        <h3 className='logo__footer-text'>Preços e condições de pagamento exclusivos para compras via internet e podem variar nas lojas físicas.<br></br> 
        Para mais informações, entre em contato: (011) 1111-2222</h3>

    </footer>
  );
};

export default Footer;