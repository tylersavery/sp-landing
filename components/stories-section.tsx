/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import styles from '../styles/StoriesSection.module.scss';

import useTranslation from 'next-translate/useTranslation'


const StoriesSection = () => {
    const { t, lang } = useTranslation('common')

    return (
        <section className={styles.section}>
            <div className="container mt-5 pb-0">

                <div className="pt-0 pt-md-5">
                    <h2 className="text-center">{t('see-what-its-like')}</h2>

                </div>

                <a href="https://journal.storyplace.com/" >
                    <div className="pt-4">
                        <Image style={{ width: "100%", height: "auto" }} sizes='100%' src={lang == "espanol" ? "/images/story-cards_es.png" : "/images/story-cards.png"} width={2422} height={625} alt="Stories" />
                    </div>

                    <div className="mt-3" style={{ opacity: 0.2 }}>
                        <Image style={{ width: "100%", height: "auto" }} sizes='100%' src={lang == "espanol" ? "/images/story-cards-2_es.png" : "/images/story-cards-2.png"} width={2422} height={335} alt="Stories" />
                    </div>
                </a>


            </div>

            <div className="pt-4 pb-5" >
                <div className="container text-center">
                    <a href="https://journal.storyplace.com/" className="btn btn-outline-dark">{t('continue-reading')} &gt;</a>
                </div>

            </div>
        </section>
    );
}


export default StoriesSection;