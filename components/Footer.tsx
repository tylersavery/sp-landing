import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Footer.module.scss";
import DownloadApp from "./download-app";
import useTranslation from 'next-translate/useTranslation'


const Footer = () => {
    const { t } = useTranslation('common')

    return <footer className={styles.footer}>
        <div className="container">
            <div className={styles.content}>
                <div className={styles.left}>
                    <div className="py-2">
                        <a href="https://play.google.com/store/apps/details?id=com.storyplace" target='_blank' className="me-3" rel="noreferrer">
                            <Image src="/images/google-play.png" width={178} height={49} alt="Google Play" />
                        </a>
                    </div>

                    <div className="py-2">

                        <a href="https://apps.apple.com/app/storyplace/id1289523039" target='_blank' className="me-3" rel="noreferrer">
                            <Image src="/images/app-store.png" width={178} height={49} alt="iOS App Store" />
                        </a>

                    </div>

                    <div className="py-2">
                        <ul className={styles.socials}>
                            <li><a href="https://www.instagram.com/mystoryplace" target="_blank" rel="noopener noreferrer"><Image src="/images/instagram.png" width={25} height={25} alt="instagram" /></a></li>
                            <li><a href="https://www.facebook.com/storyplacecommunity" target="_blank" rel="noopener noreferrer"><Image src="/images/facebook.png" width={25} height={25} alt="facebook" /></a></li>
                            <li><a href="https://twitter.com/mystoryplace" target="_blank" rel="noopener noreferrer"><Image src="/images/twitter.png" width={25} height={25} alt="twitter" /></a></li>
                            <li><a href="https://www.linkedin.com/company/storyplace/" target="_blank" rel="noopener noreferrer"><Image src="/images/linkedin.png" width={25} height={25} alt="linkedin" /></a></li>
                            <li><a href="https://tiktok.com/@mystoryplace" target="_blank" rel="noopener noreferrer"><Image src="/images/tiktok.png" width={25} height={25} alt="tiktok" /></a></li>

                        </ul>
                    </div>
                </div>

                <div className={styles.center}>
                    <div className="non-phone-only">

                        <Image src="/images/campfire.svg" width={192} height={201} alt="join the fire" />
                        <div className={styles.copyright}>&copy; {new Date().getFullYear()} Storyplace Inc.<br />{t('All Rights Reserved')}</div>
                    </div>

                </div>
                <div className={styles.right}>
                    <ul className={styles.linksColumn}>
                        <li><Link href="/"><a className={styles.link}>{t('About')}</a></Link></li>
                        <li><a className={styles.link} href="https://old.storyplace.com/en/faq">{t('FAQ')}</a></li>
                        <li><Link href="#"><a className={styles.link}>{t('Support')}</a></Link></li>
                        <li><a href="https://old.storyplace.com/en/contact" className={styles.link}>{t('Contact')}</a></li>
                        <li className="phone-only"><a className={styles.link} href="https://app.storyplace.com/" target="_blank" rel="noopener noreferrer">{t('Use web version')}</a></li>
                    </ul>
                    <ul className={styles.linksColumn}>
                        <li><a className={styles.link} href="https://old.storyplace.com/terms" target="_blank" rel="noopener noreferrer">{t('Terms & Conditions')}</a></li>
                        <li><a className={styles.link} href="https://old.storyplace.com/privacy" target="_blank" rel="noopener noreferrer">{t('Privacy')}</a></li>
                        <li><a className={styles.link} href="https://old.storyplace.com/en/content-guidelines" target="_blank" rel="noopener noreferrer">{t('Content Guidelines')}</a></li>
                        <li><a className={styles.link} href="https://old.storyplace.com/en/copyright-claim" target="_blank" rel="noopener noreferrer">{t('Copyright Claim')}</a></li>
                    </ul>


                </div>
            </div>
        </div>
        <div className="phone-only">

            <div className={styles.copyright}>&copy; {new Date().getFullYear()} Storyplace Inc.<br />{t('All Rights Reserved')}</div>
        </div>
        <div className="py-4">

        </div>
    </footer>
}


export default Footer;