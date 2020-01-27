import React from 'react';
import './my-skills.css';


export default function MySkills({english}) {
    const array = [
        {id: 333, name: 'html', skill: 'Xорошо знаю - теги, семантика, ссылки, таблицы.', skill2: 'I know well - tags, semantics, links, tables.'},
        {id: 334, name: 'ccs', skill: 'Владею на хорошем уровне - флоэт, флексы, гриды, позиционирование, анимация, медиазапросы, отзывчивая и адаптивная верстка.', skill2: 'I know at a good level - float, flexs, grids, position, animation, media queries, responsive and adaptive layout.'},
        {id: 335, name: 'JavaScript', skill: 'Владею на уверенном уровне - понимаю основные концепции - замыкания, промисы, async await, prototypes, ECMAScript 2019.' ,skill2: 'I mastered at a confident level - I understand the basic concepts - closures, promises, async await, prototypes, ECMAScript 2019.'},
        {id: 336, name: 'sass', skill: 'Знаю на базовом уровне - вложения, переменные, миксины.', skill2: 'I know at the basic level - attachments, variables, mixins'},
        {id: 337, name: 'Bootstrap', skill: "Владею и использую в своих проектах.", skill2: 'I use Bootstrap in my projects'},
        {id: 338, name: 'Babel', skill: 'Без труда смогу скомпилировать нужные файлы.' , skill2: 'I can easily compile the necessary files.'}, 
        {id: 339, name: 'Webpack', skill: 'Умею настраивать. Активно не пользовался, поскольку писал приложения на реакте, где уже используется готовая сборка. ', skill2: 'I can customize. I didn’t actively use it because I wrote applications on the reactor, and there the ready assembly is already used'},
        {id: 440, name: 'React', skill: 'Xорошо знаю - классовые и функциональные компоненты, жизненный цикл компонентов, пропсы, стэйты.', skill2: 'I know well - class and functional components, the life cycle of components, props, state'},
        {id: 441, name: 'Redux', skill: 'На базовом уровне - createstore, экшены, экшенкриэйторы, диспатчи, миддлвэр.', skill2: 'At the base level - createstore, actions, actioncreators, dispatch, middleware.'},
        {id: 442, name: 'Git', skill: 'Знаю на базовом уровне - умею клонировать, "пулить, эддить, коммитить, пушить."', skill2: 'I know at a basic level - I can clone, pull, add, commit, push'},
        {id: 443, name: 'GitHub', skill: "Использую гитхаб как в качестве хостинга, так и в качестве репозитория.", skill2: 'I use githubs both as a hosting and as a repository.'},
        {id: 444, name: 'npm', skill: "Регулярно использую для загрузки модулей для реакт-приложений.", skill2: 'I regularly use for loading modules for react-app.'},
        {id: 445, name: 'AJAX', skill: "Владею методом fetch.", skill2: 'I use the fetch method.'},
        {id: 448, name: 'English language', skill: 'Уровень: intermediate.  ', skill2: "Level: intermediate. "}
    ]
    return (
        
        <div className = "my-skills p-5">
            <div className = "container">
                <div className  = 'row'>
    {array.map(el=> {
    
    return (
    <div key = {el.id} className  = 'col-12 col-md-4 col-lg-4 p-5 bg-danger ring-wrapper'>
    <div className = 'title'>{el.name}</div>
    <div className = 'text'>{english ? el.skill2 : el.skill}</div>  


    </div>)
    
    
    
    })}
                
                </div>
            </div>
        </div>
       
    )
}
