import React from 'react'
import '../../assets/styles/Contact/style.css'
import contactBanner from '../../assets/images/banners/working-banner.png'

export default function Contact(props) {


    return (
        <section className="fourth-section">
            <div className="fourth-section-banner">
                <img src={contactBanner} />
            </div>
            <div className="fourth-section-title">
                <h3 className="section-title">Interested To Work With Us?</h3>
                <div>
                    <p className="section-paragraph">Because it is pleasure, but because those who do not know how to pursue
                    pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone
                    who loves or pursues or desires to obtain pain
                    </p>
                    <p className="section-paragraph">Of itself, because it is pain, but because occasionally circumstances
                    occur in which toil and pain can procure him some great pleasure</p>
                </div>
                <form className="fourth-section-form">
                    <div className="form-input-group">
                        <input type="text" placeholder="Full name" />
                        <input type="text" placeholder="Enter your email address" />
                        <input type="text" placeholder="Message" />
                    </div>
                    <span>Privacy Policy</span>
                    <div className="form-btn-group">
                        <button className="global-button">Send</button>
                    </div>
                </form>
            </div>
        </section>

    )
}
