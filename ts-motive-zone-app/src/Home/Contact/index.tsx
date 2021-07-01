import React, { useEffect, useState } from 'react'
import contactBanner from '../../assets/images/banners/working-banner.png'
import { useDispatch, useSelector } from 'react-redux'
import ContactInput from './ContactInput/ContactInput'
import ContactModal from './ContactModal/ContactModal'
import Modal from 'react-modal';

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

  const [openPolicyModal, setPolicyModal] = useState(false);
  function handleOpenPolicyModal() {
    setPolicyModal(true);
    document.getElementById('body')?.classList.add("fixed-body");
  }

  function handleClosePolicyModal() {
    setPolicyModal(false);
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

  Modal.setAppElement('#root');

  let subtitle: any;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
    document.getElementById('body')?.classList.add("fixed-body");
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
    document.getElementById('body')?.classList.remove("fixed-body");
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  useEffect(() => {
    if (formData.dataReceived.status === 200) {
      openModal();
      dispatch({ type: 'RESET_FORM' });
    }
  });

  return (
    <section className="contact-section">
      <div className="contact-section__banner">
        <img src={contactBanner} alt='...' />
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
            <div className="custom-file">
              <input type="file" name="file" id="contact-file" className="custom-file-input"/>
              <label htmlFor="file">Choose a file</label>
            </div>
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
          <span onClick={handleOpenPolicyModal}>Privacy Policy</span>
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
      <ContactModal openModal={openPolicyModal} closeModal={handleClosePolicyModal} />
      <div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Success</h2>
          <p style={{ textAlign: 'center' }}>Your message have been sent. We will contact with you soon</p>
          <button onClick={closeModal}
            className="react-modal__button">OK</button>
        </Modal>
      </div>
    </section>
  )
}
