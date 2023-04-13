import styles from '../styles/OurStorySection.module.scss';
import DownloadApp from './download-app';
import YoutubeVideo from './youtube-video';
import useTranslation from 'next-translate/useTranslation'

const OurStorySection = () => {
    const { t } = useTranslation('common')


    return (
        <section className={styles.section}>
            <div className="container text-center">

                <YoutubeVideo />
            </div>

        </section>
    );
}


export default OurStorySection;