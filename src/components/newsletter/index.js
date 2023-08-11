import React from 'react';
import  './styles.css'

function Newsletter() {
    return (
      <div className='newsletter'> 
        <h2 className='newsletter-title'>Recebe Nossa Newsletter</h2>
        <div className='newsletter-input-grid'>
            <input className='newsletter-input'  placeholder='Digite seu e-mail'/>
            <button  className='newsletter-button'>Enviar</button>
          </div>
      </div>
    );
  }
  
  export default Newsletter;