import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/AmbassadorSection.module.scss';
import useTranslation from 'next-translate/useTranslation'


const AmbassadorSection = () => {

    const { t } = useTranslation('common')

    return <div className={styles.section}>
        <div className={styles.map}></div>
        <div className="container pt-3 pb-3">
            <div className={styles.logoContainer}>
                <Image src={"/images/logo.svg"} width={430} height={124} alt="Storyplace" />
            </div>
            <div className={styles.heading}>{t('become an ambassador')}.</div>
            <div className={styles.subheading}>{t('Our community of ambassadors around the world')}:</div>
            <ul className={styles.list}>
                <li>{t('Represent Storyplace in their city')}</li>
                <li>{t('Are the first to try out new features')}</li>
                <li>{t('Participate in calls and group chats')}</li>
                <li>{t('Suggest story topics and events')}</li>
            </ul>

        </div>

        <div className="container">
            <div style={{ marginLeft: -32 }}>
                <Image src="/images/squiggle.png" width={1016} height={15} alt="squiggle" />
            </div>
        </div>

        <div className="container pt-3 pb-5">
            <p className={styles.emailBody}>{t('If you are interested in joining the family email us at')} <Link href="mailto:ambassador@storyplace.com">
                <a className={styles.emailLink}>ambassador@storyplace.com</a>
            </Link>
            </p>
        </div>
        <div className={styles.photo}></div>

    </div>
}

export default AmbassadorSection;