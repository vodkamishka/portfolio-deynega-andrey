import React, { Component, Fragment } from 'react';
import {TweenMax} from 'gsap';

import Home from '../home';
import Modal from '../modal';
import LeftPanel from '../left-panel';
import Block from '../block';
import About from '../about-me';
import MyWorks from '../my-works';
import MyContacts from '../my-contacts';
import Skills from '../skills';
import Toggle from '../toggle';
import Panel from '../panel/panel';

export default class App extends Component {
    componentDidMount () {
        
        TweenMax.to(
            ".block",
            1, {
                right: '0',
            }
        )
        TweenMax.to(
            ".sign",
            1, {
                opacity: '1',
                delay: 1.5
            }
        )
        TweenMax.to(
            ".flag",
            1, {
                opacity: '1',
                delay: 1.6
            }
        )
        TweenMax.to(
            ".wheel",
            1, {
                transform: 'translateX(0)',
                delay: 2
            }
        )
        TweenMax.to(
            ".block > .social > a ",
            1, {
                opacity: '1',
                delay: 2.5
            }
        )
    }
    state = {
        ModalOpen: false,
        toggle: false,
        english: false,
        minus: false,
        background: '#292923'
    }
    onToggle = () => {
        this.setState({
            toggle: !this.state.toggle
        })
    }
    onModal = () => {
        this.setState({
            ModalOpen: !this.state.ModalOpen
        })
    }
    changedLanguage = () => {
        this.setState({
            english: !this.state.english
        })
    }
    changedSign = () => {
        this.setState({
            minus: !this.state.minus
        })
    }
    changedColor = (color) => {
        this.setState({
            background: color
        })
    }
    render() {
        const { ModalOpen, toggle, english, minus, background } = this.state

        return (
            <Fragment>
                
                
                <LeftPanel 
                minus={minus}
                background={background}
                changedColor={this.changedColor}
                english={english}
                />
                <Toggle
                    toggle={toggle}
                    onToggle={this.onToggle}
                    onModal={this.onModal}
                    english={english}
                />
                <Panel english={english}/>
                <Block 
                english = { english } 
                background = { background }
                toggle = { toggle }
                onToggle = { this.onToggle }
                onModal = { this.onModal }
                changedLanguage={this.changedLanguage}
                minus={minus}
                changedSign={this.changedSign}
                />
            { ModalOpen ? <Modal 
            english={english}
            onModal={this.onModal}
            onToggle={this.onToggle}
            />  :
            <div>
            <Home english ={english}/>
           
            <About 
            english = {english} 
            />
            
            <Skills english = {english} />
            <MyWorks english = {english}/>
            <MyContacts english = {english}/>
            </div>
            
        }  
            
            </Fragment>
        )
    }
}