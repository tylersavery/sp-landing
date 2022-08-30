import Image from "next/image";
import Link from "next/link";

interface Props {
    leftAligned?: boolean;
}

export const DownloadApp = (props: Props) => {

    return <div className={`d-flex ${props.leftAligned ? '' : 'justify-content-center'}`}>
        <div className="me-2">
            <Link href="#">
                <Image src="/images/ios.png" width={202} height={60} alt="Download on iOS App Store" />
            </Link>
        </div>
        <div>
            <Link href="#">
                <Image src="/images/android.png" width={202} height={60} alt="Download on Google Play" />
            </Link>
        </div>
    </div>
}


export default DownloadApp;