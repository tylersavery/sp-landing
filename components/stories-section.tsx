/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import styles from '../styles/StoriesSection.module.scss';
import Carousel from './carousel';
import MobileCarousel from './MobileCarousel';

import useTranslation from 'next-translate/useTranslation'


const StoriesSection = () => {
    const { t } = useTranslation('common')

    return (
        <section className={styles.section}>
            <div className="container mt-5 pb-0">

                <div className="pt-5">
                    <h2 className="text-center">See what it's like</h2>

                </div>

                <div className="pt-4">
                    <Image style={{ width: "100%", height: "auto" }} sizes='100%' src="/images/story-cards.png" width={1166} height={300} alt="Stories" />
                </div>

                <div className="mt-3" style={{ opacity: 0.2 }}>
                    <Image style={{ width: "100%", height: "auto" }} sizes='100%' src="/images/story-cards-2.png" width={1165} height={159} alt="Stories" />
                </div>


            </div>

            <div className="pt-4 pb-5" style={{ backgroundColor: "#F0F0EA" }}>
                <div className="container text-center">
                    <a href="#" className="btn btn-outline-dark">Continue Reading &gt;</a>
                </div>

            </div>
        </section>
    );
}


export default StoriesSection;