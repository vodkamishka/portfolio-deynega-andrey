import React, { Component, Fragment } from 'react';
import './left-panel.css';

export default class LeftPanel extends Component {

    state = {
        colors: []
    }
    
    componentDidMount() {
        this.changedFiveColorsCircles();
    }

    changedFiveColorsCircles = () => {

        let createColor = () => {
            return '#' + (Math.random()*0xFFFFFF<<0).toString(16);
        }
        let colors = [
            {color: '#292923', id: 1},
            {color: createColor(), id: 2},
        ]
        this.setState({
            colors: colors
        })
    }


    render() {
        const { minus, background, changedColor, english } = this.props;
        let { colors } = this.state;
        const styleLeftPanel = {
            left: minus ? '0' : '-250px',
        }
        const styleContentRus = {
            background: background,
            opacity: english ? '0' : '1'
        }
        const styleContentEng = {
            left: minus ? '0' : '-250px',
            background: background,
            opacity: english ? '1' : '0'
        } 
        
        return (
            <div className="left-panel"
            style ={styleLeftPanel}
            >
                <div className = "content"
                style={styleContentRus}>
                <div className = "title" >Нажмите на второй круг для смены цвета панели </div>

                {colors.map(el => {
                    return (
                        <Fragment  key={el.id}>
                            <div className='circle'
                                style={{ background: el.color }}
                                onClick={
                                    () => {
                                        changedColor(el.color)
                                    }
                                }
                            ></div>
                            <div>Цвет: {el.color}</div>
                        </Fragment>
                    )
                }
                )}
                <div className='button'
                onClick = {this.changedFiveColorsCircles}
                >Сгенерировать новый цвет</div>
                </div>

                <div className = "content"
                style={styleContentEng}>
                <div className = "title" >Click on second circle to change the color of the panel. </div>

                {colors.map(el => {
                    return (
                        <Fragment key={el.id+1111}>
                            <div className='circle'
                                key={el.id}
                                style={{ background: el.color }}
                                onClick={
                                    () => {
                                        changedColor(el.color)
                                    }
                                }
                            ></div>
                            <div>Color: {el.color}</div>
                        </Fragment>
                    )
                }
                )}
                <div className='button'
                onClick = {this.changedFiveColorsCircles}
                >Generate new color</div>
                </div>
                </div>
        )
    }
}
