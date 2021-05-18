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
                    overflow:hidden;
                    background:red;
                    grid-area:carrousel;
                }
                .carouselOfHeaderImages{
                    width: 100%;
                    display: grid;
                    grid-template-columns: repeat(${items},100%);
                    
                    

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