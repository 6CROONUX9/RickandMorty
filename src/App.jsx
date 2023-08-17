import { useEffect, useState } from "react";
import "./App.css";
import { getRandomDimension } from "./utils/random";
import axios from "axios";
import LocationForm from "./components/LocationForm";
import LocationInfo from "./components/LocationInfo";
import ResidentList from "./components/ResidentList";
import Loader from "./components/Loader";

function App() {
  // guardamos la informacion de la locacion actual de residentes
  const [currentLocation, setCurrentLocation] = useState(null);

  //Loader
  const [loaderConfi, setLoaderConfi] = useState(true);

  // Solo para locationForm
  const [suggestions, setSuggestions] = useState([]); // capturar las igualdad del input
  const [locationName, setLocationName] = useState("");

  // encargadado de la lista con las sugerencias
  const handleChange = (e) => {
    //setLocationName(e.target.value) //evita el error de vacio y no genera sugerencias

    const nwordWritten = e.target.value; //palabra escrita capturada en el input
    const URL = `https://rickandmortyapi.com/api/location?name=${nwordWritten}`; //peticion a la url
    //console.log(nwordWritten);
    setLocationName(nwordWritten);

    axios
      .get(URL)
      .then(({ data }) => setSuggestions(data.results)) //setSuggestions(data.results)
      .catch((err) => console.log(err));
  };

  // funcion que se encarga de recibir el evento del buscador
  const handleSubmit = (e) => {
    e.preventDefault(); // metodo encargado de prevenir la recarga de la pagina
    const newLocation = e.target.newLocation.value; //obtiene su nueva hubicacion

    const mapeo = suggestions.map((suggestion) => suggestion.name); // mostramos el nombre del residente en arreglo

    const nameComparison = mapeo.find(
      (newElement) => newElement.toLowerCase() === newLocation.toLowerCase()
    );

    const url = `https://rickandmortyapi.com/api/location?name=${newLocation}`;

    nameComparison
      ? axios
          .get(url)
          .then(({ data }) => setCurrentLocation(data.results[0])) //obj- dimension de busqueda
          .catch((err) => alert(err))
      : alert("Esta dimension no existe"); // aca le entregamos el modal
  };

  // funcion que se encarga de recibir el id locacion y hace la peticion
  const fetchDimension = (idLocation) => {
    const URL = `https://rickandmortyapi.com/api/location/${idLocation}`;

    axios
      .get(URL)
      .then(({ data }) => setCurrentLocation(data))
      .catch((err) => console.log(err));
  };

  // Endpoints que se encarga de mostrar una dimension random
  useEffect(() => {
    const randomDimension = getRandomDimension(126); // nos entrega un numero random del 1-126
    fetchDimension(randomDimension);
    const allDimensio = "https://rickandmortyapi.com/api/location";
    axios
      .get(allDimensio)
      .then(({ data }) => console.log(data))
      .catch((err) => console.log(err));
  }, []);

  // efecto para confi loader
  useEffect(() => {
    setTimeout(() => {
      setLoaderConfi(false);
    }, 3000);
  }, []);

  return (
    <main className="font-fira-code bg-black min-h-screen text-white relative ">
      <section className=" bg-[url('/bg_header.png')]  grid items-center justify-center bg-cover    ">
        <div className=" w-full relative mx-auto mb-8 flex justify-center items-center sm:-mt-36  ">
          <div className="absolute top-0 w-full     ">
            <img
              className="w-11/12 aspect-square animate-spin-slow  "
              src="/portalFondo.png"
              alt=""
            />
          </div>
          <div className="absolute top-24  sm:top-44 ">
            <img className="animate-bounce  " src="/rick-name.png" alt="" />
          </div>
        </div>

        <div className="mt-64 z-50 sm:mt-[400px]">
          <LocationForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            suggestions={suggestions}
            locationName={locationName}
          />

          <h2 className="text-lime-400/100 text-center my-2">
            ¡Wellcome to the crazy universe!
          </h2>
          <LocationInfo currentLocation={currentLocation} />
        </div>
      </section>
      <ResidentList
        residents={currentLocation?.residents ?? []}
        currentLocation={currentLocation}
      />
      {/*{loaderConfi &&  <Loader />}*/}
    </main>
  );
}

export default App;
