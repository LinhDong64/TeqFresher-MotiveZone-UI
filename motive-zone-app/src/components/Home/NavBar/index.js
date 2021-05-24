import React from 'react'
import './style.css'
import motiveLogo from '../../../assets/images/logo/motive-zone-logo.png'
import slashIcon from '../../../assets/images/icons/slash-icon.png'

export default function NavBar(props) {

    const menuItemList = ['Home', 'Our Work', 'About US', 'Review', 'Contact US']
    const menuEle = menuItemList.map((item, index) => {
        return (
            <li key={index}><a href={'/'+ item.toLowerCase().replace(' ', '-')}>{item}</a></li>
        )
    })

    return (
        <nav className="nav-bar">
            <div className="logo-group">
                <img src={motiveLogo} alt="motive-zone-logo" />
                <span className="text">MotiveZone</span>
            </div>
            <div className="navbar-menu">
                <ul className="menu">
                    {menuEle}
                </ul>
            </div>
            <div>
                <button className="global-button nav-bar-button">Say Hi</button>
            </div>
            <div className="slash-icon">
                <img src={slashIcon} />
            </div>
        </nav>
    )
}
