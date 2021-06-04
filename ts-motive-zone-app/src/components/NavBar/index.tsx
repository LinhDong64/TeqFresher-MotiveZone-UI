import '../../assets/styles/Overview/nav.overview.scss'
import motiveLogo from '../../assets/images/logo/motive-zone-logo.png'
import slashIcon from '../../assets/images/icons/slash-icon.png'

export default function NavBar(props: any) {

    const menuItemList: string[] = ['Home', 'Our Work', 'About US',
        'Review', 'Contact US'];
    const menuEle = menuItemList.map((item, index) => {
        return (
            <li key={index}>
                <a href={'/' + item.toLowerCase()
                    .replace(' ', '-')}>{item}</a>
            </li>
        )
    });

    return (
        <nav className="navbar">
            <div className="navbar__logo-group">
                <img src={motiveLogo} alt="motive-zone-logo" />
                <span >MotiveZone</span>
            </div>
            <div className="navbar__menu">
                <ul>
                    {menuEle}
                </ul>
            </div>
            <div className="navbar__button">
                <button className="global__button">Say Hi</button>
            </div>
            <div className="navbar__slash-icon">
                <img src={slashIcon} />
            </div>
        </nav>
    )
}
