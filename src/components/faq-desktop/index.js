import React from 'react';
import  './styles.css'


function FaqDesktop() {


    return (
      <div className='faqDesktop'> 
        <div className='faqDesktop-option'>
            <span className='faq-title'>Informações</span>
            <p >Quem Somos  </p>
            <p>Prazo de Envio  </p>
            <p>Trocas e Devoluções </p>
            <p>Promoções e Cupons  </p>
        </div>
        <div className='faqDesktop-option'>
            <span className='faq-title'>Minha Conta</span>
            <p >Minha Conta </p>
            <p>Meus Pedidos  </p>
            <p>Cadastre-se </p>
        </div>
        <div className='faqDesktop-option'>
            <span className='faq-title'>Onde nos Encontrar</span>
            <p >Lojas</p>
            <p>Endereço  </p>
        </div>
    
      </div>
    );
  }
  
  export default FaqDesktop;