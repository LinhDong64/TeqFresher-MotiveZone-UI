import React from 'react'
import '../../../assets/styles/ServiceList/item.service.scss'

export default function ServiceItem(props:any) {
    return (
        <li>
            <div className="service-item__icon"><img src={props.data.img} /></div>
            <div className="service-item__content">
                <h3>{props.data.title}</h3>
                <p>{props.data.textContent}</p>
            </div>
            <a href='/'>Learn more →</a>
        </li>

    )
}
