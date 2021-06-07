import React, { useEffect, useState } from 'react'
import '../../assets/styles/Contact/style.scss'
import contactBanner from '../../assets/images/banners/working-banner.png'
import { useDispatch, useSelector } from 'react-redux'
import ContactInput from './ContactInput/ContactInput'
import ContactModal from './ContactModal/ContactModal'
import Swal from 'sweetalert2'

export default function Contact(props: any) {
    const state: any = useSelector(state => state);
    const dispatch = useDispatch();
    const formData = { ...state.form };

    function handleSend_Click(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        dispatch({ type: 'SEND_FORM', payload: formData.dataToSend })
    }

    let isDisableButton = true;
    if ((formData.fullNameWarningMess || formData.emailWarningMess
        || formData.messageWarningMess) ||
        !(formData.dataToSend.fullName && formData.dataToSend.email
            && formData.dataToSend.message)) {
        isDisableButton = true;
    } else {
        isDisableButton = false;
    }

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
        document.getElementById('body')?.classList.add("fixed-body");
    }

    function handleCloseModal() {
        setModal(false);
        document.getElementById('body')?.classList.remove("fixed-body");
    }

    const inputData = [
        {
            name: 'fullName',
            actionType: 'CHECK_FULLNAME',
            warningMess: formData.fullNameWarningMess
        },
        {
            name: 'email',
            actionType: 'CHECK_EMAIL',
            warningMess: formData.emailWarningMess
        },
        {
            name: 'message',
            actionType: 'CHECK_MESSAGE',
            warningMess: formData.messageWarningMess
        },
    ]

    return (
        <section className="contact-section">
            <div className="contact-section__banner">
                <img src={contactBanner} />
            </div>
            <div className="contact-section__title">
                <h3 className="global__title">Interested To Work With Us?</h3>
                <div>
                    <p className="global__paragraph">Because it is
                    pleasure, but because those who do not know how
                    to pursue pleasure rationally encounter consequences
                    that are extremely painful. Nor again is there anyonewho
                    loves or pursues or desires to obtain pain
                    </p>
                    <p className="global__paragraph">Of itself, because it is
                    pain, but because occasionally circumstances occur in which
                    toil and pain can procure him some great pleasure</p>
                </div>
                <form>
                    <div className="form__input-group">
                        {
                            inputData.map((item, index) => {
                                return (
                                    <ContactInput key={index}
                                        name={item.name}
                                        actionType={item.actionType}
                                        warningMess={item.warningMess} />
                                )
                            })
                        }
                    </div>
                    <span onClick={handleOpenModal}>Privacy Policy</span>
                    <div className="form__button">
                        <button type="submit"
                            className={isDisableButton ? "disable-button"
                                : "global__button"}
                            onClick={handleSend_Click} disabled={isDisableButton}
                        >Send
                        </button>
                    </div>
                </form>
            </div>
            <ContactModal openModal={openModal} closeModal={handleCloseModal} />
        </section>
    )
}
