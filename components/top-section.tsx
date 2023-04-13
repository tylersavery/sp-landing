import Image from 'next/image';
import styles from '../styles/TopSection.module.scss';
import headerStyles from '../styles/Header.module.scss';
import DownloadApp from './download-app';
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link';
import HamburgerMenu from './hamburguer';

const TopSection = () => {
    const { t } = useTranslation('common')

    return <section className={styles.section}>


        {/* <div className="phone-only">
            <div className="container">
                <div className="d-flex justify-content-between">
                    <HamburgerMenu />
                    <div>
                        <Link href="/" locale="english"><a className={`${headerStyles.link} ${headerStyles.link__small}`}>English</a></Link>
                        <span className={`${headerStyles.link} ${headerStyles.link__small} ${headerStyles.link__light}`}> | </span>
                        <Link href="/" locale="espanol"><a className={`${headerStyles.link} ${headerStyles.link__small}`}>Español</a></Link>
                    </div>
                </div>

            </div>
        </div> */}



        <div className="container">
            <div className={styles.balloon}>

            </div>
            <div>
                <h1>Welcome to Storyplace<br />where journaling<br />meets community.</h1>

                <div className={"d-flex align-items-center mt-5"}>
                    <a href="https://play.google.com/store/apps/details?id=com.storyplace" target='_blank' className="me-3" rel="noreferrer">
                        <Image src="/images/google-play.png" width={178} height={49} alt="Google Play" />
                    </a>
                    <a href="https://apps.apple.com/app/storyplace/id1289523039" target='_blank' className="me-3" rel="noreferrer">
                        <Image src="/images/app-store.png" width={178} height={49} alt="iOS App Store" />
                    </a>

                    <a href="https://app.storyplace.com/" className={styles.exploreWebLink}>explore web</a>
                </div>
            </div>

        </div>
    </section>

}


export default TopSection;