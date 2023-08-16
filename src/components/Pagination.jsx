//se encarga de renderizar la paginacion
const Pagination = ({ pages, setCurrentPage, currentPage }) => {
    return (
    <ul className="flex gap-4 justify-center items-center text-3xl cursor-pointer    ">
        {pages.map((page) => (
        <li 
            className={`flex hover:bg-lime-800  h-[35px] aspect-square  rounded-full justify-center items-center ${
            currentPage === page &&
            "bg-lime-800 hover:hue-rotate-90 hover:text-black flex justify-center items-center h-[35px] aspect-square  rounded-full "
            }`}
            onClick={() => setCurrentPage(page)}
            key={page}
        >
            {page}
        </li>
        ))}
    </ul>
    );
};
export default Pagination;
