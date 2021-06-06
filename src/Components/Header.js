import React from 'react';
import '../style.scss';
import logo from "../images/logo.png";

export default function Header() {
    return (
        <div className="header">
           <h1><img src={logo} alt="Space-X Logo" width='300'/></h1> 
        </div>
    )
}
