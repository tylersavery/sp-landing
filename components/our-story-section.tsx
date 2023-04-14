import Image from 'next/image';
import styles from '../styles/OurStorySection.module.scss';
import DownloadApp from './download-app';
import useTranslation from 'next-translate/useTranslation'
import Youtube from 'react-youtube';
import { useRef, useState } from 'react';

const OurStorySection = () => {
    const { t } = useTranslation('common');

    const videoRef = useRef<any>();

    const [showYoutube, setShowYoutube] = useState<boolean>(false);


    return (
        <section className={styles.section}>
            <div className="container text-center">

                <div className={styles.videoContainer}>

                    {showYoutube ? (
                        <div className="ratio ratio-16x9">
                            <iframe src="https://www.youtube.com/embed/95tESCXEmLU?autoplay=1&modestbranding=1&playsinline=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

                        </div>
                    ) : (
                        <>
                            <Image src="/images/video-thumb.jpg" className={styles.thumbnail} width={1280} height={720} alt="Video" />
                            <div className={styles.cover} onClick={() => setShowYoutube(true)}>
                                <div>
                                    <h2>Our Story</h2>
                                    <p>Hear from our founder, Ivana de Maria, on how Storyplace plays a role in our society.</p>
                                    <div className="d-flex justify-content-center">

                                        <div className={styles.playButton}>
                                            <Image src="/images/play.png" width={70} height={70} alt="Play" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>

            </div>

        </section>
    );
}


export default OurStorySection;