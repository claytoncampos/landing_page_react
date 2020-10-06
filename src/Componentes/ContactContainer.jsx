import React from 'react'

export default function ContactContainer() {
    return (
        <div className='contact-container bg-grey'>
            <span className="div-title">Contact us</span>
            <div className='contact-form'>
                <div id='sect1'>
                    <span>Contact us and we will get back to you within 24 hours.</span>
                    <span>
                        <i className="fas fa-map-marker-alt"></i>
                      Kampala Uganda
                  </span>
                    <span>
                        <i className="fas fa-mobile-alt"></i>
                      11-9999 99999
                  </span>
                    <span>
                        <i className="far fa-envelope"></i>
                      company@gmail.com
                  </span>
                </div>

                <div id='sect2'>
                    <span>
                        Contato
                  </span>

                    <input type="text" placeholder="email" className="input-field" />
                    <textarea name="" id="" cols="30" rows="10" placeholder="sua mensagem"></textarea>
                    <button className="contact-btn">Enviar</button>
                </div>
            </div>
        </div>
    );

}