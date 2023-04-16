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
                    <h2>Become an ambassador.</h2>
                    <p>Our community of ambassadors around the world:</p>
                    <ul>

                        <li>Represent Storyplace in their city</li>
                        <li>Are the first to try out new features</li>
                        <li>Participate in calls and group chats</li>
                        <li>Suggest story topics and events</li>
                        <li>Host Storyplace events with their community</li>
                    </ul>

                    <p>If you are interested in joining the family,<br />
                        email us at: <a href="mailto:ambassador@storyplace.com">ambassador@storyplace.com</a></p>

                </div>
                <div className="col-12 col-md-6">
                    <Image className="w-100" alt="map" src="/images/map-purple.png" width={1364} height={796} />
                </div>
            </div>
        </div>


    </div>
}

export default AmbassadorSection;