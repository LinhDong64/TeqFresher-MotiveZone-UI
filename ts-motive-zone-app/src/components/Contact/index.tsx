import React from 'react'
import '../../assets/styles/Contact/style.scss'
import contactBanner from '../../assets/images/banners/working-banner.png'

export default function Contact(props:any) {


    return (
        <section className="contact-section">
            <div className="contact-section__banner">
                <img src={contactBanner} />
            </div>
            <div className="contact-section__title">
                <h3 className="global__title">Interested To Work With Us?</h3>
                <div>
                    <p className="global__paragraph">Because it is pleasure, but because those who do not know how to pursue
                    pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone
                    who loves or pursues or desires to obtain pain
                    </p>
                    <p className="global__paragraph">Of itself, because it is pain, but because occasionally circumstances
                    occur in which toil and pain can procure him some great pleasure</p>
                </div>
                <form>
                    <div className="form__input-group">
                        <input type="text" placeholder="Full name" />
                        <input type="text" placeholder="Enter your email address" />
                        <input type="text" placeholder="Message" />
                    </div>
                    <span>Privacy Policy</span>
                    <div className="form__button">
                        <button className="global__button">Send</button>
                    </div>
                </form>
            </div>
        </section>

    )
}
