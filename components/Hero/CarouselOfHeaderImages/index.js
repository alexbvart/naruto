const CarouselOfHeaderImages = ({children,items}) => {
    return ( 
        <>
            <div className="wrapper">
            {/* <div style={{
                    "width":"100%" ,
                    "height":"100%",
                    "max-height":"700px",
                    "overflow":"hidden",
                    "grid-area":"carrousel",
                    "position": "sticky",
                    "top":0,
                    "right": 0,
                    "left": 0
            }}> */}
                <section className="carouselOfHeaderImages">
                    {children}
                </section>
            </div> 

            <style jsx>{`
                .wrapper{
                    width:100%;
                    height:100%;
                    max-height:700px;
                    overflow:hidden;
                    grid-area:carrousel;
                    position: sticky;
                    top:0;
                    right: 0;
                    left: 0;
                }
                .carouselOfHeaderImages::before{
                    z-index:3;
                    content: "";
                    position: absolute;
                    width: ${items}00%;
                    height: 100%;
                    background-image: linear-gradient(180deg, rgba(16, 16, 18, 0) 50%, #151515 100%);
                    background-position: center;
                    background-size: cover;
                    background-repeat: no-repeat;
                }
                .carouselOfHeaderImages{
                    width: 100%;
                    height:100%;
                    display: grid;
                    grid-template-columns: repeat(${items},100%);
                    // background-image: linear-gradient(180deg, rgba(16, 16, 18, 0) 50%, rgb(116, 16, 118) 100%);
                    animation-duration: ${items*5}s;
                    animation-name: moves;
                    animation-iteration-count: infinite;
                }
                @keyframes moves {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        -webkit-transform: translateX(-${items - 1}00%);
                        transform: translateX(-${items - 1}00%);
                    }
                }
            `}</style>
        </>
    );
}
export default CarouselOfHeaderImages;