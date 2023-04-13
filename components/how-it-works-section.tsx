/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import styles from '../styles/HowItWorksSection.module.scss';
import Carousel from './carousel';
import MobileCarousel from './MobileCarousel';

import useTranslation from 'next-translate/useTranslation'


const HowItWorks = () => {
    const { t } = useTranslation('common')

    return (
        <section className={styles.section}>
            <div className="container pb-0">

                <div className="py-5">


                    <Image src="/images/diamond.svg" width={33} height={38} alt="diamond" />
                    <h2>Express yourself.</h2>
                    <p>We offer a safe space where you can share anything you want. No writing experience necessary. If you need inspiration use our prompts and join our challenges.</p>
                    <div className="py-3"></div>
                    <Image src="/images/diamond.svg" width={33} height={38} alt="diamond" />

                    <h2>Connect with a community.</h2>
                    <p>No scorekeeping, no judgment. This community focuses on empathy. Join circles that interest you, explore stories and interact with people.</p>
                    <div className="py-3"></div>
                    <Image src="/images/diamond.svg" width={33} height={38} alt="diamond" />

                    <h2>Sharing is caring.</h2>
                    <p>Your thoughts and feelings matter here. Our community understands that vulnerability is a strength and separates reading from agreeing.
                    </p>
                </div>

                <div className={styles.howItWorks}>
                    <div className={styles.howItWorksLine1}>How It</div>
                    <div className={styles.howItWorksLine2}>Works</div>
                </div>

            </div>
        </section>
    );
}


export default HowItWorks;