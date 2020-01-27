import React, { Component } from 'react';
import './block.css';
import Language from '../language/language';
import Sign from '../sign';

export default class Block extends Component {
    render() {
        const { english, background, changedLanguage, minus, changedSign } = this.props;
        const styleRus = {
            opacity: english ? '0' : '1'
        }
        const styleEng = {
            opacity: english ? '1' : '0'
        }
        const styleBlock = {
            background: background
        }
        return (
            <div className="block" style={styleBlock}>

                <Sign
                    minus={minus}
                    changedSign={changedSign}
                    english={english}
                />
                <Language
                    english={english}
                    changedLanguage={changedLanguage}
                />
            
                <div className="text" style={styleRus}>Дейнега Андрей</div>
                <div className="text" style={styleEng}>Deynega Andrey</div>

                <div className='social'>
                <a href='https://www.facebook.com/andrey.deynega'
                                    target="_ blank"
                                    rel="noopener noreferrer">
                <i className="fab fa-facebook-square"></i></a>

                <a href='https://github.com/Vodkamishka'
                                    target="_ blank"
                                    rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                </a>
                <a href='https://www.linkedin.com/in/deynega-andrey/'
                                        target="_ blank"
                                        rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
                </a>
                </div>
            </div>
        )
    }
}