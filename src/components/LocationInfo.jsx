// se encarga de renderizar la informacion de la dimension
const LocationInfo = ({currentLocation}) => {
  return (
    <section className="bg-stone-950/90 border-4 border-lime-400/100 grid gap-4 p-4  justify-center items-center mx-4 my-4 ">

        <h2 className="text-center">{currentLocation?.name}</h2> {/*nombre de la dimension*/}
        <ul className="grid    sm:flex sm:space-x-4">
            <li className="sm:border-r-4 border-lime-400/100 px-2">Type:{currentLocation?.type}</li> 
            <li className="sm:border-r-4 border-lime-400/100 px-2">Dimension:{currentLocation?.dimension }</li> 
            <li>Population:{currentLocation?.residents.length}</li>
        </ul>
    </section>
  )
}
export default LocationInfo