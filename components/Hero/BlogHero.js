import Card from "../Cards/card"
import Link from "next/link"

export default function BlogHero() {
    return (
        <Card>
            <h1 className="font-serif font-medium text-xl">Hey, I'm Alex 👋</h1>
            <p className="font-normal font-sans text-left leading-relaxed text-gray-500 pt-3">
                I am a product designer, analyst and software developer. I'm currently building a banking and investment platform at <span></span>
                <Link href="https://www.capital-iom.com/">
                    <a className="underline">Capital International</a>
                </Link>. <br />
            </p>
            <p className="font-sans font-normal text-left leading-relaxed text-gray-500 pt-3">Twitter: <span> </span>
                <Link target="_blank" href="https://twitter.com/atqlong" rel="noopener noreferrer">
                    <a className="underline">@atqlong</a>
                </Link>
            </p>

            <p className="font-normalfont-sans text-left leading-relaxed text-gray-500">Github: <span> </span>
                <Link href="https://github.com/atqlong">
                    <a className="underline">@atqlong</a>
                </Link>
            </p>

        </Card >
    )
}