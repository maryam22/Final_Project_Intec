import React, { useEffect, useState } from 'react';
import CarouselPanlVideo from "./CarouselPanlVideo"
const { getJsonList, getJsonListFromUrlAsync } = require('iptv-list-to-json')






const CarouselVideo = () => {
        
        
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

    getJsonListFromUrlAsync('https://iptv-org.github.io/iptv/categories/sports.m3u', function (error,list_in_json) {
    if(error) return console.log('Error: '+error.code); // If there is an error return a warning
    console.log(list_in_json); // If there is no an error show the list
    setNews(list_in_json)
})
    
}, [])

  

return (
    <React.Fragment>
        <h1 className ="Centerlized">
      
            <small>
                we have {  news? news.length : 0} channels
            </small>
        </h1>
        <CarouselPanlVideo
            article={news[currentSlide]}
            slideNext={slideNext}
            slidePrev={slidePrev}
        />
    </React.Fragment>
);
};




export default CarouselVideo 