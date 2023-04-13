import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/BottomSection.module.scss';
import useTranslation from 'next-translate/useTranslation'


const BottomSection = () => {

    const { t } = useTranslation('common')

    return <div className={styles.section}>
        <div className="container py-5 text-center">

            <h2>Storyplace</h2>
            <div className="py-2"></div>

            <p>Share your stories and find your community.</p>
            <div className="py-2"></div>
            <a href="#" className={styles.button}>Start sharing</a>
            <div className="py-2"></div>

        </div>


    </div>
}

export default BottomSection;