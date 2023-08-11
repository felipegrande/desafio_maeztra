import React from 'react';
import  './styles.css'
import iconMenu from '../../assets/img/icon-menu.png'
import logo from '../../assets/img/logo#mobile.png'
import Lupa from '../../assets/img/search-button.png'
import sacola from '../../assets/img/minicart.v2.png'
import logoDesktop from '../../assets/img/logo-maeztra-novo.png'
import sacolaDeskotp from '../../assets/img/icon-shoppingbag.png';
import favoritos from '../../assets/img/Vector.png'
import myAccont from '../../assets/img/icon-user.png'


function Header() {
    return (
      <header>
        <div className='topo'>
            <p> Acompanhe as melhores promoções disponíveis aqui na Maeztra.</p>
        </div>
        <section className='menu-header'>
            <div className='menu-header-1'>
                    <img src={iconMenu} alt='icone do menu do header' />
                    <img src={logo} alt='icone da logo' />
            </div>
            <div className='menu-header-2'>
                <img src={Lupa} alt='icone do icone de busca' />
                <img src={sacola} alt='icone do icone do minicart' />
            </div>
        
          
        </section>
        <section className='menu-header-desktop'>
          <div className='menu-header-desktop-grid'>
          <img src={logoDesktop} alt='icone da logo' />
          <div className='menu-header-desktop-grid-content'>
                    <input className='search-bar-input' placeholder='O Que Você Busca?'/>
                    <button className='search-bar-button'>Buscar</button>
          </div>
          <div className='grid-myaccont'>
            <img src={myAccont} alt='icone minha conta'/>
            <p>Minha Conta</p>
          </div>
          <div className='grid-myaccont'>
            <img src={favoritos} alt='icone dos favoritos'/>
            <p>Minha Conta</p>
          </div>
          <div className='grid-mycart'>
            <img src={sacolaDeskotp} alt='icone dos meus pedidos'/>
            <p>Meu Carrinho</p>
          </div>




          </div>
        
        </section>
        
      </header>
    );
  }
  
  export default Header;