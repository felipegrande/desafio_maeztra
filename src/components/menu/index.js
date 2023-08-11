import React from 'react';
import './styles.css'
import iconDress from '../../assets/img/icon-dress.png'



function Menu() {


    return (
        <div className='menu-container'>
            <div className='menu-container-icon'>
             <img src={iconDress}  alt='icone de vestido'/>
             <p className='menu-container-title_active'>Novidades</p>
            </div>
            <p className='menu-container-title'>Vestidos</p>
            <p className='menu-container-title'>Roupas</p>
            <p className='menu-container-title'>Sapatos</p>
            <p className='menu-container-title'>Lingerie</p>
            <p className='menu-container-title'>Acessórios</p>
            <p className='menu-container-title'>OUTLET</p>
       


        </div>
    );
}

export default Menu;