import React, { useEffect, useState } from 'react';
import CarouselPanl from "./CarouselPanl"





const Carousel = () => {
        
        
    const [currentSlide, setCurrentSlide] = useState(0);
    const [news, setNews] = useState([]);

const slideNext = (e) => {
setCurrentSlide((prev) => {
    
    if (news == null){
        return currentSlide+1
    }
    return prev + 1 === news.length ? 0 : currentSlide + 1;
});
};
const slidePrev = (e) => {
setCurrentSlide((prev) => {
  
    if (news == null){
        return currentSlide-1
    }

    return prev === 0 ? news.length - 1 : currentSlide -1 ;
});
};

      
        useEffect(() => {

                // fetch('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=d3ca5fab3c99469ba519b17354f7978e')
                fetch('https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=d3ca5fab3c99469ba519b17354f7978e')
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setNews(data.articles)
                })
           
        }, [])
        
        return (
            <React.Fragment>
                <h1 className ="Centerlized">
                    
                    <small>
                        we have {news ? news.length : 0} news
                    </small>
                </h1>
                <CarouselPanl 
                    article={news[currentSlide]}
                    slideNext={slideNext}
                    slidePrev={slidePrev}
                />
            </React.Fragment>
        );
    };




export default Carousel
