/* eslint-disable react/no-unescaped-entities */
import { NextPage } from "next"
import { AppHead } from "../components/app-head";
import MobileHeader from "../components/mobile-header";
import styles from '../styles/Legal.module.scss';
import Image from "next/image";
import LegalHeader from "../components/legal-header";
import Footer from "../components/Footer";
import LegalContainer from "../components/legal-container";



const Faq: NextPage = () => {

    return (
        <>
            <LegalContainer>

                <h2>Frequently Asked Questions</h2>
                <h3>How do I create an account?</h3>

                <p>
                    You can create an account through our website or by downloading our App for iOS and Android.
                </p>
                <h3>Is there a cost?</h3>

                <p>
                    Creating an account on StoryPlace is FREE.
                    StoryPlace PRO is our paid subscription that offers access to additional tools and resources
                </p>


                <h3>Who owns my stories?</h3>

                <p>YOU DO. As it should be. StoryPlace does not take ownership of your stories.</p>

                <h3>Do I have to be a writer to participate?</h3>

                <p>StoryPlace is not only for writers, it's for ANYONE with a story. We all have stories to tell and we want to hear them all. No writing experience is necesarry or required.</p>
            </LegalContainer>

        </>

    )
}


export default Faq;