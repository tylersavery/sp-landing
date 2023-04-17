
import Image from "next/image";
import Link from "next/link";

const LegalHeader = () => {

    return (<div className="text-center">
        <Link href="/">

            <Image src="/images/logo-purple.svg" width={300} height={100} alt="Storyplace" />
        </Link>
    </div>)
}


export default LegalHeader;