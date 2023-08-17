import axios from "axios";
import { useEffect } from "react"

const SuggetionForm = ({suggestions,locationName }) => {

    // useEffect(() => {
    //     axios
    //         .get(infoSuggestion)
    //         .then(({data}) => console.log(data))
    //         .catch((err) => console.log(err))
    // }, [])

return (
    <>
        <ul className="absolute bg-lime-400/100 z-[100] w-full top-9 grid items-center justify-center  ">
            {
                //locationName && para no generar la lista si esta vacio
                locationName && suggestions.map((suggestion)=>(
                    <li key={suggestion.id} className="text-black hover:bg-lime-400/100">
                        {" "}
                        {suggestion.name}
                    </li>
                ))
            }
        </ul>
    </>
)
}
export default SuggetionForm