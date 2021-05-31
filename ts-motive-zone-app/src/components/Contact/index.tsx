import React from 'react'
import '../../assets/styles/Contact/style.scss'
import contactBanner from '../../assets/images/banners/working-banner.png'
import { useDispatch, useSelector } from 'react-redux'
import { submitContactForm, onChangeFullName, onChangeEmail, onChangeMessage } from '../../actions'
import { useState } from 'react'

export default function Contact(props: any) {
    const state: any = useSelector(state => state);
    const dispatch = useDispatch();
    const formData = { ...state.form };
    //console.log("data from store", formData);

    // const [fullName, setFullName] = useState('hello');
    // console.log(fullName);


    function handleOnchangeFullName(e: any) {
        let value = e.target.value;
        dispatch(onChangeFullName(value));
    }

    function handleOnchangeEmail(e:any) {
        let value = e.target.value;
        dispatch(onChangeEmail(value));
    }

    function handleOnchangeMessage(e:any) {
        let value = e.target.value;
        dispatch(onChangeMessage(value));
    }

    function handlePolicyText_onClick() {
    }

    function handleSend_Click(e: React.MouseEvent<HTMLButtonElement>) {
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
                        <div>
                            <input className={formData.isShowFullName_Warning ? "warning" : ''} type="text" onChange={handleOnchangeFullName} name="txtFullname" placeholder="Full name" />
                            {formData.isShowFullName_Warning && <span className="span--warning">Please enter a full name!</span>}
                        </div>
                        <div>
                            <input className={formData.isShowEmail_Warning ? "warning" : ''} type="text" onChange={handleOnchangeEmail} name="txtEmail" placeholder="Enter your email address" />
                            {formData.isShowEmail_Warning && <span className="span--warning">Please enter a email!</span>}
                        </div>
                        <div>
                            <input className={formData.isShowMessage_Warning ? "warning" : ''} type="text" onChange={handleOnchangeMessage} name="txtMessage" placeholder="Message" />
                            {formData.isShowMessage_Warning && <span className="span--warning">Please enter a messages!</span>}
                        </div>
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
