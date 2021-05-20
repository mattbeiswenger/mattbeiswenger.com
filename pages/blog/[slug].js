import { getFileBySlug, getFiles } from '@/lib/mdx'
import { MDXRemote } from 'next-mdx-remote'
import Head from 'next/head'
import Container from '@/components/container'

export default function Post({ source, metadata }) {
  return (
    <Container>
      <Head>
        <title>{metadata.title}</title>
      </Head>
      <article className="leading-7 md:leading-8 text-gray-800 max-w-prose dark:text-gray-300">
        <h1 className="text-2xl font-semibold md:text-4xl">{metadata.title}</h1>
        <MDXRemote {...source} />
      </article>
    </Container>
  )
}

export async function getStaticPaths() {
  const posts = await getFiles('blog')
  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  return await getFileBySlug('blog', params.slug)
}
