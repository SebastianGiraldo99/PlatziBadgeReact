import React from 'react';
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';
import header from '../images/header.jpg';
import './styles/BadgeNew.css';

class BadgeNew extends React.Component{
    render(){
        return <div>
            <Navbar />
            <div className="BadgeNew__hero">
                <img className="img_fluid" src={header} />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Badge firstName="Sebas" lastName="Giraldo" twitter="juanse_gg" jobTittle ="Frontend Developer" avatar="https://rrnoticias.mx/wp-content/uploads/2020/06/Avatar.jpg"/>
                    </div>
                </div>
            </div>
        </div>
    }
} 

export default BadgeNew; 