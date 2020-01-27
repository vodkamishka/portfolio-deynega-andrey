import React, {Component} from 'react';
import './home.css';


export default class Home extends Component {
    
    render() {
    const { english} = this.props;
    const styleRus = {
        opacity : english ? '0' : '1'
    }
    const styleEng = {
        opacity : english ? '1' : '0'
    }
    return (
        <div className='home'>
           <div className= "content">
            <div className = 'home-title'
            style = { styleRus }
            >
                <p>Дейнега Андрей</p>
                <p>Фронтенд. Реакт. Редакс.</p>
            </div>

            <div className = 'home-title'
             style = { styleEng }
            >
                <p>Deynega Andrey</p>
                <p>Frontend. React. Redux.</p>
            </div>

        </div>
        </div>
    )
}
}