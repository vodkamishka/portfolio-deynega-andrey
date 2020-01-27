import React, {Component} from 'react';
import './modal.css';
import { TweenMax } from 'gsap';
import { Link } from 'react-router-dom';




export default class Modal extends Component {

    componentDidMount () {
        TweenMax.to(
            ".modal-left",
            1, {
                width: '50%'
            }
        )
        TweenMax.to(
            ".modal-top",
            1, {
                height: '100%',
                delay: 1
            }
        )
        TweenMax.to(
            ".modal ul li:nth-child(1)",
            0.1, {
                opacity:1,
                y: 0,
                delay: 2
            }
        )
        TweenMax.to(
            ".modal ul li:nth-child(2)",
            0.1, {
                opacity:1,
                y: 0,
                delay: 2.1
            }
        )
        TweenMax.to(
            ".modal ul li:nth-child(3)",
            0.1, {
                opacity:1,
                y: 0,
                delay: 2.2
            }
        )
        TweenMax.to(
            ".modal ul li:nth-child(4)",
            0.1, {
                opacity:1,
                y: 0,
                delay: 2.3
            }
        )
        TweenMax.to(
            ".modal ul li:nth-child(5)",
            0.1, {
                opacity:1,
                y: 0,
                delay: 2.4
            }
        )
       
    }
    render() {
        const {english, onModal, onToggle} = this.props;
       
        const array = [
            {id: 899, rus: 'Главная', eng: 'Home', link: '/'},
            {id: 899, rus: 'Обо мне', eng: 'About me', link: '#about'},
            {id: 899, rus: 'Навыки', eng: 'Skill', link: '#skill'},
            {id: 899, rus: 'Проекты', eng: 'Projects', link: '#projects'},
            {id: 899, rus: 'Контакты', eng: 'Contact', link: '#contact'},
        ]
        
    return (
        <div className='modal'>
            <div className='modal-left'></div>
            <div className='modal-top'>
         
                 <ul>
                   {array.map(el => <li
                   onClick = {
                       () => {
                           onToggle()
                           onModal()
                   }}
                   >
                       <Link to = {el.link}>
                   {english ? el.eng : el.rus}
                   </Link>
                   </li>
                  
                   )}
                </ul>
                
                
            </div>
        </div>
    )
}
}