import React from 'react';
import './styles.css'
import brandforever from '../../assets/img/brand_forever.png'
import brandAnn from '../../assets/img/brand_ann.png'
import cooma from '../../assets/img/brand_cooma.png'
import melissa from '../../assets/img/brand_melissa.png'
import zara from '../../assets/img/brand_zara.png'

function Brands() {

    const listBrands = [
        {imagem: cooma},
        {imagem: melissa},
        { imagem: brandforever},
        {imagem: zara},
        {imagem: brandAnn},
    ]
        
    

    return (
        <div className='brands-container'>
            <h2>Marcas Parceiras</h2>
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

export default Brands;