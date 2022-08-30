import styles from '../styles/OurStorySection.module.scss';
import DownloadApp from './download-app';
import YoutubeVideo from './youtube-video';


import useTranslation from 'next-translate/useTranslation'


const OurStorySection = () => {
    const { t } = useTranslation('common')


    return (
        <section className={styles.section}>
            <div className={styles.cornerTl}></div>
            <div className={styles.cornerTr}></div>
            <div className={styles.cornerBl}></div>
            <div className="container">
                <div className={styles.content}>
                    <div className="pt-5 pe-3">
                        <YoutubeVideo />
                    </div>
                    <div className="ps-3 pt-5">
                        <div className="non-phone-only py-5"></div>
                        <h3 className={styles.heading}>our story.</h3>
                        <div className={styles.quote}>
                            “{t('quote')}”
                        </div>
                        <div className={styles.quoteIvana}>Ivana De Maria</div>
                        <div className={styles.quoteFounder}>{t('Founder and CEO')}</div>
                    </div>
                </div>

                <div className={styles.downloadContainer}>
                    <DownloadApp />
                </div>
                <div className="py-5"></div>
            </div>
        </section>
    );
}


export default OurStorySection;