import Link from 'next/link'
import { push as Menu } from 'react-burger-menu'
import Image from 'next/image';
import styles from '../styles/Header.module.scss';
import useTranslation from 'next-translate/useTranslation'

const HamburgerMenu = () => (<div className='d-flex'>
    <Menu customBurgerIcon={<HamburgerIcon />} noOverlay >
        <Links />
    </Menu>
</div>)

const HamburgerIcon = () => (<Image src="/images/hamburguer.svg" width={30} height={30} alt="Storyplace"></Image>)

export const Links = () => { 
    const { t } = useTranslation('common');
    return <div className='d-flex flex-column'>
        <div className="mx-4 my-3">
            <Link href="https://app.storyplace.com/app/home" target={"_blank"}><a className={styles.link}>{t('Home')}</a></Link>
        </div>
        <div className="mx-4 my-3">
            <Link href="https://app.storyplace.com/app/explore" target={"_blank"}><a className={styles.link}>{t('Explore')}</a></Link>
        </div>
        <div className="mx-4 my-3">
            <Link href="https://app.storyplace.com/app/circles" target={"_blank"}><a className={styles.link}>{t('Circles')}</a></Link>
        </div>
    </div>
}

export default HamburgerMenu