import React, { useState } from "react";
import axios from "axios";
import "regenerator-runtime/runtime";

const SearchBar=()=>{

    const[query,setQuery]=useState("");
    const[weathers,setWeathers]=useState("");

    console.log(weathers)
const API_KEY="07942d0de47eb767714734c476425578";

   async function weatherfetcher(){
           const request=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=imperial`);
           
           setWeathers(request.data);

    }


    function inputhandler(e){
        setQuery(e.target.value)
     

    }


    return (
        <div>
          <input 
          className="search"
          type="text"
          value={query}
          
          placeholder="Enter a City"
          onChange={inputhandler}
         onBlur={()=>{weatherfetcher()
        setQuery("")}}

          />
          <div>    

    {
        weathers &&   (
            <div className="weather">
           
            <h2>{weathers.name}</h2>
           <h1>{weathers.main.temp}°F</h1>
           <p>{weathers.weather[0].description}</p>
           <div className="icon">
            <img
              src={`http://openweathermap.org/img/w/${weathers.weather[0].icon}.png`}
              alt={weathers.weather[0].description}
            />
          </div>
            
           </div>)
        
    }
          </div>
        </div>
    )
}

export default SearchBar;