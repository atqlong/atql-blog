import Head from 'next/head'
import Layout from '../components/Cards/layout';
import BlogHero from '../components/Hero/BlogHero';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Alex Long</title>
        <meta name="description" content="Alex Long's Blog" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,500;1,600&display=swap" rel="stylesheet" />
      </Head>

      <main>
        <Layout>
          <BlogHero />
        </Layout>
      </main>

      <footer>

      </footer>
    </div >
  )
}
