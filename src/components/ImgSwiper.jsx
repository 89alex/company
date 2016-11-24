import React, {PropTypes} from 'react'
import Slider from 'react-slick'
class ImgSwiper extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const {images} = this.props
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            //initialSlide: 1,
            slidesToScroll: 3,
            slidesToShow: 3
        };
        //console.log(images)
        return (
            <Slider {...settings}>
                {
                    images ? images.map((img, index) => {
                        return <div key={index}><h3><img width="100%" style={{'borderRadius': '.06rem'}} src={img.src} alt=""/></h3></div>
                    }) : <div><h3><img width="100%" style={{'borderRadius': '.06rem'}} src='' alt=""/></h3></div>
                }
            </Slider>
        );
    }
}
ImgSwiper.PropTypes = {
    images: React.PropTypes.string
}
export default ImgSwiper