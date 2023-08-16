const SuggetionForm = ({suggestions,locationName}) => {
return (
    <>
        <ul className="absolute bg-lime-400/100 z-10 w-full top-9 flex items-center justify-center ">
            {
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