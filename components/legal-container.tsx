/* eslint-disable react/no-unescaped-entities */
import { NextPage } from "next"
import { AppHead } from "../components/app-head";
import MobileHeader from "../components/mobile-header";
import styles from '../styles/Legal.module.scss';
import Image from "next/image";
import LegalHeader from "../components/legal-header";
import Footer from "../components/Footer";
import { ReactNode } from "react";



interface Props {
    children: ReactNode;
}

const LegalContainer = (props: Props) => {

    return (
        <>
            <AppHead />
            <MobileHeader />

            <LegalHeader />
            <div style={{ height: 60 }}></div>
            <main>
                <section className={styles.section}>
                    <div className="container">
                        {props.children}

                    </div>
                </section>

            </main>

            <div className="py-4"></div>

            <Footer />
        </>

    )
}


export default LegalContainer;