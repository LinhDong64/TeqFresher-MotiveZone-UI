import React, { useEffect, useState } from 'react'
import '../../assets/styles/Contact/style.scss'
import contactBanner from '../../assets/images/banners/working-banner.png'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'

export default function Contact(props: any) {
    const state: any = useSelector(state => state);
    const dispatch = useDispatch();
    const formData = { ...state.form };

    function handleOnchange(e: any, actionType: string) {
        let value = e.target.value;
        dispatch({ type: actionType, payload: { data: value } });
    }

    function handleSend_Click(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        dispatch({ type: 'SEND_FORM', payload: formData.dataToSend })
    }

    let isDisableButton = true;
    if ((formData.isShowWarningFullName || formData.isShowWarningEmail || formData.isShowWarningMessage) ||
        !(formData.dataToSend.fullName && formData.dataToSend.email && formData.dataToSend.message)) {
        isDisableButton = true;
    } else {
        isDisableButton = false;
    }

    let fullNameWarningMess = formData.isShowWarningFullName && <span className="span--warning">{formData.fullNameWarningMess}</span>;
    let emailWarningMess = formData.isShowWarningEmail && <span className="span--warning">{formData.emailWarningMess}</span>;
    let messageWarningMess = formData.isShowWarningMessage && <span className="span--warning">{formData.messageWarningMess}</span>;

    useEffect(() => {
        if (formData.dataReceived.status === 200) {
            Swal.fire({
                icon: 'success',
                title: 'Successfully!',
                showConfirmButton: true,
            }).then(() => {
                dispatch({ type: 'RESET_FORM' });
            }
            )
        }
    });

    const [openModal, setModal] = useState(false);
    function handleOpenModal() {
        setModal(true);
    }

    function handleCloseModal() {
        setModal(false);
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
                            <input className={formData.isShowWarningFullName ? "warning" : ''} type="text" value={formData.dataToSend.fullName}
                                onChange={(e) => handleOnchange(e, 'CHECK_FULLNAME')} placeholder="Full name" name='fullName' />
                            {fullNameWarningMess}
                        </div>
                        <div>
                            <input className={formData.isShowWarningEmail ? "warning" : ''} type="text" value={formData.dataToSend.email}
                                onChange={(e) => handleOnchange(e, 'CHECK_EMAIL')} placeholder="Enter your email address" name='email' />
                            {emailWarningMess}
                        </div>
                        <div>
                            <input className={formData.isShowWarningMessage ? "warning" : ''} type="text" value={formData.dataToSend.message}
                                onChange={(e) => handleOnchange(e, 'CHECK_MESSAGE')} placeholder="Message" name='message' />
                            {messageWarningMess}
                        </div>
                    </div>
                    <span onClick={handleOpenModal}>Privacy Policy</span>
                    <div className="form__button">
                        <button type="submit" className={isDisableButton ? "disable-button" : "global__button"} onClick={handleSend_Click} disabled={isDisableButton}>Send</button>
                    </div>
                </form>
            </div>
            <div className="contact-section__modal" style={{ display: openModal ? "block" : "none" }}>
                <div className="modal-content">
                    <span className="close" onClick={handleCloseModal}>&times;</span>
                    <h4>Privacy Policy</h4>
                    <ol>
                        <li>
                            <span>Fundamental Policy.</span>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Dolores at facere fugiat soluta fugit in aut officia cum atque dignissimos unde repellat quo,
                                 eos aliquam. Necessitatibus ut voluptatem deserunt libero.</p>
                        </li>
                        <li>
                            <span>Compliance with Applicable Laws and Regulations</span>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, maiores? Accusamus ab, reprehenderit repudiandae cum corrupti pariatur, quas,
                                 maxime quia delectus aspernatur doloremque nisi suscipit esse quibusdam voluptate soluta cupiditate.</p>
                        </li>
                        <li>
                            <span>Handling of personal information</span>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque magnam a error numquam aut sed, perferendis, minima debitis distinctio hic quae dolore quod architecto dolor excepturi. Nobis similique ad enim.</p>
                        </li>
                    </ol>
                </div>
            </div>
        </section>
    )
}
