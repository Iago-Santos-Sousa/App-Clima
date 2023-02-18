import { useEffect, useRef, useState } from "react";
import "./App.scss";
import apiKey from "./config";
import HideElements from "./components/HideElements";
import ErroMessage from "./components/ErroMessage";
import Loading from "./components/Loading";

function App() {
   const apiCountryURL = "https://countryflagsapi.com/png/";

   const inputRef = useRef();
   const [apiKeyData, setApiKeyData] = useState({});
   const [error, setError] = useState(true);
   const [loading, setLoading] = useState(false);
   const [classe, setClasse] = useState(true);
   const [classErro, setClassErro] = useState(true);

   async function getWeatherData() {
      const apiWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputRef?.current?.value}&units=metric&appid=${apiKey}&lang=pt_br`;

      const res = await fetch(apiWeatherUrl);

      const data = await res.json();

      setApiKeyData(data);

      return data;
   }

   const handleSubmit = async (e) => {
      setLoading(true);
      setClasse(false);

      e.preventDefault();
      const d = await getWeatherData();
      if (d.cod === "404") {
         console.log("erro");
         setError(false);
         setClassErro(false);
         return;
      } else {
         setError(true);
      }
      setLoading(false);
   };

   return (
      <div className="App">
         <div className="container">
            <form className="form" onSubmit={handleSubmit}>
               <h3>Veja o clima de uma cidade:</h3>
               <div className="form-input-container">
                  <input
                     type="text"
                     placeholder="Informe o nome da cidade"
                     id="city-input"
                     ref={inputRef}
                  />
                  <button id="search" type="submit">
                     <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
               </div>
            </form>

            {loading ? (
               <Loading classErro={classErro} />
            ) : (
               <HideElements
                  dados={apiKeyData}
                  cApi={apiCountryURL}
                  classe={classe}
               />
            )}

            {error ? "" : <ErroMessage />}

            {/* {showElement ? (
               ""
            ) : (
               <HideElements dados={apiKeyData} cApi={apiCountryURL} />
            )}
            {error ? "" : <ErroMessage />} */}
         </div>
      </div>
   );
}

export default App;
