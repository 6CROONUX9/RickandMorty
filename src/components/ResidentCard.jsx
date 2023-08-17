import axios from "axios";
import { useEffect, useState } from "react";

// se encarga de mostrar la card de los residentes
const ResidentCard = ({ residentUrl }) => {
  const [residentInfo, setResidentInfo] = useState(null);
  /* se encarga de hacer una peticion de los recidentes */
  useEffect(() => {
    axios
      .get(residentUrl)
      .then(({ data }) => setResidentInfo(data))
      .catch((err) => console.log(err));
  }, []);

  /* cambio de color por estado finitos */
  const residentStatus = {
    Alive: "text-green-500",
    Dead: "text-red-500",
    unknown: "text-slate-500",
  };

  return (
    <article className="hover:scale-110 border-4 border-lime-400/100 max-w-xs   z-30 ">
      {/* parte superior   */}
      <header className="  h-[250px] ligthTheme relative hover:hue-rotate-90">
        <img
          className="h-full w-full object-cover object-center  "
          src={residentInfo?.image}
          alt=""
        />
        {/* genera la caja status de residente*/}
        {/* trata de acomodar la caja de estados en el centro de la imagen*/}
        <div className="flex justify-center items-center gap-2 p-2  bg-black/60 h-[42px] w-[120px] border-4 border-lime-400/100 absolute bottom-6 right-1/2 translate-x-1/2">
          {/* genera el circulo status de residente*/}
          <div className={` flex justify-center items-center  `}>
            <i
              className={`bx bx-user-circle ${
                residentStatus[residentInfo?.status]
              } text-xl `}
            ></i>
          </div>

          {/*status de residente*/}
          {residentInfo?.status}
        </div>
      </header>

      {/* parte inferior*/}
      <section className="p-2 py-4 border-t-2 border-lime-400/100 ">
        <h3 className="mb-2 text-lg line-clamp-1 border-b-2 border-lime-400/100  ">
          {residentInfo?.name}
        </h3>{" "}
        {/* revisar linea inferior no toma color */}
        <ul>
          <li>
            <span className="text-neutral-500 ">Species: </span>
            {residentInfo?.species}
          </li>
          <li className="line-clamp-1 trucate ">
            <span className="text-neutral-500">Origin: </span>
            {residentInfo?.origin.name}
          </li>
          <li>
            <span className="text-neutral-500 ">Times appear: </span>
            {residentInfo?.episode.length}
          </li>
        </ul>
      </section>
    </article>
  );
};
export default ResidentCard;
