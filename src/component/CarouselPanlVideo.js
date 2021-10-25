import React from 'react';
import ReactHlsPlayer from 'react-hls-player';
import './carousel.css';

const CarouselPanlVideo = (props) => {
  const btnContainer = {
    display: "inline-block",
    float: "right",
    margin: "10px"
  };
  const btn = {
    border: "none",
    background: "gray",
    color: "white",
    fontSize: "22px",
    padding: "5px 10px",
    borderRadius: "10px",
    margin: "0 10px",

  };
  const img = {
    width: "200px !important"
  };
  const videoContainer = {
    display: "flex",
    height: "600px !important",
    width: "900px !important"
  };

  
  console.log(props)
  if (!props.article) return null


  return (
    <React.Fragment>
      <div >
      <div className ="Centerlized"><img src={props.article.img ? props.article.img : "defaultImage"} alt="Sliderr_image" /></div>
      
      <h1 className ="Centerlized">{props.article.channel_name}</h1>
      <h2 className ="Centerlized">{props.article.group}</h2>
      <div style={videoContainer} className ="Centerlized">
        <ReactHlsPlayer
          src={props.article.video_url}
          hlsConfig={{
            maxLoadingDelay: 4,
            minAutoBitrate: 0,
            lowLatencyMode: true,
            controls: true,
            autoPlay: true,
            height: 720,
            width: 900
          }}
        />
      </div>
      <div className ="Centerlized">
        <span style={btnContainer} >
          <button style={btn} onClick={props.slidePrev}>
            {"<"} Prevs
          </button>
          |
          <button style={btn} onClick={props.slideNext}>
            {">"} Next
          </button>
        </span>
      </div>
      </div>
    </React.Fragment>
  );

};




export default CarouselPanlVideo