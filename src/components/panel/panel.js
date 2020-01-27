import React, { Component } from 'react';
import './panel.css';

export default class Panel extends Component {
    state = {
        active: false
    }
    movePanel = () => {
        this.setState({
            active: !this.state.active
        })
    }
    render() {
        const { active } = this.state;
        const {english} = this.props;
        const styleSidePanel = { right: active ? '0' : '-250px' };
        const styleSideWheel = { right: active ? '252px' : '2px' }
        const styleSideFas = { transform: active ? 'rotate(0deg)' : 'rotate(360deg)' }
        return (

            <div className="side-panel" style={styleSidePanel}>

                <div className="wheel"
                    onClick={this.movePanel}
                    style={styleSideWheel}
                    title = {english ? 'Mini-resume' : 'Мини-резюме'}
                >

                    <i className="fas fa-cog" style={styleSideFas}></i>

                </div>

                <div className="panel">
                    <div className="title p-1 ">{english ? 'Projects' : 'Проекты'}</div>

                    <a href='https://vodkamishka.github.io/bicycles-app-store/'
                      target="_ blank"
                      rel="noopener noreferrer">
                        <div className='frame'>
                        
                            <img src='https://vodkamishka.github.io/portfolio-deynega-andrey/images/bicycles-store.png' alt='bicycles' />
                            
                        </div>
                    
                    <div className='frame-text text-primary p-1'>{english ? 'React Redux Bicycles-for-sport Store' : 'Реакт Редакс Магазин Велосипедов'}</div>
                    </a>
                    <a href='https://vodkamishka.github.io/react-sportwear-app/'
                        target="_ blank"
                        rel="noopener noreferrer">
                        <div className='frame'>
                        
                            <img src='https://vodkamishka.github.io/portfolio-deynega-andrey/images/rashguards-store.png' alt='bicycles' />
                            
                        </div>
                   
                    <div className='frame-text  text-primary p-1'>{english ? 'React Context Sport-clothing Store' : 'Реакт Контекст Магазин Экипировки'}</div>
                    </a>
                    <a href='https://vodkamishka.github.io/spirit/'
                        target="_ blank"
                        rel="noopener noreferrer">
                        <div className='frame'>
                        
                        <img src='https://vodkamishka.github.io/portfolio-deynega-andrey/images/spirit.png' alt='spirit' />
                            
                        </div>
                   
                    <div className='frame-text  text-primary p-1'>{english ? 'Html Css JavaScript Relax Site' : 'Сайт для отдыха на ДжаваСкрипт'}</div>
                    </a>
                    <a href='https://vodkamishka.github.io/snake/'
                        target="_ blank"
                        rel="noopener noreferrer">
                        <div className='frame'>
                        
                            <img src='https://vodkamishka.github.io/portfolio-deynega-andrey/images/snake.png' alt='spirit' />
                            
                        </div>
                   
                    <div className='frame-text  text-primary p-1'>{english ? 'JavaScript Browser Game Snake' : 'Браузерная игра Змейка на ДжаваСкрипт'}</div>
                    </a>
                    <div className="title p-1 ">Контакты</div>
                    <div><i className="fas fa-mobile-alt"></i><span> +7 - 952 - 889 - 41 - 22</span></div>
                    <div><i className="fab fa-whatsapp"></i> <i className="fab fa-telegram-plane"></i><span> +7 - 952 - 896 - 62 - 76</span></div>
                    <div><i className="fas fa-envelope"></i><span> andrtomsk@narod.ru</span></div>
                   
                </div>

            </div>


        )
    }
}