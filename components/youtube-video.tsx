import Image from "next/image";
import styles from "../styles/YoutubeVideo.module.scss";
import Youtube from 'react-youtube';

const YoutubeVideo = () => {

    return <div className={styles.container}>
        <Youtube videoId="95tESCXEmLU" iframeClassName={styles.player} style={{ width: '100%' }} />
        {/* <Image src="/images/youtube-thumbnail.png" width={708} height={377} alt="Youtube Thumbnail" /> */}
    </div>
}

export default YoutubeVideo;