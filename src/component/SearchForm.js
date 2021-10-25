import React, { useState } from "react";
import { getCode } from "country-list";

function Searchform({ searchText }) {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    convertCountryName(text);
  };
  const convertCountryName = (e) => {
    var country_name = getCode(e);
    searchText(country_name);
  };

  return (
    <div className="container" style={{ marginTop: "30px" }}>
      <div className="row">
        <div className="col-sm">
          <h2 style={{ textAlign: "center", fontWeight: "bold","padding":"25px" }}>
            Search by Country
          </h2>
          </div>
          </div>
<div className="row">
    <div className="col-sm">
          <form class="form-inline" onSubmit={handleSubmit} >
            <div class="form-group" style={{"display":"block","margin":"auto"}}>
              <input
                type="text"
                class="form-control"
                onChange={(e) => setText(e.target.value)}
                placeholder="country name"
            
              />
               <button type="submit" class="btn btn-success ml-2">
              Search
            </button>
            </div>
          </form>
         
        </div>
      </div>
    </div>
  );
}

export default Searchform;
