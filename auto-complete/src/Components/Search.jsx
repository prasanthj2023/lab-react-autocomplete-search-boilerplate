import React from "react";
import { useState } from "react";
import countryData from "../countryData.json";

function Search(){

  let [input, setInput] = useState("");
  let [names, shownames] = useState([]);
  let [display, setDisplay] = useState(true);

  let check = (val) => {
    let filteredCountries = countryData.filter((ele) =>
      ele.name.toLowerCase().startsWith(val.toLowerCase())
    );
    val === ""
      ? shownames([])
      : shownames(filteredCountries.map((ele) => ele.name));
  };
  let focus = (key) => {
    if (key.code == "Escape") {
      key.target.blur();
      setDisplay(false);
    }
  };

  return(
    <>
    <h1>Search</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          check(e.target.value);
          setDisplay(true);
        }}
        onKeyDown={(key) => {
          focus(key);
        }}
      />
      <div style={display ? { visibility: "visible" } : { visibility: "hidden" }}>
        {names.map((name) => (
          <p key={names.id}>{name}</p>
        ))}
      </div>
    </>
  )
}

export default Search;