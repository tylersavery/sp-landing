import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from '../styles/Header.module.scss';
import useTranslation from 'next-translate/useTranslation'

const Header = () => {
    const [offset, setOffset] = useState(0);
    const { t } = useTranslation('common')

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleHelp = () => {
        window.Intercom('show');
    }

    return <header className={`${styles.header} ${offset > 80 ? styles.header__opaque : ''}`}>


        <div className="container">

            <div className="d-flex p-2 justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <Link href="/">
                        <Image src={"/images/logo.svg"} width={200} height={60} alt="Storyplace" />
                    </Link>
                    <div className="mx-4"></div>
                    <div className="mx-4">
                        <Link href="https://app.storyplace.com/app/home" target={"_blank"}><a className={styles.link}>{t('Home')}</a></Link>
                    </div>
                    <div className="mx-4">
                        <Link href="https://app.storyplace.com/app/explore" target={"_blank"}><a className={styles.link}>{t('Explore')}</a></Link>
                    </div>
                    <div className="mx-4">
                        <Link href="https://app.storyplace.com/app/circles" target={"_blank"}><a className={styles.link}>{t('Circles')}</a></Link>
                    </div>
                </div>

                <div className="d-flex align-items-center">
                    <div className="mx-4">
                        <Link href="/" locale="english"><a className={`${styles.link} ${styles.link__small}`}>EN</a></Link>
                        <span className={`${styles.link} ${styles.link__small} ${styles.link__light}`}> | </span>
                        <Link href="/" locale="espanol"><a className={`${styles.link} ${styles.link__small}`}>ES</a></Link>
                    </div>
                    <div className="mx-4">
                        <Link href="https://app.storyplace.com/auth/register" target={"_blank"}><a className={styles.link}>{t('Sign up')}</a></Link>
                    </div>
                    <div className="mx-4">
                        <Link href="https://app.storyplace.com/auth/login" target={"_blank"}><a className={styles.link}>{t('Login')}</a></Link>
                    </div>
                </div>
            </div>
        </div>
    </header>
}

export default Header;