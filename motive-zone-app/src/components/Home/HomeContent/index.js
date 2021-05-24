import React from 'react'
import './style.css'
import lineIcon from '../../../assets/images/icons/line-icon.png'
import homeBanner from '../../../assets/images/banners/home-banner.png'

export default function HomeContent(props) {


    return (
        <div>
            <div className="line-icon"><img src={lineIcon} alt="line-icon" /></div>
            <div className="home-content">
                <div className="home-title">
                    <h3>We Build Brands That Lead &amp;
                        Inspire 
                    </h3>
                    <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and
                    demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot
                    foresee the pain and trouble
                    </p>
                    <div className="button-group">
                        <button className="global-button">Read more</button>
                    </div>
                </div>
                <div className="home-banner">
                    <img src={homeBanner} alt="home-banner" />
                </div>
            </div>
        </div>

    )
}
