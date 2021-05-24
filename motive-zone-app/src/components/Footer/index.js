import React from 'react'
import './style.css'
import motiveLogo from '../../assets/images/logo/motive-zone-logo.png'
import FooterForm from './FooterForm'

export default function Footer(props) {
    const verticalListData = [
        {
            id: 0,
            title:'Company',
            data:[
                {id: 0,title: 'About Us'},
                {id: 1,title: 'Portfolio'},
                {id: 2,title: 'Page'},
                {id: 3,title: 'FAQ'},
                {id: 4,title: 'Reviews'},
            ]
        },
        {
            id: 1,
            title:'Support',
            data:[
                {id: 0,title: 'Contact Us'},
                {id: 1,title: 'Privacy policy'},
                {id: 2,title: 'Tram of use'},
                {id: 3,title: 'Buy &amp; Sell'},
                {id: 4,title: 'Reviews'},
            ]
        },
        {
            id: 2,
            title:'Contact',
            data:[
                {id: 0,title: 'Madani Ave, usa 1212'},
                {id: 1,title: '+8802-55662000'},
                {id: 2,title: 'Email: www.uixzone12.com'},
                {id: 3,title: 'Buy &amp; Sell'},
                {id: 4,title: 'Reviews'},
            ]
        }
        
    ]

    const icons=[
        {id: 0, name: 'facebook', icon: 'fa fa-facebook'},
        {id: 1, name: 'twitter', icon: 'fa fa-twitter'},
        {id: 2, name: 'youtube', icon: 'fa fa-youtube-play'},
    ]

    const policyList = [
        {id: 0, text: 'Terms of Service'},
        {id: 1, text: 'Privacy Policy'},
        {id: 2, text: 'Security'}
    ]

    const verticalListEle = verticalListData.map((item, index)=>{
        return (
            <ul className="footer-vertical-list" key={index}>
                <li className="title">{item.title}</li>
                {
                    item.data.map((item, index)=>{
                        return(
                            <li key={index}>{item.title}</li>
                        )
                    })
                }
        </ul>
        )
    })

    const iconsEle=icons.map((icon, index)=>{
        return (
            <li className={icon.name} key={index}><i className={icon.icon}/></li>
        )
    })

    const policiesEle = policyList.map((policy, index)=>{
        return(
            <li className="bottom-footer-text" key={index}>{policy.text}</li>
        )
    })

    return (
        <footer>
            <div className="footer-main-content">
                <div className="container-form-logo-group">
                    <div className="logo-para-group">
                        <div className="footer-logo-group">
                            <img src={motiveLogo} />
                            <span>uixzone</span>
                        </div>
                        <div>
                            <p className="footer-para">
                                On the other hand, we denounce with righteous indignation and dislike men.
                            </p>
                        </div>
                    </div>
                    <FooterForm/>
                </div>
                <div className="footer-vertical-list-group">
                    {verticalListEle}
                </div>
            </div>
            <div className="horizone-line" />
            <div className="bottom-footer">
                <ul>
                    {policiesEle}
                </ul>
                <ul className="icons-list">
                    {iconsEle}
                </ul>
                <span className="bottom-footer-text">© 2020 <span className="highlight">MotiveZone</span> All rights
      reserved.</span>
            </div>
        </footer>

    )
}
