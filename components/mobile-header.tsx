import Link from "next/link";
import HamburgerMenu from "./hamburguer";
import styles from '../styles/TopSection.module.scss';

import headerStyles from '../styles/Header.module.scss';
import Image from "next/image";


const MobileHeader = () => {
    return (
        <div className="phone-only">
            <div className={styles.mobileMenu}>

                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">

                            <HamburgerMenu />
                            <div style={{ width: 46 }}></div>
                            <div style={{ height: 30, position: 'relative', top: 3 }}>

                                <Image src="/images/wordmark.svg" width={130} height={30} alt="Storyplace" />
                            </div>
                        </div>
                        <div>
                            <Link href="/" locale="english"><a className={`${headerStyles.link} ${headerStyles.link__small}`}>English</a></Link>
                            <span className={`${headerStyles.link} ${headerStyles.link__small} ${headerStyles.link__light}`}> | </span>
                            <Link href="/" locale="espanol"><a className={`${headerStyles.link} ${headerStyles.link__small}`}>Español</a></Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MobileHeader;