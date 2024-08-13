/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import styles from '../styles/AboutSection.module.scss';

import useTranslation from 'next-translate/useTranslation'


const AboutSection = () => {
    const { t, lang } = useTranslation('common')

    return (
        <section className={styles.section}>
            <div className="container">
                {/* <div className="pt-5 pb-0 pb-md-5">
                </div> */}
                <div className="pt-0 pt-md-2 pb-5">

                    <div className="row align-items-center">
                        <div className="col-12 col-md-6 d-none d-md-block text-center">
                            <Image src={lang == "espanol" ? "/images/demo-es.png" : "/images/demo-en.png"} width={322} height={444} alt="wellbeing, empathy, community." />
                        </div>
                        <div className="col-12 col-md-6 pt-4 pt-md-0">
                            <h2>{t('our-story')}</h2>
                            <p>{t('storyplace-is-a-socual-journaling')}</p>
                            <p>{t('a-modern-day-virtual-virtual-bonfire')}</p>
                            <p>{t('our-community-platform-focuses')}</p>
                            <p>{t('our-purpose')}</p>




                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default AboutSection;