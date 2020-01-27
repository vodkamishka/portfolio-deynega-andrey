import React from 'react';
import './about-me-text.css';

export default function AboutMeText({ english }) {
    const rus = {
        opacity: english ? '0' : '1',
        position: english ? 'absolute' : 'static'
    }
    const eng = {
        opacity: english ? '1' : '0',
        position: english ? 'static' : 'absolute'
    }
    return (
        <div className=" col-12 col-md-6 col-lg-6 pl-5 pt-5  about-me-text-wrapper">
            <div className='about-me-text'>
                <div className='text p-5' style={rus}>
                    <p> Я - Дейнега Андрей, а это мое  портфолио.</p>
                    <p> Ниже представлены перечень моих навыков и проекты.</p>
                    <p> Образование высшее техническое.</p>
                    <p> Приоритет в работе - стремление к совершенству.</p>
                    <p> Желаемая должность - фронтенд-разработчик.</p>
                </div>
                <div className='text p-5' style={eng}>
                    <p> I'm Deinega Andrew, and this is my portfolio. </ p>
                    <p> Below is a list of my skills and recent projects. </ p>
                    <p> Higher technical education. </ p>
                    <p> Priority in the work - the pursuit of excellence. </ p>
                    <p> The desired position is a front-end developer. </ p>
                </div>
            </div>
        </div>
    )
}
