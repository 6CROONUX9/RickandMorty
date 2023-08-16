import { useEffect, useState } from "react";
import ResidentCard from "./ResidentCard"
import Pagination from "./Pagination";

// constante que remplazara el Magic string
const INITIAL_PAGE = 1;

// se encarga de renderizar la lista de los residentes
const ResidentList = ({residents,currentLocation}) => {

  // se encarga de toda la paginacion, de recibir el valor de la pagina actual y inicialmente en 1  
  const [currentPage, setCurrentPage] = useState(INITIAL_PAGE);

  // definir la cantidad de residentes por paginas
  const RESIDENTS_PER_PAGE = 20;

  //cantidad total de paginas de recidentes
  const totalPages = Math.ceil(residents.length / RESIDENTS_PER_PAGE)

  //residentes que se van a mostrar en la pagina actual
  const sliceStart = (currentPage - 1) * RESIDENTS_PER_PAGE;      //punto inicial del corte
  const sliceEnd = sliceStart + RESIDENTS_PER_PAGE;               //punto final del corte
  const residentsInPage = residents.slice(sliceStart, sliceEnd);   

  //Generacion del arreglo de las paginas que se van a mostrar
  const pages = []
    for (let i = 1; i <= totalPages; i++ ){
        pages.push(i)
  }

  useEffect(() => {
    //setCurrentPage(1);  {/* Magic string : */}
    setCurrentPage(INITIAL_PAGE);

  }, [currentLocation])

  return (
    
    <section className=" bg-[url('/bg_page.png')] bg-cover  relative ">
      {/*generamo la listas de residentes*/}
      <section className="pt-10  grid gap-6 justify-center grid-cols-[repeat(auto-fill,_260px)] max-w-[1200px] mx-auto my-8" >
        {residentsInPage.map((resident) => <ResidentCard key={resident} residentUrl={resident}/> )}
      </section>
      < Pagination pages={pages} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
    </section>
  )
}
export default ResidentList