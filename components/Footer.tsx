import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Footer.module.scss";
import DownloadApp from "./download-app";
import useTranslation from 'next-translate/useTranslation'


const Footer = () => {
    const { t, lang } = useTranslation('common')

    const handleHelp = (e: any) => {
        e.preventDefault()
        window.Intercom('show');
    }

    return <footer className={styles.footer}>
        <div className="container">
            <div className={styles.content}>
                <div className={styles.left}>



                    <div className="py-2 d-flex justify-content-center">
                        <ul className={styles.socials}>
                            <li><a href="https://www.instagram.com/mystoryplace" target="_blank" rel="noopener noreferrer"><Image src="/images/instagram.png" width={25} height={25} alt="instagram" /></a></li>
                            <li><a href="https://www.facebook.com/storyplacecommunity" target="_blank" rel="noopener noreferrer"><Image src="/images/facebook.png" width={25} height={25} alt="facebook" /></a></li>
                            <li><a href="https://twitter.com/mystoryplace" target="_blank" rel="noopener noreferrer"><Image src="/images/twitter.png" width={25} height={25} alt="twitter" /></a></li>
                            <li><a href="https://www.linkedin.com/company/storyplace/" target="_blank" rel="noopener noreferrer"><Image src="/images/linkedin.png" width={25} height={25} alt="linkedin" /></a></li>
                            <li><a href="https://tiktok.com/@mystoryplace" target="_blank" rel="noopener noreferrer"><Image src="/images/tiktok.png" width={25} height={25} alt="tiktok" /></a></li>

                        </ul>
                    </div>

                    <div className="d-flex flex-row flex-md-column align-items-center mt-1">

                        <div className="py-2">

                            <a href="https://apps.apple.com/app/storyplace/id1289523039" target='_blank' className="me-3 me-md-0" rel="noreferrer">
                                <Image src={lang == "espanol" ? "/images/app-store_es.png" : "/images/app-store.png"} width={178} height={49} alt="iOS App Store" />
                            </a>

                        </div>

                        <div className="py-2">
                            <a href="https://play.google.com/store/apps/details?id=com.storyplace" target='_blank' rel="noreferrer">
                                <Image src={lang == "espanol" ? "/images/google-play_es.png" : "/images/google-play.png"} width={178} height={49} alt="Google Play" />
                            </a>
                        </div>


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
                        <li><Link href="/faq"><a className={styles.link} >{t('FAQ')}</a></Link></li>
                        <li><a href="#" onClick={handleHelp} style={{ textDecoration: 'none' }}><a className={styles.link}>{t('Support')}</a></a></li>
                        <li><a href="mailto:support@storyplace.com" className={styles.link}>{t('Contact')}</a></li>
                        <li className="phone-only"><a className={styles.link} href="https://journal.storyplace.com/" target="_blank" rel="noopener noreferrer">{t('Use web version')}</a></li>
                    </ul>
                    <ul className={styles.linksColumn}>
                        <li><Link className={styles.link} href="/terms" target="_blank" rel="noopener noreferrer"><a className={styles.link}>{t('Terms & Conditions')}</a></Link></li>
                        <li><Link className={styles.link} href="/privacy" target="_blank" rel="noopener noreferrer"><a className={styles.link}>{t('Privacy')}</a></Link></li>
                        <li><Link className={styles.link} href="/content-guidelines" target="_blank" rel="noopener noreferrer"><a className={styles.link}>{t('Content Guidelines')}</a></Link></li>
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