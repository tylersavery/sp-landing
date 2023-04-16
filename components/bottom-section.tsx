import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/BottomSection.module.scss';
import useTranslation from 'next-translate/useTranslation'


const BottomSection = () => {

    const { t } = useTranslation('common')

    return <div className={styles.section}>
        <div className="container py-0 py-md-5 pb-5 text-center position-relative">
            <div className={styles.squiggle}>
                <Image src="/images/squiggle1.png" width={550} height={382} alt="squiggle" />
            </div>
            <div className="py-5 d-none d-md-block"></div>
            <h2>Storyplace</h2>
            <div className="py-2"></div>

            <p>{t('share-your-stories-and-find-your')}</p>
            <div className="py-2"></div>
            <a href="https://app.storyplace.com/" className={styles.button}>{t('start-sharing')}</a>
            <div className="py-2"></div>
        </div>
    </div>
}

export default BottomSection;