import React from 'react'
import Slider from 'react-slick'
class ImgSwiper extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            //initialSlide: 1,
            slidesToScroll: 3,
            slidesToShow: 3
        };
        return (
                <Slider {...settings}>
                    <div><h3><img width="100%" style={{'borderRadius': '.06rem'}} src="./static/images/img1.jpg" alt=""/></h3></div>
                    <div><h3><img width="100%" style={{'borderRadius': '.06rem'}} src="./static/images/img1.jpg" alt=""/></h3></div>
                    <div><h3><img width="100%" style={{'borderRadius': '.06rem'}} src="./static/images/img1.jpg" alt=""/></h3></div>
                    <div><h3><img width="100%" style={{'borderRadius': '.06rem'}} src="./static/images/img1.jpg" alt=""/></h3></div>
                    <div><h3><img width="100%" style={{'borderRadius': '.06rem'}} src="./static/images/img1.jpg" alt=""/></h3></div>
                    <div><h3><img width="100%" style={{'borderRadius': '.06rem'}} src="./static/images/img1.jpg" alt=""/></h3></div>
                </Slider>
        );
        /*return (
            <ul className="ui-img-ul">
                <li><img src="./static/images/img1.jpg" alt=""/></li>
                <li><img src="./static/images/img1.jpg" alt=""/></li>
                <li><img src="./static/images/img1.jpg" alt=""/></li>
            </ul>
        )*/
    }
}
export default ImgSwiper