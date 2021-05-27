import React from 'react'
import '../../../assets/styles/ServiceList/item.service.css'

export default function ServiceItem(props) {
    return (
        <li>
            <div className="service-icon"><img src={props.data.img} /></div>
            <div className="service-content">
                <h3>{props.data.title}</h3>
                <p className="section-paragraph">{props.data.textContent}</p>
            </div>
            <a href='/'>Learn more →</a>
        </li>

    )
}
