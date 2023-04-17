/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import styles from '../styles/HowItWorksSection.module.scss';

import useTranslation from 'next-translate/useTranslation'


const HowItWorks = () => {
    const { t } = useTranslation('common')

    return (
        <section className={styles.section}>
            <div className="container pb-0">

                <div className="py-5">

                    <div className="phone-only">
                        <div className={styles.howItWorksMobile} >
                            <div className={styles.howItWorksLine1}>{t('how-it')}</div>
                            <div></div>
                            <div className={styles.howItWorksLine2}>{t('works')}</div>
                        </div>
                    </div>

                    <Image src="/images/diamond.svg" width={33} height={38} alt="diamond" />
                    <h2>{t('express-yourself')}</h2>
                    <p>{t('express-yourself-p')}</p>
                    <div className="py-3"></div>
                    <Image src="/images/diamond.svg" width={33} height={38} alt="diamond" />

                    <h2>{t('connect-with-a-community')}</h2>
                    <p>{t('connect-with-a-community-p')}</p>
                    <div className="py-3"></div>
                    <Image src="/images/diamond.svg" width={33} height={38} alt="diamond" />

                    <h2>{t('sharing-is-caring')}</h2>
                    <p>{t('sharing-is-caring-p')}
                    </p>
                </div>
                <div className="non-phone-only">
                    <div className={styles.howItWorks} >
                        <div className={styles.howItWorksLine1}>{t('how-it')}</div>
                        <div className={styles.howItWorksLine2}>{t('works')}</div>
                    </div>
                </div>

            </div>
        </section>
    );
}


export default HowItWorks;