import React from 'react';
import  './styles.css'
import { useState } from 'react';
import more from '../../assets/img/more.png'

function Faq() {

    const [menu1, setMenu1] = useState(false)
    const [menu2, setMenu2] = useState(false)
    const [menu3, setMenu3] = useState(false)

    return (
      <div className='faq'> 
        <button onClick={() => setMenu1(!menu1)}  className='menu-faq'>
            <span className='faq-title'>Informações</span>
            <img src={more} alt='icone de mais' ></img>
        </button>
        {
            menu1 && (
                <div className='faq-optins'>
                    <p >Quem Somos  </p>
                    <p>Prazo de Envio  </p>
                    <p>Trocas e Devoluções </p>
                    <p>Promoções e Cupons  </p>
            </div>  
            )
        }
        
        <button  onClick={() => setMenu2(!menu2)} className='menu-faq'>
            <span className='faq-title'>Minha Conta</span>
            <img src={more} alt='icone de mais' ></img>
        </button>
        {
            menu2 && (
                <div className='faq-optins'>
                    <p >Minha Conta </p>
                    <p>Meus Pedidos  </p>
                    <p>Cadastre-se </p>
                    
            </div>  
            )
        }
        <button onClick={() => setMenu3(!menu3)} className='menu-faq'>
            <span className='faq-title'>Onde nos Encontrar</span>
            <img src={more} alt='icone de mais' ></img>
        </button>
        {
            menu3 && (
                <div className='faq-optins'>
                    <p >Lojas</p>
                    <p>Endereço  </p>
                
                    
            </div>  
            )
        }
       
      </div>
    );
  }
  
  export default Faq;