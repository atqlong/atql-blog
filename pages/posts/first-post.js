import Link from 'next/link';
import Card from '../../components/Cards/layout';

export default function FirstPost() {
    return (
        <>
            <h1>First Post</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
            <Card />

        </>
    )
}