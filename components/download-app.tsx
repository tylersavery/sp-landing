import Image from "next/image";
import Link from "next/link";

interface Props {
    leftAligned?: boolean;
    withWeb?: boolean;
}

export const DownloadApp = (props: Props) => {

    return <div className={`d-flex ${props.leftAligned ? '' : 'justify-content-center'} align-items-center`}>
        <div className="me-2">
            <a href="https://apps.apple.com/app/storyplace/id1289523039" target="_blank" rel="noopener noreferrer">
                <Image src="/images/ios.png" width={202} height={60} alt="Download on iOS App Store" />
            </a>
        </div>
        <div>
            <a href="https://play.google.com/store/apps/details?id=com.storyplace" target="_blank" rel="noopener noreferrer">
                <Image src="/images/android.png" width={202} height={60} alt="Download on Google Play" />
            </a>
        </div>
        {props.withWeb ?
            <div className="ms-3">
                <a href="https://app.storyplace.com/" className="text-white" style={{ fontWeight: 600, textDecoration: 'none' }}>Use Web Version</a>
            </div> : null}
    </div>
}


export default DownloadApp;