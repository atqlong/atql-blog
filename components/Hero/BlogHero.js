import Card from "../Cards/card"
import Link from "next/link"

export default function BlogHero() {
    return (
        <Card>
            <h1 className="font-serif font-medium text-xl">Hey, I'm Alex 👋</h1>
            <p className="font-sans text-left leading-relaxed text-gray-500 pt-3">
                I am a product designer, analyst and software developer. I'm currently building a banking and investment platform at Capital International. <br />
            </p>
            <p>Twitter:
                <Link href="https://twitter.com/atqlong">
                    <a> @atqlong</a>
                </Link>
            </p>

            <p>Github:
                <Link href="https://github.com/atqlong">
                    <a> @atqlong</a>
                </Link>
            </p>

        </Card >
    )
}