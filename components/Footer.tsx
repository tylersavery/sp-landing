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
                        <li><Link href="#"><a className={styles.link}>{t('About')}</a></Link></li>
                        <li><Link href="#"><a className={styles.link}>{t('FAQ')}</a></Link></li>
                        <li><Link href="#"><a className={styles.link}>{t('Support')}</a></Link></li>
                        <li><Link href="#"><a className={styles.link}>{t('Contact')}</a></Link></li>
                    </ul>
                    <ul className={styles.linksColumn}>
                        <li><Link href="#"><a className={styles.link}>{t('Terms & Conditions')}</a></Link></li>
                        <li><Link href="#"><a className={styles.link}>{t('Privacy')}</a></Link></li>
                        <li><Link href="#"><a className={styles.link}>{t('Content Guidelines')}</a></Link></li>
                        <li><Link href="#"><a className={styles.link}>{t('Copyright Claim')}</a></Link></li>
                    </ul>

                    <ul className={styles.socials}>
                        <li><Link href="#"><Image src="/images/instagram.png" width={25} height={25} alt="instagram" /></Link></li>
                        <li><Link href="#"><Image src="/images/facebook.png" width={25} height={25} alt="facebook" /></Link></li>
                        <li><Link href="#"><Image src="/images/twitter.png" width={25} height={25} alt="twitter" /></Link></li>
                        <li><Link href="#"><Image src="/images/linkedin.png" width={25} height={25} alt="linkedin" /></Link></li>
                        <li><Link href="#"><Image src="/images/tiktok.png" width={25} height={25} alt="tiktok" /></Link></li>

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