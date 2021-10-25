import React, { useState } from "react";
import Select from "react-select";

const SearchChannel = ({ newArray , getCountryData }) => {
  const option = new Array();
    
  newArray.map((opt) => option.push({ label: opt, value: opt }));
  const [country, setCountry] = useState(option.label);
  


const handleChange = e => {

    console.log(e.label)
     setCountry(e.label)
    getCountryData(e.label)
  }
  return (
    <div>
        <h2 style={{"textAlign":"center","fontFamily":"initial","marginTop":"25px"}}>SEARCH BY COUNTRY</h2>
      <Select
      options={option} 
      onChange={handleChange}
      />
    <h2 style={{"textAlign":"center","fontFamily":"initial","marginTop":"25px","marginBottom":"25px"}}> {country}</h2>
    </div>
  );
};

export default SearchChannel;
