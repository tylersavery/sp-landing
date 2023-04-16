import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/AmbassadorSection.module.scss';
import useTranslation from 'next-translate/useTranslation'


const AmbassadorSection = () => {

    const { t } = useTranslation('common')

    return <div className={styles.section}>
        <div className="container py-5">

            <div className="row align-items-center">

                <div className="col-12 col-md-6">
                    <h2>{t('become-an-ambassador')}</h2>
                    <p>{t('our-community-of-ambassadors-aro')}</p>
                    <ul>

                        <li>{t('represent-storyplace-in-their-ci')}</li>
                        <li>{t('are-the-first-to-try-out-new-fea')}</li>
                        <li>{t('participate-in-calls-and-group-c')}</li>
                        <li>{t('suggest-story-topics-and-events')}</li>
                        <li>{t('host-storyplace-events-with-thei')}</li>
                    </ul>

                    <p>{t('if-you-are-interested-in-joining')}<br />
                        {t('email-us-at')}: <a href="mailto:ambassador@storyplace.com">ambassador@storyplace.com</a></p>

                </div>
                <div className="col-12 col-md-6">
                    <Image className="w-100" alt="map" src="/images/map-purple.png" width={1364} height={796} />
                </div>
            </div>
        </div>


    </div>
}

export default AmbassadorSection;