import React from 'react'
import '../../assets/styles/Contact/style.scss'
import contactBanner from '../../assets/images/banners/working-banner.png'
import { useDispatch, useSelector } from 'react-redux'
import { submitContactForm, onChangeFullName,
         onChangeEmail, onChangeMessage,CONSTANTS} from './contactActions'

export default function Contact(props: any) {
    const state: any = useSelector(state => state);
    const dispatch = useDispatch();
    const formData = { ...state.form };

    function handleOnchange(e: any, actionType:string) {
        let value = e.target.value;
        switch (actionType){
            case CONSTANTS.ONCHANGE_FULLNAME:{
                dispatch({type:'CHECK_FULLNAME',payload:{data:value} });
                break;
            }
            case CONSTANTS.ONCHANGE_EMAIL:{
                dispatch({type:'CHECK_EMAIL', payload:{data:value}});
                break;
            }
            case CONSTANTS.ONCHANGE_MESSAGE:{
                dispatch({type:'CHECK_MESSAGE', payload:{data:value}});
                break;
            }
        }
    }

    function handlePolicyText_onClick() {
    }

    function handleSend_Click(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        dispatch(submitContactForm(
            'linhdong', 'linhdong@gmail.com', "test"
        ))
    }

    let fullNameWarningMess = formData.isShowWarning_FullName  && <span className="span--warning">{formData.fullNameWarningMess}</span>;
    let emailWarningMess= formData.isShowWarning_Email && <span className="span--warning">{formData.emailWarningMess}</span>;
    let messageWarningMess = formData.isShowWarning_Message  && <span className="span--warning">{formData.messageWarningMess}</span>;

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
                            <input className={formData.isShowWarning_FullName ? "warning" : ''} type="text" onChange={(e)=>handleOnchange(e,CONSTANTS.ONCHANGE_FULLNAME)} placeholder="Full name" />
                            {fullNameWarningMess}
                        </div>
                        <div>
                            <input className={formData.isShowWarning_Email ? "warning" : ''} type="text" onChange={(e)=>handleOnchange(e,CONSTANTS.ONCHANGE_EMAIL)} placeholder="Enter your email address" />
                            {emailWarningMess}
                        </div>
                        <div>
                            <input className={formData.isShowWarning_Message ? "warning" : ''} type="text" onChange={(e)=>handleOnchange(e,CONSTANTS.ONCHANGE_MESSAGE)} placeholder="Message" />
                            {messageWarningMess}
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
