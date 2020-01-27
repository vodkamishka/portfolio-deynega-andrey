import React from 'react';
import './skills.css';
import MySkills from '../my-skills';
import ScrollableAnchor from 'react-scrollable-anchor';

export default function Skills({english}) {
    const styleRus = {
        opacity: english ? '0' : '1',
    }
    const styleEng = {
        opacity: english ? '1' : '0',
    }
    return (
        <div className = 'skills'>
            <ScrollableAnchor id={'skill'}>
            <div className = 'skills-top1'></div>
            </ScrollableAnchor>
            <div className = 'skills-top-text'>
                <div className = 'text' style = {styleRus}>Навыки</div>
                <div className = 'text' style = {styleEng}>Skill</div>
            </div>
            <div className = 'skills-top2'></div>
            <MySkills english = {english}/>
            
        </div>
    )
}
