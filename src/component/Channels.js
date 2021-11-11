import React, { useEffect, useState } from "react";
import TvPlayer from "./TvPlayer";
import SearchChannel from "./SearchChannel";
import Footer from "./Footer";

function Channels() {
  const [channels, setChannels] = useState([]);
  const [currentChannel, setCurrentChannel] = useState("");
  const [arr, setarr] = useState([]);
  const [countryData, setCountryData] = useState([]);
  const [isTrue,setisTrure]=useState(false)
  const [countryName,setCountryName]=useState('')

  

  useEffect(() => {
    fetch(`https://iptv-org.github.io/iptv/channels.json`)
      .then((res) => res.json())
      .then((data) => {
        const sportData = data.filter((elem) => elem.category == "Sports");
        setChannels(sportData);
        getCountryName(sportData);
      });
  }, []);

  function channelHandler(channel) {
    setCurrentChannel(channel);
  }

  var countryList = new Array();
  function getCountryName(data) {
    data.map((elem) => {
      var name = elem.countries[0].name;
      countryList.push(name);
    });

    countryList.forEach(GetSingleCountryName);
  }

  const newArray = new Array();
  function GetSingleCountryName(item) {
    if (newArray.indexOf(item) !== -1) {
      console.log("exist");
    } else {
      newArray.push(item);
      setarr(newArray);
    }
  }
  
  function getCountryData(value) {
    console.log("test on change");
    let result = channels.filter(
      (channel) => channel.countries[0].name === value
    );
    console.log(result);
    setCountryData(result)
setisTrure(true)
  }

  return (
    <>
    <div className="container">
      <h1
        style={{
          textAlign: "center",
          padding: "25px",
          fontFamily: "initial",
        }}
      >
        LIVE SPORT CHANNELS 
      </h1>
      <SearchChannel newArray={arr} getCountryData={getCountryData} />
      

      <div>
        <TvPlayer currentChannel={currentChannel}></TvPlayer>
      </div>

      <div className="row">
        
        {(countryData && isTrue)? countryData.map((elem) => (
          <div className="col">
            <div
              style={{ marginBottom: "40px", height: "150px", width: "150px" }}
            >
              <img
                class="card-img-top"
                src={elem.logo}
                alt={elem.name}
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "grey",
                  color: "white",
                }}
                onClick={() => {
                  channelHandler(elem);
                }}
              />
            
            </div>
          </div>
        ))  : channels.map((elem) => (
          <div className="col">
            <div
              style={{ marginBottom: "40px", height: "150px", width: "150px" }}
            >
              <img
                class="card-img-top"
                src={elem.logo}
                alt={elem.name}
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "grey",
                  color: "white",
                }}
                onClick={() => {
                  channelHandler(elem);
                }}
              />
              
            </div>
          </div>
        ))
        }
        </div>
        </div>
      <div>
      <Footer/>
    </div>
    </>

  );
}

export default Channels;
