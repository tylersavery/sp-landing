import Image from 'next/image';
import styles from '../styles/TopSection.module.scss';

import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import MobileHeader from './mobile-header';

const TopSection = () => {
    const { t, lang } = useTranslation('common')

    const router = useRouter()

    const language = router.locale;

    console.log(language);

    return <div>

        <MobileHeader />

        <section className={styles.section}>


            <div className="container">

                <div>
                    <div className={styles.titleContainer}>

                        <h1 className={styles.greenText}>{t('Welcome to Storyplace,')}</h1 >
                        <h2 className={styles.blueText}>{t('hero-subtitle')}</h2>


                    </div>
                    <div className={"d-flex flex-row justify-content-center  mt-4"}>

                        <div className="d-flex flex-col flex-md-row">

                            <a href="https://play.google.com/store/apps/details?id=com.storyplace" target='_blank' className="me-4" rel="noreferrer">
                                <Image src={lang == "espanol" ? "/images/google-play_es.png" : "/images/google-play.png"} width={178} height={49} alt="Google Play" />
                            </a>

                            <a href="https://apps.apple.com/app/storyplace/id1289523039" target='_blank' className="" rel="noreferrer">
                                <Image src={lang == "espanol" ? "/images/app-store_es.png" : "/images/app-store.png"} width={178} height={49} alt="iOS App Store" />
                            </a>


                        </div>

                    </div>

                    <div className={"d-flex flex-row justify-content-center mt-4"}>


                        <a href="https://journal.storyplace.com/" className={styles.exploreWebLink}>{t('Use web version')}</a>

                    </div>
                </div>

            </div>
        </section>
    </div>

}


export default TopSection;