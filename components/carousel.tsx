
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import CarouselItem from './carousel-item';
import useTranslation from 'next-translate/useTranslation'


const Carousel = () => {

    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])
    const { t } = useTranslation('common')

    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">
                <div className="embla__slide">
                    <div className="container">
                        <div className="d-flex justify-content-between">
                            <CarouselItem image="/images/slide-1.png" title={t("Express yourself")} subtitle={t("in a safe space")} offsetY={64} />
                            <CarouselItem image="/images/slide-2.png" title={t("Share anonymously")} subtitle={t("using a Penname")} />
                            <CarouselItem image="/images/slide-3.png" title={t("Connect with people")} subtitle={t("from around the world")} offsetY={64} />
                        </div>
                    </div>
                </div>
                <div className="embla__slide">
                    <div className="container">
                        <div className="d-flex justify-content-between">
                            <CarouselItem image="/images/slide-4.png" title={t("Browse stories")} subtitle={t("based on your interests")} offsetY={64} />
                            <CarouselItem image="/images/slide-5.png" title={t("Engage with a community")} subtitle={t("that celebrates vulnerability and authenticity")} />
                            <CarouselItem image="/images/slide-6.png" title={t("Participate in story")} subtitle={t("competitions and challenges")} offsetY={64} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Carousel;