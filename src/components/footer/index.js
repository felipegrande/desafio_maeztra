import React from 'react';
import  './styles.css';
import payment from '../../assets/img/accepted-payment-methods#meio-de-pagamentos.png';
import poweredVtex from '../../assets/img/poweredByImage#vtex.png';
import poweredby from '../../assets/img/Powered-by.png';
import poweredMaeztra from '../../assets/img/powered-by#maeztra.png';
import social from '../../assets/img/social-networks#social-midia.png';




function FooterSite() {
    return (
      <section className='footer'>
        <img src={social} alt='logos das redes sociais' ></img>
        <img src={payment} alt='imagens com as formas de pagamentos' ></img>
        <div  className='footer-powered' >
            <div className='footer-powered-vtex'>
                <img src={poweredby} alt='logo vtex  no footer' ></img>
                <img  className='footer-powered-vtex-logo' src={poweredVtex} alt='logo vtex  no footer' ></img>

            </div>
             <img src={poweredMaeztra} alt='logo Maeztra no footer' ></img>

        </div>
        
      </section>
    );
  }
  
  export default FooterSite;