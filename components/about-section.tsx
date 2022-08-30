/* eslint-disable react/no-unescaped-entities */
import styles from '../styles/AboutSection.module.scss';
import Carousel from './carousel';
import MobileCarousel from './MobileCarousel';

import useTranslation from 'next-translate/useTranslation'


const AboutSection = () => {
    const { t } = useTranslation('common')

    return (
        <section className={styles.section}>
            <div className={styles.corner}></div>
            <div className="container">
                <h2 className={styles.heading}>{t("it's not about your selfie")},<br />{t("it's about your story")}.</h2>
            </div>
            <div className="py-4" />

            <div className="phone-only">

                <MobileCarousel />
            </div>
            <div className="non-phone-only">
                <Carousel />

            </div>
        </section>
    );
}


export default AboutSection;