import { getFileBySlug, getFiles } from '@/lib/mdx'
import { MDXRemote } from 'next-mdx-remote'
import InlineLink from '@/components/inline-link'
import Head from 'next/head'
import Container from '@/components/container'

const components = { InlineLink }

export default function Post({ source, metadata }) {
  return (
    <Container>
      <Head>
        <title>{metadata.title}</title>
      </Head>
      <article className="prose prose-lg prose-pink dark:prose-dark">
        <MDXRemote {...source} components={components} />
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
