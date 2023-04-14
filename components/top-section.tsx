import Image from 'next/image';
import styles from '../styles/TopSection.module.scss';

import DownloadApp from './download-app';
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link';
import HamburgerMenu from './hamburguer';
import MobileHeader from './mobile-header';

const TopSection = () => {
    const { t } = useTranslation('common')

    return <div>

        <MobileHeader />

        <section className={styles.section}>


            <div className="container">
                <div className={styles.balloon}>

                </div>
                <div>
                    <h1>Welcome to Storyplace,<br />where journaling<br />meets community.</h1>

                    <div className={"d-flex align-items-center mt-5 flex-column flex-md-row"}>

                        <div>

                            <a href="https://play.google.com/store/apps/details?id=com.storyplace" target='_blank' className="me-2 me-md-3" rel="noreferrer">
                                <Image src="/images/google-play.png" width={178} height={49} alt="Google Play" />
                            </a>
                            <a href="https://apps.apple.com/app/storyplace/id1289523039" target='_blank' className="me-0 me-md-3 mt-3 mt-md-0" rel="noreferrer">
                                <Image src="/images/app-store.png" width={178} height={49} alt="iOS App Store" />
                            </a>
                        </div>

                        <a href="https://app.storyplace.com/" className={styles.exploreWebLink}>explore web</a>
                    </div>
                </div>

            </div>
        </section>
    </div>

}


export default TopSection;