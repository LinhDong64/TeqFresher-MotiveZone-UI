import React from 'react'
import '../../assets/styles/Contact/style.scss'
import contactBanner from '../../assets/images/banners/working-banner.png'
import {useDispatch, useSelector} from 'react-redux'
import {submitContactForm} from '../../actions'
import { useState } from 'react'

export default function Contact(props:any) {

    // const [fullName, setFullName]=useState('');
    // const [email, setEmail]=useState('');
    // const [message, setMessage]=useState('');

    let formData:any = useSelector(state => state);
    const dispatch = useDispatch();
    console.log(formData.form.data);

    function handleOnchangeFullName(e:React.InputHTMLAttributes<HTMLInputElement>){
    }

    function handleOnchangeEmail(){

    }

    function handleOnchangeMessage(){

    }
    
    function handlePolicyText_onClick(){
    }

    function handleSend_Click(e: React.MouseEvent<HTMLButtonElement>){
        e.preventDefault();
        dispatch(submitContactForm(
            'linhdong', 'linhdong@gmail.com', "test"
        ))
    }

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
                        <input type="text" value={formData.fullName} onChange={handleOnchangeFullName} name="txtFullname" placeholder="Full name" />
                        <input type="text"  value={formData.email} onChange={handleOnchangeEmail} name="txtEmail" placeholder="Enter your email address" />
                        <input type="text"  value={formData.message} onChange={handleOnchangeMessage} name="txtMessage" placeholder="Message" />
                    </div>
                    <span onClick={handlePolicyText_onClick}>Privacy Policy</span>
                    <div className="form__button">
                        <button type="submit" className="global__button" onClick={handleSend_Click}>Send</button>
                    </div>
                </form>
            </div>
        </section>

    )
}
