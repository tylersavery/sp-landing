/* eslint-disable react/no-unescaped-entities */
import { NextPage } from "next"
import LegalContainer from "../components/legal-container";
import { useRouter } from "next/router";

const UnsubscribePage: NextPage = () => {
    const uuid = useRouter()?.query?.uuid;
    const token = useRouter()?.query?.token;

    const handleUnsubscribe = (e: any) => {

        if (uuid === undefined || token === undefined) {
            alert("A problem occurred while unsubscribing. Please try again later.");
            return;
        }

        const payload = {
            uuid: uuid,
            token: token,
        }

        fetch("https://service.storyplace.com/api/auth/email-unsubscribe/", {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                "Content-Type": "application/json"
            }
        }).then((res) => {
            alert("You have been unsubscribed from email updates");
        }).catch((err) => {
            alert("A problem occurred while unsubscribing. Please try again later.");
        })
    }

    return (
        <>
            <LegalContainer>
                <div className="text-center" style={{ minHeight: "60vh" }}>

                    <h2>Unsubscribe from Email Updates</h2>
                    <button onClick={handleUnsubscribe} className="btn btn-secondary">Unsubscribe Now</button>

                </div>
            </LegalContainer>

        </>

    )
}


export default UnsubscribePage;