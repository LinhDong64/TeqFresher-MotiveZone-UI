import React from 'react'
import '../../assets/styles/Comment/style.scss'
import commentAvatar from '../../assets/images/others/avatar.png'
import smallSquare from '../../assets/images/others/small-square.png'
import rightArrowIcon from '../../assets/images/icons/right-arrow-icon.png'
import leftArrowIcon from '../../assets/images/icons/left-arrow-icon.png'
import bookingLogo from '../../assets/images/logo/booking.png'
import instacartLogo from '../../assets/images/logo/instacart.png'
import paypalLogo from '../../assets/images/logo/paypal.png'
import googleLogo from '../../assets/images/logo/google.png'

export default function Comment(props) {
    const brands=[
        {id: 0, name:'Booking', img: bookingLogo},
        {id: 0, name:'Instacart', img:instacartLogo },
        {id: 0, name:'Paypal', img:paypalLogo },
        {id: 0, name:'Google', img: googleLogo},
    ]

    const brandsEle=brands.map((brand, index)=>{
        return(
            <li key={index}><img src={brand.img} alt={brand.name}/></li>
        )
    })

    return (
        <section className="comment-section">
            <div className="comment-section__content">
                <div className="content__avatar">
                    <img src={smallSquare}/>
                    <img src={commentAvatar} />
                </div>
                <div className="content__comments">
                    <div className="comment-group">
                        <div className="comment-info">
                            <h4>Carla stevens</h4>
                            <p>Technical Director at MotiveZone</p>
                        </div>
                        <div className="comment-content">
                            <p>
                                “On the other hand, we denounce with righteous indignation and dislike men who are so
                                beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that
                                they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to
                                those who fail in their duty through weakness of will, which is the same as saying.”
                            </p>
                        </div>
                    </div>
                    <div className="arrow-icon-group">
                        <img src={leftArrowIcon}/>
                        <img src={rightArrowIcon}/>
                    </div>
                </div>
            </div>
            <ul className="comment-section__brands">
                {brandsEle}
            </ul>
        </section>

    )
}
