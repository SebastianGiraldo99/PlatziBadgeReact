// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';
//import Badge from './components/Badge';

import BadgeNew from './pages/BadgeNew';



const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<BadgeNew /*firsName = "Sebastian" lastName = "Giraldo" twitter = "juanse_gg" jobTittle = "Fronted developer" avatar ='https://rrnoticias.mx/wp-content/uploads/2020/06/Avatar.jpg'*//>, container);
