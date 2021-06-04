import '../../../assets/styles/Overview/content.overview.scss'
import lineIcon from '../../../assets/images/icons/line-icon.png'
import homeBanner from '../../../assets/images/banners/home-banner.png'

export default function HomeContent(props: any) {


    return (
        <div>
            <div className="line-icon"><img src={lineIcon}
                alt="line-icon" /></div>
            <div className="home__content">
                <div className="home__title">
                    <h3>We Build Brands That Lead &amp;
                    Inspire
                    </h3>
                    <p>On the other hand, we denounce with righteous
                    indignation and dislike men who are so beguiled and
                    demoralized by the charms of pleasure of the moment,
                    so blinded by desire, that they cannot
                    foresee the pain and trouble
                    </p>
                    <div>
                        <button className="global__button">Read more</button>
                    </div>
                </div>
                <div className="home__banner">
                    <img src={homeBanner} alt="home-banner" />
                </div>
            </div>
        </div>

    )
}
