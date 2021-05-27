import React from 'react'
import '../../assets/styles/ProjectList/style.scss'
import lastestProject1 from '../../assets/images/projects/lastest-project-p1.png'
import lastestProject2 from '../../assets/images/projects/lastest-project-p2.png'
import lastestProject3 from '../../assets/images/projects/lastest-project-p3.png'
import ProjectItem from './ProjectItem'

export default function ProjectList(props:any) {
    interface ProjectItem{
        id: number;
        projectTitle:string;
        projectInfo:string;
        img: string;
    }

    const items: ProjectItem[] = [
        {
            id:0,
            projectTitle: 'Business &amp; corporate',
            projectInfo: 'Find fault with a man who chooses to enjoy a pleasure that has no annoying.',
            img: lastestProject1
        },
        {
            id:1,
            projectTitle: 'Food &amp; restaurant',
            projectInfo: 'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus.',
            img: lastestProject2
        },
        {
            id:2,
            projectTitle: 'Travel &amp; tourism',
            projectInfo: 'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus.',
            img: lastestProject3
        }
    ]

    const projectItemEle = items.map((item, index)=>{
        return(
            <ProjectItem key={index} data={item}/>
        )
    })
    return (
        <section className="projects-section--background">
            <div className="projects-section--container">
                <div className="projects-section__title">
                    <h3 className="global__title border-text-2">Our Latest Project</h3>
                    <p className="global__paragraph border-text-1">To take a trivial example, which of us ever undertakes laborious
                    physical
                    exercise, except to obtain some advantage But who has any right</p>
                </div>
                <div className="projects-section__list">
                    <ul>
                        {projectItemEle}
                    </ul>
                </div>
            </div>
        </section>

    )
}
