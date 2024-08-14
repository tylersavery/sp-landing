import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/BottomSection.module.scss';
import useTranslation from 'next-translate/useTranslation'


const BottomSection = () => {

    const { t, lang } = useTranslation('common')

    return <div className={styles.section}>
        <div className="container py-5 pb-5 text-center position-relative">

            <div className="flex flex-row">

                <Image src="/images/campfire.svg" width={77} height={73} alt="join the fire" />

                <div className="py-1"> </div>
                <img src="/images/wordmark.svg" />
            </div>


            <div className={"d-flex flex-row justify-content-center  mt-4"}>

                <div className="d-flex flex-col flex-md-row">

                    <a href="https://play.google.com/store/apps/details?id=com.storyplace" target='_blank' className="me-4" rel="noreferrer">
                        <Image src={lang == "espanol" ? "/images/google-play_es.png" : "/images/google-play.png"} width={178} height={49} alt="Google Play" />
                    </a>

                    <a href="https://apps.apple.com/app/storyplace/id1289523039" target='_blank' className="" rel="noreferrer">
                        <Image src={lang == "espanol" ? "/images/app-store_es.png" : "/images/app-store.png"} width={178} height={49} alt="iOS App Store" />
                    </a>


                </div>

            </div>

            <div className={"d-flex flex-row justify-content-center mt-4"}>

                <a href="https://journal.storyplace.com/" className={styles.exploreWebLink}>{t('Use web version')}</a>

            </div>
        </div>
    </div>
}

export default BottomSection;