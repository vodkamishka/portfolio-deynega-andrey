import React from 'react';
import './my-contacts.css';
import ScrollableAnchor from 'react-scrollable-anchor';

export default function MyContacts({ english }) {
    const styleRus = {
        opacity: english ? '0' : '1',
        fontFamily: english ? 'Fira Sans' : 'PT Serif'
    }
    const styleEng = {
        opacity: english ? '1' : '0',
        fontFamily: english ? 'PT Serif' : 'Fira Sans'
    }
    return (
        <div className='my-contacts'>
            <ScrollableAnchor id={'contact'}>
            <div className  = "wrapper-top"></div>
            </ScrollableAnchor>
            <div className="wrapper">
                <div className="title" style={styleRus}>
                    Мои контакты
                </div>
                <div className="title" style={styleEng}>
                    My contacts
                </div>
               
            </div>

            <div className  = "wrapper-bottom"></div>
            <div className = 'contacts p-3'>
            
                <div className = 'contacts-text p-4'>
                    
                <div><i className="fas fa-mobile-alt"></i><span> +7 - 952 - 889 - 41 - 22</span></div>
              
                <div><i className="fab fa-whatsapp"></i> <i className="fab fa-telegram-plane"></i><span> +7 - 952 - 896 - 62 - 76</span></div>

                <a href='https://www.linkedin.com/in/deynega-andrey/'
                                        target="_ blank"
                                        rel="noopener noreferrer">
                <div><i className="fab fa-linkedin"></i><span className = "linkedin"> https://www.linkedin.com/in/deynega-andrey/</span></div>
                </a>
                           
                <div><i className="fas fa-envelope"></i><span> andrtomsk@narod.ru</span></div>
                
                
                
                </div>
            </div>
        </div>
    )
}
