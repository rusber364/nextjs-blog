import { Inter } from 'next/font/google'
import { getSortedPostsData } from '~/lib/posts.js'

const inter = Inter({ subsets: ['latin'] })

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

export default function Home(props: any) {
  return <main className={inter.className}>Next.js</main>
}
