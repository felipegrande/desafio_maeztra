import './styles.css';
import carta from '../../assets/img/newsletter-mail-icon.png';
import send from '../../assets/img/send.png';
import imageModal from '../../assets/img/imageModal.png'


function Modal({closeModal}) {
  
    return (
        <section className='modal-container' >

            <div className='modal-image'>
                <img src={imageModal} />

            </div>

            <div className='modal-content'>

                <p className='modal-close-buttom' onClick={() => closeModal()}>FECHAR</p>

                <div>
                    <div className='modal-content-env'>
                        <img className='modal-content-env' src={carta} alt='imagem de envelope' />
                    </div>
                    <p className='modal-content-welcome'>Bem Vindo à MAEZTRA</p>
                    <p className='modal-content-text'>Receba em Primeira mão <br /><b>
                        desconto e ofertas exclusivas</b></p>
                    <div className='modal-content-submit' >
                        <input placeholder='Digite seu email'></input>
                        <button onClick={() => closeModal()}><p>enviar</p><img src={send} alt='icone enviar' /></button>
                    </div>
                </div>
            </div>


        </section>
    );
}

export default Modal;