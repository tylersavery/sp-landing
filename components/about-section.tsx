/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import styles from '../styles/AboutSection.module.scss';
import Carousel from './carousel';
import MobileCarousel from './MobileCarousel';

import useTranslation from 'next-translate/useTranslation'


const AboutSection = () => {
    const { t } = useTranslation('common')

    return (
        <section className={styles.section}>
            <div className="container">
                <div className="py-5">
                    <Image src="/images/press.png" width={1077} height={42} alt="Press" />
                </div>
                <div className="pt-2 pb-5">

                    <div className="row align-items-center">
                        <div className="col-12 col-md-6">
                            <Image src="/images/tags.png" width={376} height={485} alt="wellbeing, empathy, community" />
                        </div>
                        <div className="col-12 col-md-6">
                            <h2>Social journaling is…</h2>
                            <h3>Sharing and caring</h3>
                            <p>Express your honest thoughts, feelings, and stories in a safe space, with a community that appreciates authenticity and celebrates vulnerability.</p>

                            <h3>Processing the present</h3>
                            <p>As humans we have a need to process and understand our world and our existence. Journaling is an easy and effective way to process your day to day. By doing it so in community, you also have the words and support of others to help you navigate.</p>

                            <h3>Communal catharsis</h3>
                            <p>Communal catharsis is - quite simply - catharsis reached through community. It’s finding a new peace, a new clarity, or a new inspiration by sharing and processing your life with others and learning about life through other people’s experiences. Together we are creating a journal for the collective conciousness.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default AboutSection;