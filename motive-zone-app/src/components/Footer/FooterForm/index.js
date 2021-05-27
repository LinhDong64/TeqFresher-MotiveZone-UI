import React from 'react'
import '../../../assets/styles/Footer/form.footer.css'

export default function FooterForm(props) {


    return (
        <div className="footer-form-group">
            <div className="footer-form-title">Interested To Work With Us</div>
            <form className="footer-form">
                <div className="footer-form-items-group">
                    <input className="fullname" type="text" name="txtFullname" id="txtFullname" placeholder="Full name" />
                    <input className="email" type="text" name="txtEmail" id="txtEmail" placeholder="Enter your email address" />
                </div>
                <div className="footer-form-items-group">
                    <input className="message" type="text" name="txtMessage" id="txtMessage" placeholder="Message" />
                    <input type="button" defaultValue="Send" />
                </div>
            </form>
        </div>
    )
}
