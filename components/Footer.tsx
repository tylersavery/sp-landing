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
                    <h4>{t('we want to share')}<br />{t('your story')}.</h4>
                    <div className="py-3"></div>
                    <DownloadApp leftAligned />
                </div>
                <div className={styles.center}>
                    <Image src="/images/white-fire.png" width={165} height={188} alt="join the fire" />

                </div>
                <div className={styles.right}>
                    <ul className={styles.linksColumn}>
                        <li><Link href="/"><a className={styles.link}>{t('About')}</a></Link></li>
                        <li><a className={styles.link} href="https://storyplace.com/en/faq">{t('FAQ')}</a></li>
                        <li><Link href="#"><a className={styles.link}>{t('Support')}</a></Link></li>
                        <li><a href="https://storyplace.com/en/contact" className={styles.link}>{t('Contact')}</a></li>
                        <li className="phone-only"><a className={styles.link} href="https://storyplace.com/home" target="_blank" rel="noopener noreferrer">{t('Use web version')}</a></li>
                    </ul>
                    <ul className={styles.linksColumn}>
                        <li><a className={styles.link} href="https://storyplace.com/terms" target="_blank" rel="noopener noreferrer">{t('Terms & Conditions')}</a></li>
                        <li><a className={styles.link} href="https://storyplace.com/privacy" target="_blank" rel="noopener noreferrer">{t('Privacy')}</a></li>
                        <li><a className={styles.link} href="https://storyplace.com/en/content-guidelines" target="_blank" rel="noopener noreferrer">{t('Content Guidelines')}</a></li>
                        <li><a className={styles.link} href="https://storyplace.com/en/copyright-claim" target="_blank" rel="noopener noreferrer">{t('Copyright Claim')}</a></li>
                    </ul>

                    <ul className={styles.socials}>
                        <li><a href="https://www.instagram.com/mystoryplace" target="_blank" rel="noopener noreferrer"><Image src="/images/instagram.png" width={25} height={25} alt="instagram" /></a></li>
                        <li><a href="https://www.facebook.com/storyplacecommunity" target="_blank" rel="noopener noreferrer"><Image src="/images/facebook.png" width={25} height={25} alt="facebook" /></a></li>
                        <li><a href="https://twitter.com/mystoryplace" target="_blank" rel="noopener noreferrer"><Image src="/images/twitter.png" width={25} height={25} alt="twitter" /></a></li>
                        <li><a href="https://www.linkedin.com/company/storyplace/" target="_blank" rel="noopener noreferrer"><Image src="/images/linkedin.png" width={25} height={25} alt="linkedin" /></a></li>
                        <li><a href="https://tiktok.com/@mystoryplace" target="_blank" rel="noopener noreferrer"><Image src="/images/tiktok.png" width={25} height={25} alt="tiktok" /></a></li>

                    </ul>
                </div>
            </div>
        </div>
        <div className="py-4">
            <div className={styles.copyright}>&copy; 2022 StoryPlace Inc. {t('All Rights Reserved')}</div>
        </div>
    </footer>
}


export default Footer;