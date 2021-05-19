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
      <article className="md:leading-relaxed max-w-prose mx-auto text-gray-700 dark:text-gray-300">
        <h1 className="mt-8 text-3xl font-semibold md:text-4xl">
          {metadata.title}
        </h1>
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
