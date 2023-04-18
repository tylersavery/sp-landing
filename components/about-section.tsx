/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import styles from '../styles/AboutSection.module.scss';

import useTranslation from 'next-translate/useTranslation'


const AboutSection = () => {
    const { t, lang } = useTranslation('common')

    return (
        <section className={styles.section}>
            <div className="container">
                <div className="pt-5 pb-0 pb-md-5">
                    <Image src="/images/press.png" width={1077} height={42} alt="Press" />
                </div>
                <div className="pt-0 pt-md-2 pb-5">

                    <div className="row align-items-center">
                        <div className="col-12 col-md-6 d-none d-md-block">
                            <Image src={lang == "espanol" ? "/images/tags_es.png?v=2" : "/images/tags.png?v=2"} width={376} height={485} alt="wellbeing, empathy, community" />
                        </div>
                        <div className="col-12 col-md-6 pt-md-5 pt-4 pt-md-0">
                            <h2>{t('social-journaling-is')}</h2>
                            <h3>{t('sharing-and-caring')}</h3>
                            <p>{t('sharing-and-caring-p')}</p>

                            <h3>{t('processing-the-present')}</h3>
                            <p>{t('processing-the-present-p')}</p>

                            <h3>{t('communal-catharsis')}</h3>
                            <p>{t('communal-catharsis-p')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default AboutSection;