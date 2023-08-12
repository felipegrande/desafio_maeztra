
import React from 'react';
import './styles.css'



function Card({name, value ,description, img, color}) {

    return (
        <section className='card_container'>
            <img className='card_img' src={img} />
            <div className='card_content'>
                <div className='card_list_colors'>
                    {
                        color.map((item, index) => 
                        <span key={index}  className={`card_list_colors_item ${item} ${index === 0 ? "active" : "" }`}></span> 
                      ) 
                    } 
                </div>
                <span className='card_price'>{value}</span>
                <span className='card_title'>{name}</span>
                <span className='card_description'>{description}</span>
                <button className='card_submit'>Adicionar</button>
            </div>
            
        </section>
    );
}
export default Card;