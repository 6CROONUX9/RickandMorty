import { useState } from "react";
import axios from "axios";
import Suggestion from "./Suggestion";


// agregamos la estructura del formulario para el usuario y su nuevas busquedas
const LocationForm = ({handleSubmit,handleChange,suggestions,locationName}) => {
  
  // const [suggestions, setSuggestions] = useState([]); // capturar las igualdad del input 
  // const [locationName, setLocationName] = useState(""); 



  //   // encargadado de la lista con las sugerencias
  // const handleChange = (e) => {
  //   setLocationName(e.target.value) //evita el error de vacio y no genera sugerencias
    
  //   const nwordWritten = e.target.value; //palabra escrita capturada ene l input
  //   const URL = `https://rickandmortyapi.com/api/location?name=${nwordWritten}`; //peticion a la url
    
  //   setLocationName(nwordWritten) 
  //   axios
  //     .get(URL)
  //     .then(({data}) =>setSuggestions(data.results))
  //     .catch((err) => console.log(err))
  // }



  return (
    <>
      <form className="flex  px-2 sm:mx-[15%] hover:hue-rotate-90 sm:mt-20  " onSubmit={handleSubmit}>
        
        <div className="relative border-2 border-lime-400/100 flex-1">
        <input 
            className="w-full outline-none bg-black text-lime-400/100 text-center p-2 "

            id="newLocation"
            type="text"
            value={locationName }
            placeholder="Type a location id ..."
            onChange={handleChange}
            autoComplete="off"
            required
        />
        <Suggestion suggestions={suggestions}  locationName={locationName}  /> 
        </div>
        <button className="bg-lime-800 border-2 border-lime-400/100 py-1 px-4 flex items-center gap-2">
          <span className="hidden sm:block">Search</span>
          <i className='bx bx-search-alt-2  text-dark-gray text-lg '></i>
        </button>
        {/* <h2 className=" invisible sm:visible flex text-center justify-center items-center bg-lime-800  p-2">search</h2> */}
        
    </form>
    </>
  )
}
export default LocationForm