import React from 'react'
import '../../../assets/styles/ProjectList/item.project.css'

export default function ProjectItem(props) {


    return (
        <li>
            <div><img src={props.data.img}/></div>
            <div className="project-description-group">
                <span className="border-text-1">{props.data.projectTitle}</span>
                <p className="section-paragraph">{props.data.projectInfo}</p>
                <a href='/'>Learn more →</a>
            </div>
        </li>

    )
}
