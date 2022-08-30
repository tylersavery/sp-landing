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

    return <header className={`${styles.header} ${offset > 100 ? styles.header__opaque : ''}`}>


        <div className="container">

            <div className="d-flex p-2 justify-content-between align-items-center">
                <Link href="/">
                    <Image src={"/images/logo.svg"} width={260} height={80} alt="Storyplace" />
                </Link>

                <div className="d-flex align-items-center">
                    <div className="mx-4">
                        <Link href="/"><a className={styles.link}>{t('About')}</a></Link>
                    </div>
                    <div className="mx-4">
                        <Link href="/"><a className={styles.link}>{t('Help')}</a></Link>
                    </div>

                    <div className="mx-4">
                        <Link href="https://google.com">
                            <div className={styles.button}>
                                <a className={styles.link}>{t('Download App')}</a>
                            </div>
                        </Link>
                    </div>

                    <div className="mx-4">
                        <Link href="/"><a className={`${styles.link} ${styles.link__small}`}>{t('Use web version')}</a></Link>
                    </div>
                    <div className="mx-4">
                        <Link href="/" locale="en"><a className={`${styles.link} ${styles.link__small}`}>English</a></Link>
                        <span className={`${styles.link} ${styles.link__small} ${styles.link__light}`}> | </span>
                        <Link href="/" locale="es"><a className={`${styles.link} ${styles.link__small}`}>Español</a></Link>
                    </div>
                </div>
            </div>
        </div>
    </header>
}

export default Header;