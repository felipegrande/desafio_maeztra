import React from 'react';
import './styles.css'
import Card from './card';
import img from '../../assets/img/vesti1.png'
import img2 from '../../assets/img/vesti2.png'
import leftArrow from '../../assets/img/icon-prev.png'
import rigthArrow from '../../assets/img/icon-next.png'


function Shelf() {

     let  colors =  [
        "orange", "red", "lightBlue", "darkBlue"
    ]
     let  colors2 =  [
        "black", "darkRed", "beige", "lightGray"
    ]



    return (
        <section className='shelf'>
            <h2>As Mais Pedidas</h2>
            <div className='shelf-container'>
                <img src={leftArrow} alt='seta do lado direito da vitrini' className='shelf-container-left-arrow'/> 
                
                <Card 
                    color={colors}
                    img={img}
                    name="Faux Suede Mini Skirt"  
                    value="R$ 500,00" 
                    description="A faux suede mini skirt featuring exposed button-front closures and panel seam construction."/>
                <Card  
                    color={colors2}
                    img={img2}
                    name="Ruched Rose Print Mini Skirt" 
                    value="R$ 320,00"
                    description="A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem." />
                <Card  
                    color={colors}
                    img={img}
                    name="Faux Suede Mini Skirt" 
                    value="R$ 500,00" 
                    description="A faux suede mini skirt featuring exposed button-front closures and panel seam construction."/>
                <Card 
                    color={colors2}
                    img={img2}
                    name="Ruched Rose Print Mini Skirt" 
                    value="R$ 320,00"
                    description="A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem." />
                <Card 
                    color={colors}
                    img={img}
                    name="Faux Suede Mini Skirt" 
                    value="R$ 500,00" 
                    description="A faux suede mini skirt featuring exposed button-front closures and panel seam construction." />
                <img src={rigthArrow} alt='seta do lado esquerdo da vitrini' className='shelf-container-rigth-arrow'/> 
            </div>
        </section>
    );
}

export default Shelf;