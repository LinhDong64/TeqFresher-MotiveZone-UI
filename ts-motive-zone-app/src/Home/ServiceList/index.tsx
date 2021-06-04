import ServiceItem from './ServiceItem'
import serviceIcon1 from '../../assets/images/icons/service-icon-1.png'
import serviceIcon2 from '../../assets/images/icons/service-icon-2.png'
import serviceIcon3 from '../../assets/images/icons/service-icon-3.png'
import '../../assets/styles/ServiceList/style.scss'

export default function ServiceList(props: any) {
    interface ServiceItem {
        id: number;
        img: string;
        title: string;
        textContent: string;
    }

    const items: ServiceItem[] = [
        {
            id: 0,
            img: serviceIcon1,
            title: 'Web Design',
            textContent: `Shrinking from toil and pain. These cases 
            are perfectly simple and easy to distinguish. In a free 
            hour, when our power.`
        },
        {
            id: 1,
            img: serviceIcon2,
            title: 'UI/UX Design',
            textContent: `When nothing prevents our being able to do
             what we like best, every pleasure is to be welcomed and 
             every pain avoided.`
        },
        {
            id: 2,
            img: serviceIcon3,
            title: 'Graphic Design',
            textContent: `But in certain circumstances and owing to the 
            claims of duty or the obligations of business it will frequently 
            occur.`
        },
    ]

    const serviceListEle = items.map((item, index) => {
        return (
            <ServiceItem key={index} data={item} />
        )
    });

    return (
        <section className='service-site'>
            <div className="service__title">
                <h3 className="global__title">Our Services</h3>
                <p className="global__paragraph">That are bound to ensue; and
                equal blame belongs to those who fail in their duty through
                    weakness of will, which is the same as saying through</p>
            </div>
            <div className="services__list">
                <ul>
                    {serviceListEle}
                </ul>
            </div>
        </section>
    )
}
