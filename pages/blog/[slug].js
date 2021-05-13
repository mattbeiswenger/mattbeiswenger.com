import { getFileBySlug, getFiles } from '@/lib/mdx'
import { MDXRemote } from 'next-mdx-remote'
import InlineLink from '@/components/inline-link'
import Head from 'next/head'

const components = { InlineLink }

export default function Post({ source, metadata }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
      </Head>
      <article className="prose">
        <MDXRemote {...source} components={components} />
      </article>
    </>
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
