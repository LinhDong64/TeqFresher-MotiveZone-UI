import motiveLogo from '../../assets/images/logo/motive-zone-logo.png'
import slashIcon from '../../assets/images/icons/slash-icon.png'
import { Link } from 'react-router-dom';

export default function NavBar(props: any) {

  const menuItemList: string[] = ['Home', 'Transaction', 'Our Work', 'About US',
    'Review', 'Contact US'];
  const menuEle = menuItemList.map((item, index) => {
    return (
      item === 'Home' ? <li key={index}>
        <Link to={{
          pathname: '/'
        }}>{item}</Link>
      </li> :
        <li key={index}>
          <Link to={{
            pathname: `/${item.toLowerCase()
              .replace(' ', '-')}`
          }}>{item}</Link>
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
