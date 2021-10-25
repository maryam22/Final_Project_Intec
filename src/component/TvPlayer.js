import React from "react";
import ReactPlayer from "react-player";
import "../App.css";

const TvPlayer = ({ currentChannel }) => {
  return (
    <div className="player-wrapper">
      <div className="row">
        <div className="col-sm" style={{"alignItems":"center","marginBottom":"30px"}}>
          <ReactPlayer
            className="react-player"
            width="100%"
            height="100%"
            url={currentChannel.url}
            volume="null"
            playing="false"
            controls="true"
            
          />
          {console.log(currentChannel.url)}
        </div>
      </div>
    </div>
  );
};

export default TvPlayer;
