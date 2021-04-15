import React from 'react';

import confLogo from '../images/city_lights.jpg';
import avatar from '../images/me.jpg';
import "./styles/Badge.css";

class Badge extends React.Component{
    render(){
        return <div className="Badge">
            <div className="Badge__header">
                <img src={confLogo} alt=""></img>
            </div>
            <div className="Badge__section-name"> 
                <img className="Badge__avatar" src={this.props.avatar}alt=""></img>
                <h1>{this.props.firstName} <br/>{this.props.lastName}</h1>
            </div>
            <div className="Badge__section-info">
                <h3>{this.props.jobTittle}</h3>
                <div>@{this.props.twitter}</div>
            </div>
            <div className="Badge__footer">
                #platziConf 
            </div>
        </div>
    }
}
export default Badge;