import '../../assets/styles/Footer/style.scss'
import motiveLogo from '../../assets/images/logo/motive-zone-logo.png'
import FooterForm from './FooterForm'

export default function Footer(props: any) {
    interface VerticalItem {
        id: number;
        title: string;
    }

    interface VerticalList {
        id: number;
        title: string,
        data: VerticalItem[];
    }

    interface Icon {
        id: number;
        name: string;
        icon: string;
    }

    interface Policy {
        id: number;
        text: string;
    }

    const verticalListData: VerticalList[] = [
        {
            id: 0,
            title: 'Company',
            data: [
                { id: 0, title: 'About Us' },
                { id: 1, title: 'Portfolio' },
                { id: 2, title: 'Page' },
                { id: 3, title: 'FAQ' },
                { id: 4, title: 'Reviews' },
            ]
        },
        {
            id: 1,
            title: 'Support',
            data: [
                { id: 0, title: 'Contact Us' },
                { id: 1, title: 'Privacy policy' },
                { id: 2, title: 'Tram of use' },
                { id: 3, title: 'Buy &amp; Sell' },
                { id: 4, title: 'Reviews' },
            ]
        },
        {
            id: 2,
            title: 'Contact',
            data: [
                { id: 0, title: 'Madani Ave, usa 1212' },
                { id: 1, title: '+8802-55662000' },
                { id: 2, title: 'Email: www.uixzone12.com' },
                { id: 3, title: 'Buy &amp; Sell' },
                { id: 4, title: 'Reviews' },
            ]
        }

    ]

    const icons: Icon[] = [
        { id: 0, name: 'facebook', icon: 'fa fa-facebook' },
        { id: 1, name: 'twitter', icon: 'fa fa-twitter' },
        { id: 2, name: 'youtube', icon: 'fa fa-youtube-play' },
    ]

    const policyList: Policy[] = [
        { id: 0, text: 'Terms of Service' },
        { id: 1, text: 'Privacy Policy' },
        { id: 2, text: 'Security' }
    ]

    const verticalListEle: any = verticalListData
        .map((item: VerticalList, index: number) => {
            return (
                <ul className="footer__vertical-list" key={index}>
                    <li className="title">{item.title}</li>
                    {
                        item.data.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a href='/'>{item.title}</a>
                                </li>
                            )
                        })
                    }
                </ul>
            )
        })

    const iconsEle: any = icons.map((icon, index) => {
        return (
            <li className={icon.name} key={index}>
                <i className={icon.icon} />
            </li>
        )
    })

    const policiesEle: any = policyList.map((policy, index) => {
        return (
            <li className="footer-bottom__policy" key={index}>
                <a href='/' className="footer__bottom--text">
                    {policy.text}
                </a>
            </li>
        )
    })

    return (
        <footer>
            <div className="footer__main-content">
                <div className="footer__form-and-header--container">
                    <div className="footer-header">
                        <div className="footer-header__title">
                            <img src={motiveLogo} />
                            <span>uixzone</span>
                        </div>
                        <div>
                            <p className="footer-header__para">
                                On the other hand, we denounce with righteous
                                indignation and dislike men.
                            </p>
                        </div>
                    </div>
                    <FooterForm />
                </div>
                <div className="footer__vertical-list--container">
                    {verticalListEle}
                </div>
            </div>
            <div className="horizone-line" />
            <div className="footer__bottom">
                <ul>
                    {policiesEle}
                </ul>
                <ul className="icons-list">
                    {iconsEle}
                </ul>
                <span className="footer__bottom--text">© 2020
                <span className="highlight">MotiveZone</span>
                All rightsreserved.</span>
            </div>
        </footer>

    )
}
