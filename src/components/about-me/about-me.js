import React, { Fragment } from 'react';
import './about-me.css'
import AboutMeText from '../about-me-text';
import BigPhoto from '../big-photo';
import ScrollableAnchor from 'react-scrollable-anchor';


export default function About ({english}) {
        const styleRus = {
            opacity: english ? '0' : '1'
        }
        const styleEng = {
            opacity: english ? '1' : '0'
        }
        return (
            <Fragment>
            
            <div className = "about">
            
            <div className  = 'tape'>
            <ScrollableAnchor id={'about'}>
            <div className = 'tape-top1'></div>
            </ScrollableAnchor>
            <div className = 'tape-top2'></div>
            <div className  = 'tape-text'>
                <div className = 'text' style={styleRus}>Обо Мне</div>
                <div className = 'text' style={styleEng}>About Me</div>
            </div>
            <div className  = 'tape-line'></div>
            <div className = 'tape-bottom1'></div>
            <div className = 'tape-bottom2'></div>
            </div>

                <div className = 'container-fluid '>
                    <div className = "row">
                    <AboutMeText 
                    english = {english}
                    />
                    <BigPhoto />
                    </div>
                </div>
            </div>
           
            </Fragment>
        )
    }

