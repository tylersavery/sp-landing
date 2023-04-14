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

                <a href="https://app.storyplace.com/" >
                    <div className="pt-4">
                        <Image style={{ width: "100%", height: "auto" }} sizes='100%' src="/images/story-cards.png" width={2422} height={625} alt="Stories" />
                    </div>

                    <div className="mt-3" style={{ opacity: 0.2 }}>
                        <Image style={{ width: "100%", height: "auto" }} sizes='100%' src="/images/story-cards-2.png" width={2422} height={335} alt="Stories" />
                    </div>
                </a>


            </div>

            <div className="pt-4 pb-5" style={{ backgroundColor: "#F0F0EA" }}>
                <div className="container text-center">
                    <a href="https://app.storyplace.com/" className="btn btn-outline-dark">Continue Reading &gt;</a>
                </div>

            </div>
        </section>
    );
}


export default StoriesSection;