import React from 'react';
import './my-skills.css';


export default function MySkills({english}) {
    const array = [
        {id: 1, name: 'html', skill: 'Xорошо знаю - теги, семантика, ссылки, таблицы.', skill2: 'I know well - tags, semantics, links, tables.'},
        {id: 2, name: 'ccs', skill: 'Владею на хорошем уровне - флоэт, флексы, гриды, позиционирование, анимация, медиазапросы, отзывчивая и адаптивная верстка.', skill2: 'I know at a good level - float, flexs, grids, position, animation, media queries, responsive and adaptive layout.'},
        {id: 3, name: 'JavaScript', skill: 'Владею на уверенном уровне - писал приложения, понимаю основные концепции - замыкания, промисы, async await, prototypes, ECMAScript 2019.' ,skill2: 'I mastered at a confident level - I understand the basic concepts - closures, promises, async await, prototypes, ECMAScript 2019.'},
        {id: 4, name: 'scss', skill: 'Применял при написании проектов.', skill2: 'I know at the basic level - attachments, variables, mixins'},
        {id: 5, name: 'pug', skill: "Использовал данный шаблонизатор при верстке макетов.", skill2: 'I used Bootstrap in my projects'},
        {id: 6, name: 'babel', skill: '' , skill2: 'I can easily compile the necessary files.'}, 
        {id: 7, name: 'Webpack', skill: 'Умею настраивать. Активно использую. ', skill2: 'I can customize. I didn’t actively use it because I wrote applications on the reactor, and there the ready assembly is already used'},
        {id: 8, name: 'React', skill: 'Xорошо знаю - классовые и функциональные компоненты, жизненный цикл компонентов, пропсы, стэйты.', skill2: 'I know well - class and functional components, the life cycle of components, props, state'},
        {id: 9, name: 'Redux', skill: 'На базовом уровне - createstore, экшены, экшенкриэйторы, диспатчи, миддлвэр.', skill2: 'At the base level - createstore, actions, actioncreators, dispatch, middleware.'},
        {id: 10, name: 'Git', skill: 'Знаю на базовом уровне - умею клонировать, "пулить, эддить, коммитить, пушить."', skill2: 'I know at a basic level - I can clone, pull, add, commit, push'},
        {id: 11, name: 'GitHub', skill: "Использую гитхаб как в качестве репозитория, так и для деплоя проектов.", skill2: 'I use githubs both as a hosting and as a repository.'},
        {id: 12, name: 'npm', skill: "Регулярно использую для загрузки модулей для реакт-приложений, настройки вебпака.", skill2: 'I regularly use for loading modules for react-app.'},
        {id: 13, name: 'AJAX', skill: "Владею методами fetch, axios", skill2: 'I use the fetch method, axios'},
        {id: 14, name: 'English pre-intermediate', skill: 'Уровень: pre-intermediate.  ', skill2: "Level: pre-intermediate."},
        {id: 15, name: 'BEM', skill: 'Знаю основные концепции (блок, элемент, модификатор, миксин). Применял компонентный подход на практике при верстке.', skill2: "I know the basic concepts (block, element, modifier, mixin). Used component approach in practice in layout."}
    ]
    return (
        
        <div className = "my-skills p-5">
            <div className = "container">
                <div className  = 'row'>
    {array.map(el=> {
    
    return (
    <div key = {el.id} className  = 'col-12 col-md-4 col-lg-4 p-5 bg-info ring-wrapper'>
    <div className = 'title'>{el.name}</div>
    </div>)
    
    
    
    })}
                
                </div>
            </div>
        </div>
       
    )
}
