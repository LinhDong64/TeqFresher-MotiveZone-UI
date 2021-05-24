import React from 'react'
import './style.css'
import supportBanner from '../../assets/images/banners/helping-banner.png'

export default function Support(props) {


    return (
        <section className="third-section">
            <div className="third-section-title">
                <h3 className="section-title">We Are Hear To Help You With</h3>
                <div className="third-section-para-group">
                    <p className="section-paragraph">But I must explain to you how all this mistaken idea of denouncing
                    pleasure and praising pain was
                    born and I will give you a complete account of the system, and expound the actual teachings of
        the great explorer</p>
                    <p className="section-paragraph">Of the truth, the master-builder of human happiness. No one rejects,
        dislikes, or avoids pleasure itself</p>
                </div>
                <div className="button-group">
                    <button className="global-button">Read more</button>
                </div>
            </div>
            <div className="third-section-banner">
                <img src={supportBanner} />
            </div>
        </section>

    )
}
