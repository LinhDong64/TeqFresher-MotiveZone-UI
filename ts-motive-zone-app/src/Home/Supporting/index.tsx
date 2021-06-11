import supportBanner from '../../assets/images/banners/helping-banner.png'

export default function Support(props: any) {


    return (
        <section className="supporting-section">
            <div className="supporting-section__title">
                <h3 className="global__title">We Are Hear To Help You With</h3>
                <div className="supporting-title__para-group">
                    <p className="global__paragraph">But I must explain to you
                    how all this mistaken idea of denouncing pleasure and praising
                    pain was born and I will give you a complete account of the
                    system, and expound the actual teachings of the great explorer
                    </p>
                    <p className="global__paragraph">Of the truth, the master-builder
                    of human happiness. No one rejects, dislikes, or avoids pleasure
                    itself
                    </p>
                </div>
                <div className="supporting-title__button">
                    <button className="global__button">Read more</button>
                </div>
            </div>
            <div className="supporting-section__banner">
                <img src={supportBanner} />
            </div>
        </section>
    )
}
