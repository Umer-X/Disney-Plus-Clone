import React from 'react'; // Import React if not already imported
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const ImgSlider = (props) => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };

    return (
        
            <Carousel {...settings}>
                <Wrap>
                    <a>
                        <img src='/images/slider-badging.jpg' alt='Badging' />
                    </a>
                </Wrap>

                <Wrap>
                    <a>
                        <img src='/images/slider-scale.jpg' alt='Badging' />
                    </a>
                </Wrap>

                <Wrap>
                    <a>
                        <img src='/images/slider-badag.jpg' alt='Badging' />
                    </a>
                </Wrap>

               
            </Carousel>
        
    );
};

const Carousel = styled(Slider)`
 margin-top: 20px;
 padding: 30px;
 height: 100%;
 

 @media (max-width: 768px) {
    ul li {
        display: none;
    }

 }
 ul li  button {
    
    &:before {
        font-size: 10px;
        color: rgb(150, 158, 171);
        align-items: center;
        display: flex;
        
    }
 }

 li.slick-active button:before {
    color: white;
 }

 .slick-list {
    overflow: initial;
 }
`;

const Wrap = styled.div`
 border-radius: 4px;
 cursor: pointer;
 position: relative;

 @media (max-width: 768px) {
      
    a{
        height: 150px;
    }
 }

 a{
    border-radius: 4px;
    box-shadow: rgb(0 0 0/69%) 0px 26px 30px -10px , rgb(0 0 0/73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;

    img {
        width: 100%;
        height: 100%;
    }

    &:hover {
        padding: 0;
        border: 4px solid rgba(249,249,249, 0.8);
        transition-duration: 100ms;
    }
 }
`;
export default ImgSlider;
