const HideElements = ({ dados, cApi, classe }) => {
   return (
      <div id="weather-data" className={classe ? "hide" : "show"}>
         <h2>
            <i className="fa-solid fa-location-dot"></i>
            <span id="city">{dados?.name}</span>
            <img
               crossOrigin="anonymous"
               src={`${cApi}${dados?.sys?.country}`}
               id="country"
            />
         </h2>
         <p id="temperature">
            <span>{dados?.main?.temp}</span>&deg;C
         </p>
         <div id="description-container">
            <p id="description">{dados?.weather?.[0]?.description}</p>
            <img
               src={`http://openweathermap.org/img/wn/${dados?.weather?.[0]?.icon}.png`}
               alt="Condições do tempo"
               id="weather-icon"
               crossOrigin="anonymous"
            />
         </div>
         <div id="details-container">
            <p id="humidity">
               <i className="fa-solid fa-droplet"></i>
               <span>{dados?.main?.humidity}</span>
            </p>
            <p id="wind">
               <i className="fa-solid fa-wind"></i>
               <span>{dados?.wind?.speed}</span>
            </p>
         </div>
      </div>
   );
};

export default HideElements;
