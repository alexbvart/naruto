const CarouselOfHeaderImages = ({children,items}) => {
    return ( 
        <>
            <div className="wrapper">
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
                    position: fixed;
                    width: ${items}00%;
                    height: 100%;
                    background-image: linear-gradient(180deg, rgba(16, 16, 18, 0) 50%, #15171B 100%);
                    background-position: center;
                    background-size: cover;
                    background-repeat: no-repeat;
                }

                .carouselOfHeaderImages{
                    width: 100%;
                    height:100%;

                    display: grid;
                    grid-template-columns: repeat(${items},100%);
                    background-image: linear-gradient(180deg, rgba(16, 16, 18, 0) 50%, rgb(116, 16, 118) 100%);
                    
                    

                    animation: moves ${items*3}s linear infinite;
                    @keyframes moves {
                        0% {
                            transform: translateX(0);
                        }
                        100% {
                            -webkit-transform: translateX(-300%);
                            transform: translateX(-${items - 1}00%);
                        }
                        }

                    @keyframes navigate {
                        10% {
                            transform: rotate(3deg) translate(-50px, 2vh);
                        }
                        50% {
                            transform: rotate(-4deg) translate(-2vh, 50px);
                        }
                        25%,
                        75% {
                            transform: rotate(6deg) translate(50px, 2vh);
                        }
                    }
                }
            `}</style>
        </>
    );
}
export default CarouselOfHeaderImages;