const Loader = () => {
    return (
        <section className="min-h-screen w-screen h-screen bg-[url('/bg_header.png')] fixed flex  justify-center items-center top-0 left-0 z-50 ">
            
            <div className="absolute">
                <img   src="/rickGifFinal.gif" alt="" />
            </div>
            <div className="absolute top-96  flex justify-center items-center">
                <img   src="/rick-name.png" alt="" />
            </div>
            {/* <div className="absolute bottom-52   ">
                <img   src="/mortyRun.gif" alt="" />
            </div> */}

        </section>
    )
    }
    export default Loader