import { getFileBySlug, getFiles } from '@/lib/mdx'
import { MDXRemote } from 'next-mdx-remote'
import Head from 'next/head'
import Container from '@/components/container'
import Date from '@/components/date'

const editUrl = (slug) =>
  `https://github.com/mattbeiswenger/mattbeiswenger.com/edit/main/data/blog/${slug}.mdx`

export default function Post({ source, metadata }) {
  return (
    <Container>
      <Head>
        <title>{metadata.title}</title>
      </Head>
      <article className="leading-7 md:leading-8 text-gray-800 max-w-prose dark:text-gray-300 mx-auto">
        <h1 className="text-2xl font-semibold md:text-4xl">{metadata.title}</h1>
        <div className="mt-2 flex gap-2 text-gray-400">
          <Date dateString={metadata.published} />
          <div>/</div>
          <div>{metadata.readingTime}</div>
        </div>
        <MDXRemote {...source} />
      </article>
      <div className="max-w-prose pt-8 mx-auto">
        <a
          href={editUrl(metadata.slug)}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-500"
        >
          Edit on GitHub
        </a>
      </div>
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
