import Image from "next/image";
import styles from '../styles/CarouselItem.module.scss';

interface Props {
    image: string;
    title: string;
    subtitle: string;
    offsetY?: number;
}

const CarouselItem = (props: Props) => {
    return <div className={styles.container} style={{ top: props.offsetY }}>
        <Image src={props.image} width={365} height={387} alt={props.title} />
        <div className={styles.title}>{props.title}</div>
        <div className={styles.subtitle}>{props.subtitle}</div>
    </div>
}

export default CarouselItem;
