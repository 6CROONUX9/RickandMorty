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
  const [currentLocation, setcurrentLocation] = useState(null);

  //Loader
  const [loaderConfi, setLoaderConfi] = useState(true);

  // funcion que se encarga de recibir el evento del buscador
  const handleSubmit = (e) => {
    e.preventDefault(); // metodo encargado de prevenir la recarga de la pagina
    const newLocation = e.target.newLocation.value; //obtiene su nueva hubicacion
    fetchDimension(newLocation);
    {
      // const url = `https://rickandmortyapi.com/api/location/${newLocation}`
      // axios
      //   .get(url)
      //   .then(({data}) => setCurrentLocation(data))
      //   .catch((err) => console,log(err))
    }
  };

  // funcion que se encarga de recibir el id locacion y hace la peticion
  const fetchDimension = (idLocation) => {
    const URL = `https://rickandmortyapi.com/api/location/${idLocation}`;
    axios
      .get(URL)
      .then(({ data }) => setcurrentLocation(data))
      .catch((err) => console.log(err));
  };

  // Endpoints que se encarga de mostrar una dimension random
  useEffect(() => {
    const randomDimension = getRandomDimension(126); // nos entrega un numero random del 1-126
    fetchDimension(randomDimension);
    {
      // const url = `https://rickandmortyapi.com/api/location/${randomDimension}`; //se la aplicamos a nuestra url para variar la dimension
      // axios
      // .get(url)
      // .then(({ data }) => setcurrentLocation(data))
      // .catch((err) => console.log(err));
    }
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
            <img className="w-11/12 aspect-square animate-spin-slow  " src="/portalFondo.png" alt="" />
          </div>
          <div className="absolute top-24  sm:top-44 "> 
            <img className="animate-bounce  " src="/rick-name.png" alt="" />
          </div>
        </div>

        <div className="mt-64 z-50 sm:mt-[400px]">
          <LocationForm handleSubmit={handleSubmit} />
          
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
      {loaderConfi &&  <Loader />}
      
    </main>
  );
}

export default App;
