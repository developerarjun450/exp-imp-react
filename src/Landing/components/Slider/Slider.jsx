import React from 'react';
import './Slider.css'
import {Swiper,SwiperSlide} from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { motion } from "framer-motion"
import Africa from "../../assets/africa.png"
import Asia from "../../assets/asia.png"
import Australia from "../../assets/Australia.png"
import SouthAmerica from "../../assets/South_America.png"
import Antarctica from "../../assets/Antarctica.png"
import Europe from "../../assets/europe.png"
import NorthAmerica from "../../assets/North_America.png"

// import { SliderProducts } from "../../data/products"

const Slider = () => {
    return (
        <div className="s-container">
            <Swiper
                modules={[Pagination, Navigation]}
                className="mySwiper"
                navigation={true}
                loopFillGroupWithBlank={true}
                slidesPerView={3}
                spaceBetween={40}
                slidesPerGroup={1}
                loop={true}
                breakpoints={{
                    640: {
                        slidesPerView: 3,
                    },
                    0: {
                        slidesPerView: 1
                    }
                }}
                >
                {/* {SliderProducts.map((slide,i) => (
                    <SwiperSlide>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 1.5 }}
                            className="left-s">
                            <div className="name">
                                <span> {slide.name} </span>
                                <span> {slide.detail} </span>
                            </div>
                            <span> {slide.price} $</span>
                            <div>Explore AI</div>
                        </motion.div>
                        <img src={slide.img} alt="product" className='img-p' />
                    </SwiperSlide>
                ))} */}
                 <SwiperSlide>
                        <div
                            className="left-s">
                            <div className="name">
                                <span style={{color:'green'}}> Africa </span>
                                <span> Africa is the world&apos;s second-largest and second-most populous continent, after Asia in both aspects </span>
                            </div>
                            <div
                                 className="bottom-content">
                                <span style={{color:'green'}}> Vast </span>
                                <div
                               >Explore AI</div>
                            </div>
                        </div>
                        <img src={Africa} alt="product" className='img-p' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className="left-s">
                            <div className="name">
                                <span style={{color:'#b04535'}}> Asia </span>
                                <span> Asia is the largest continent in the world by both land area and population. </span>
                            </div>
                            <div
                                 className="bottom-content">
                                <span  style={{color:'#b04535'}}> Diverse</span>
                                <div
                                >Explore AI</div>
                            </div>
                        </div>
                        <img src={Asia} alt="product" className='img-p' />
                    </SwiperSlide>
                     <SwiperSlide>
                        <div
                            className="left-s">
                            <div className="name">
                                <span style={{color:'#2fc0ff'}}> Europe </span>
                                <span> Europe is a continent comprising the westernmost peninsulas of Eurasia. </span>
                            </div>
                            <div
                                 className="bottom-content">
                                <span style={{color:'#2fc0ff'}}> Cultural </span>
                                <div
                               >Explore AI</div>
                            </div>
                        </div>
                        <img src={Europe} alt="product" className='img-p' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className="left-s">
                            <div className="name">
                                <span style={{color:'#1d222b'}}> North America </span>
                                <span> North America covers an area of about 24,709,000 square kilometers (9,540,000 square miles) </span>
                            </div>
                            <div
                                 className="bottom-content">
                                <span style={{color:'#1d222b'}}> Expansive</span>
                                <div
                                >Explore AI</div>
                            </div>
                        </div>
                        <img src={NorthAmerica} alt="product" className='img-p' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className="left-s">
                            <div className="name">
                                <span style={{color:'#db10e0'}}> South America </span>
                                <span> South America is a continent entirely in the Western Hemisphere and mostly in the Southern Hemisphere. </span>
                            </div>
                            <div
                                 className="bottom-content">
                                <span style={{color:'#db10e0'}}> Lively </span>
                                <div
                               >Explore AI</div>
                            </div>
                        </div>
                        <img src={SouthAmerica} alt="product" className='img-p' />
                    </SwiperSlide>
                     <SwiperSlide>
                        <div
                            className="left-s">
                            <div className="name">
                                <span style={{color:'#288c22'}}> Antarctica </span>
                                <span> Antarctica is Earth&apos;s southernmost and least-populated continent. </span>
                            </div>
                            <div
                                 className="bottom-content">
                                <span style={{color:'#288c22'}}> Frozen </span>
                                <div
                               >Explore AI</div>
                            </div>
                        </div>
                        <img src={Antarctica} alt="product" className='img-p' />
                    </SwiperSlide>
                     <SwiperSlide>
                        <div
                            className="left-s">
                            <div className="name">
                                <span style={{color:'#0035ff'}}> Australia </span>
                                <span> Australia, officially the Commonwealth of Australia, is a sovereign country. </span>
                            </div>
                            <div
                                 className="bottom-content">
                                <span style={{color:'#0035ff'}}> Unique </span>
                                <div
                              >Explore AI</div>
                            </div>
                        </div>
                        <img src={Australia} alt="product" className='img-p' />
                    </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Slider
