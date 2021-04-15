import React from 'react';
import logo from '../images/city_lights.jpg';
import './styles/Navbar.css'
class Navbar extends React.Component{
    render(){
        return (
        <div className="Navbar">
            <div className="container-fluid">
            <a className="Navbar__brand" href="/">
                <img className="Navbar__brand-logo" src={logo}></img>   
                <span className="font-weight-light">Platzi</span>
                <span className="font-weight-bold">Conf</span>
            </a>
            </div>
        </div>
        )
    }
} 

export default Navbar; 