
export default function ContactModal(props: any) {
    function handleCloseModal() {
        props.closeModal();
    }
    return (
        <div className="contact-section__modal"
            style={{ display: props.openModal ? "flex" : "none" }}>
            <div className="modal-content">
                <span className="close"
                    onClick={handleCloseModal}>&times;</span>
                <h4>Privacy Policy</h4>
                <ol>
                    <li>
                        <span>Fundamental Policy.</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolores at facere fugiat soluta fugit in aut officia cum atque
                        dignissimos unde repellat quo, eos aliquam. Necessitatibus ut
                        voluptatem deserunt libero.</p>
                    </li>
                    <li>
                        <span>Compliance with Applicable Laws and Regulations</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Laboriosam, maiores? Accusamus ab, reprehenderit repudiandae
                        cum corrupti pariatur, quas, maxime quia delectus aspernatur
                        doloremque nisi suscipit esse quibusdam voluptate soluta
                            cupiditate.</p>
                    </li>
                    <li>
                        <span>Handling of personal information</span>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Cumque magnam a error numquam aut sed, perferendis, minima
                        debitis distinctio hic quae dolore quod architecto dolor
                            excepturi. Nobis similique ad enim.</p>
                    </li>
                </ol>
            </div>
        </div>
    )
}