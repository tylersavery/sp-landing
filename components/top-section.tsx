import Image from 'next/image';
import styles from '../styles/TopSection.module.scss';
import headerStyles from '../styles/Header.module.scss';
import DownloadApp from './download-app';
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link';

const TopSection = () => {
    const { t } = useTranslation('common')

    return <section className={styles.section}>
        <div className={styles.topPhoto}></div>
        <div className="phone-only">
            <div className="container">

                <div className="d-flex justify-content-between">
                    <div></div>
                    <div>
                        <Link href="/" locale="en"><a className={`${headerStyles.link} ${headerStyles.link__small}`}>English</a></Link>
                        <span className={`${headerStyles.link} ${headerStyles.link__small} ${headerStyles.link__light}`}> | </span>
                        <Link href="/" locale="es"><a className={`${headerStyles.link} ${headerStyles.link__small}`}>Español</a></Link>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.preview}></div>
        <div className="container">

            <div className={styles.mobileLogo}>
                <div>
                    <Image src="/images/logo.svg" width={366} height={100} alt="Storyplace"></Image>
                </div>
            </div>
            <h1 className={styles.heading}>{t('share your stories')},<br />{t('find your community')}</h1>
            <div className="py-2 py-md-4">
                <p className={styles.p}>{t('An empathy-driven app where people')}<br className="non-phone-only" />{t('around the world share stories')}</p>
            </div>

            <div className={styles.downloadAppContainer}>
                <div className="non-phone-only">
                    <DownloadApp leftAligned withWeb />
                </div>

                <div className="phone-only">
                    <DownloadApp />
                </div>
            </div>
            <div className={styles.previewMobile}>
                <Image src="/images/preview.png" width={558} height={516} alt="Preview" />
            </div>
            <div className="pt-5 pb-2">
                <h4 className={styles.asSeenInHeading}>{t('as seen in')}:</h4>
                <div className={styles.asSeenIn}>
                    <Image src="/images/as-seen-in.png" width={959} height={84} alt="Logos" />
                </div>
                <div className={styles.asSeenInMobile}>
                    <Image src="/images/as-seen-in-mobile.png" width={1069} height={188} alt="Logos" />
                </div>
            </div>
        </div>
    </section>

}


export default TopSection;