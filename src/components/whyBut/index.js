import React from 'react';
import './styles.css'
import tipbar01 from '../../assets/img/Tipbar01.png'
import tipbar02 from '../../assets/img/Tipbar02.png'
import tipbar03 from '../../assets/img/Tipbar03.png'
import tipbar04 from '../../assets/img/Tipbar04.png'
import tipbar05 from '../../assets/img/Tipbar05.png'

function WhyBuy() {

    const listBrands = [
        { imagem: tipbar05},
        {imagem: tipbar04},
        {imagem: tipbar03},
        {imagem: tipbar02},
        {imagem: tipbar01},
    ]
        
    

    return (
        <div className='brands-container'>
            <h3>Por que comprar na Maeztra?</h3>
            <div>
                
            </div>
            <div className='brands-container-img'>
            {
              listBrands.map((item, index) => 
                <img src={item.imagem} key={index}></img>
              ) 
    
            }

            </div>
       

           


        </div>
    );
}

export default WhyBuy;