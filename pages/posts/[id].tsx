import { type GetStaticPaths, GetStaticProps } from 'next/types'
import Link from 'next/link'
import { getAllPosts, getPostById } from '../../lib/posts'
import Head from 'next/head'

function Layout({ children }: any) {
  return (
    <div>
      <ul>
        <li>
          <Link href="/posts/pre-rendering">pre-rendering</Link>
        </li>
        <li>
          <Link href="/posts/ssg-ssr">ssg-ssr</Link>
        </li>
      </ul>
      <hr />
      {children}
    </div>
  )
}

export default function Post({ postData }: any) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>

      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getAllPosts(),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostById(params?.id)
  return { props: { postData } }
}
