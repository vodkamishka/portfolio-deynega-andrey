import React, { Component } from 'react';
import './my-works.css';
import { TweenMax } from 'gsap';
import ScrollableAnchor from 'react-scrollable-anchor';

export default class MyWorks extends Component {

    changedCoverOpacity = (id) => {
        TweenMax.to(
            ".cover" + id,
            0.2,
            {
                width: '100%',
                opacity: 0.9
            }
        )
        TweenMax.to(
            ".cover-text"+id,
            0.2,
            {
                opacity: 0.9
            }
        )
    }

    removedCoverOpacity = (id) => {
        TweenMax.to(
            ".cover" + id,
            0.2,
            {
                width: 0,
                opacity: 0
            }
        )
        TweenMax.to(
            ".cover-text"+id,
            0.2,
            {
                opacity: 0
            }
        )
    }

    render() {
        const { english } = this.props;
        const styleRus = {
            opacity: english ? '0' : '1',
            position: english ? 'absolute' : 'static'
        }
        const styleEng = {
            opacity: english ? '1' : '0',
            position: english ? 'static' : 'absolute'
        }
        const styleTextRus = {
            display: english ? 'none' : 'block',
            position: english ? 'absolute' : 'static'
        }
        const styleTextEng = {
            display: english ? 'block' : 'none',
            position: english ? 'static' : 'absolute'
        }
        const rus = {
            opacity: english ? '0' : '1'
        }
        const eng = {
            opacity: english ? '1' : '0'
        }
        const image = (id,pic,link, titleRus, titleEng, textRus, textEng) => {
            return (
                <div className='col-12 col-md-6 col-lg-6 works-left p-0' >

                            <div className='image'
                                onMouseMove={() => this.changedCoverOpacity(id)}
                                onMouseLeave={() => this.removedCoverOpacity(id)}>
                                <img src = {pic}  alt='pic' />
                                <a href={link}
                                    target="_ blank"
                                    rel="noopener noreferrer">
                                    <div className={'cover' + id}>
                                        <div className={'cover-text'+ id} style={styleTextRus}>{titleRus}</div>
                                        <div className={'cover-text' + id} style={styleTextEng}>{titleEng}</div>
                                    </div>
                                </a>
                            </div>
                            <div className='text-wrapper'>
                                <div className="text p-5"
                                    style={styleRus}
                                >
                                    {textRus}
                                </div>
                                <div className="text p-5"
                                    style={styleEng}
                                >
                                    {textEng}
                                </div>
                            </div>

                        </div>
            )
    }
    return(
            <ScrollableAnchor id = { 'projects'} >
            <div className='my-works'>
                <div className='container-fluid '>
                    <div className="row">
                        <div className="works-top1"></div>
                        <div className="works-top2">
                            <div className='works-text'>
                                <div className='text' style={rus}> Проекты</div>
                                <div className='text' style={eng}> Projects</div>
                            </div>
                        </div>
                        <div className="works-top3"></div>
                        <div className="works-top4"></div>
                    </div>
                    <div className='row'>
                        {image(
                            1,
                            'https://vodkamishka.github.io/portfolio-deynega-andrey/images/bicycles-store.png',
                            'https://vodkamishka.github.io/bicycles-app-store/',
                            `Реакт Редакс`,
                            `React Redux`,
                            `Учебный проект. Фронтенд-разработка онлайн-магазина по продаже велосипедов. Для реализации сайта использован - Реакт и библиотека Редакс - для передачи данных.`,
                            `Training project. Front-end development of an online-bicycles-store. The Javascript framework - React and the Redux library - for data transfer were used to implement the site.`
                            )
                        }
                        {image(
                            2,
                            'https://vodkamishka.github.io/portfolio-deynega-andrey/images/rashguards-store.png',
                            'https://vodkamishka.github.io/react-sportwear-app/',
                            `Реакт Контекст`,
                            `React Context`,
                            `Заготовка онлайн-стора спортивной компрессионной одежды. Для манипуляции данными применялся Реакт Контекст, для работы с вертуальным DOM-ом - Реакт.`,
                            `Procurement online-store sports compression clothing. React Context was used for data manipulation, for working with the verbal DOM - React.`
                            )
                        }
                    </div>
                    <div className='row'>
                        {image(
                            3,
                            'https://vodkamishka.github.io/portfolio-deynega-andrey/images/spirit.png',
                            'https://vodkamishka.github.io/spirit/',
                            `ДжаваСкрипт`,
                            `JavaScript`,
                            `Попытка реализации своей версии приложения Calm. Базовый слой сайта сверстан с использованием html и css.  Для перехода между страницами и функционирования меню применялся JavaScript.`,
                            `Attempt to implement its version of the application Calm. Made the base layer of the site using html and css. To navigate between the pages and the functioning menu applied JavaScript.`
                            )
                        }
                        {image(
                            4,
                            'https://vodkamishka.github.io/portfolio-deynega-andrey/images/snake.png',
                            'https://vodkamishka.github.io/snake/',
                            `ДжаваСкрипт`,
                            `JavaScript`,
                            `Учебный проект. Браузерная игра Змейка.`,
                            `
                            Training project. Browser game Snake.`
                            )
                        }
                        
                    </div>
                </div>
            </div>
            </ScrollableAnchor>
        )
    }
}
