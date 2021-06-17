
export default function FooterForm(props: any) {

    return (
        <div className="footer-form-group">
            <div className="footer-form__title">Interested To Work With Us</div>
            <form>
                <div className="footer-form__items-group">
                    <input className="fullname" type="text" name="txtFullname"
                        id="txtFullname" placeholder="Full name" />
                    <input className="email" type="text" name="txtEmail"
                        id="txtEmail" placeholder="Enter your email" />
                </div>
                <div className="footer-form__items-group">
                    <input className="message" type="text" name="txtMessage"
                        id="txtMessage" placeholder="Message" />
                    <input type="button" defaultValue="Send" />
                </div>
            </form>
        </div>
    )
}
