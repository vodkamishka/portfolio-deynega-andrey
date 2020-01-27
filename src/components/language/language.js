import React from 'react';
import './language.css';



export default function Language ({changedLanguage, english}) {
    
    const styleFlag = {
        backgroundImage: english ?  "url('https://vodkamishka.github.io/portfolio-deynega-andrey/images/english.png')" : "url('https://vodkamishka.github.io/portfolio-deynega-andrey/images/russian.jpg')"
    }
    return (
      
        
        <div className="flag"
        onClick = {changedLanguage}
        style={styleFlag}
        title = {english ? 'Change interface language' : 'Изменить язык интерфейса'}
        >
           
        </div>
        
    )
}
