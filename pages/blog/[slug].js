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
      <h1 className="font-bold text-3xl md:text-5xl mb-4">{metadata.title}</h1>
      <article className="mx-auto prose prose-pink dark:prose-dark">
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
