import Figure from "components/Figure";
import { image_header } from '../hero.module.css'
import { wrapper,slide_grad } from './index.module.css'
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
 import "swiper/css";
 import "swiper/css/pagination";
 import "swiper/css/navigation";
import { isEmpty } from "utils/isEmpty";

const CarouselOfHeaderImages = ({ children, items }) => {
    const isAutoplay = items.length <= 1 
                        ? false 
                        :   {
                                delay: 1800,
                                disableOnInteraction: false,
                            }
    return (
        <>  
            <Swiper
                centeredSlides={true}
                autoplay={isAutoplay}
                effect="fade"
                loop={true}
                // pagination={{
                //     clickable: true,
                // }}
                modules={[Autoplay, Pagination, Navigation]}
                className={wrapper}>
                {(!isEmpty(items)) &&
                    items
                        .filter((image) => image !== null)
                        .reverse()
                        .map((image, index) => (
                            // (image !== null) && (
                            <SwiperSlide key={index} className={slide_grad}>
                                <Figure
                                    key={index}
                                    src={image}
                                    className={image_header}
                                    height={700}
                                    borderRadius={false} />
                            </SwiperSlide>
                        )
                        )}
            </Swiper>

        </>
    );
}
export default CarouselOfHeaderImages;