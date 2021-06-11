export default function ProjectItem(props: any) {

    return (
        <li>
            <div><img src={props.data.img} /></div>
            <div className="project__description">
                <span className="border-text-1">{props.data.projectTitle}</span>
                <p className="global__paragraph">{props.data.projectInfo}</p>
                <a href='/'>Learn more →</a>
            </div>
        </li>

    )
}
