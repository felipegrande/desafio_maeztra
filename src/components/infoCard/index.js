import React from 'react';
import './styles.css'
import bannerMobile from '../../assets/img/banner-infoCard-mobile.png'
import bannerdesktop from '../../assets/img/banner-infoCard-desktop.png'


function InfoCard() {


    return (
        <div className='infoCard'>
            <div className='infoCard-content'>
                <h2>Lorem ipsum </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim dictum. Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris integer. Nibh sagittis in lobortis sed cursus condimentum velit pharetra. Amet luctus ut vulputate scelerisque .</p>
            </div>
            <div className='infoCard-img'>
                <figure>
                    <picture>
                        <source media="(min-width: 1200px)" srcset={bannerdesktop} sizes="100vw" />
                        <source srcset={bannerMobile} sizes="100vw" /><img src={bannerMobile}  />
                    </picture>
                </figure>



            </div>


        </div>
    );
}

export default InfoCard;