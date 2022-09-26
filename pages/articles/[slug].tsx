import { getPostBySlug, getPublishedPosts, PostMetadata } from '../../lib/mdx'
import { MDXRemote } from 'next-mdx-remote'
import Container from '../../components/Container'
import Date from '../../components/Date'
import Image from 'next/image'
import Link from 'next/link'
import BackButton from '../../components/BackButton'
import MDXComponents from '../../components/MdxComponents'
import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'

const editUrl = (slug: string) =>
  `https://github.com/mattbeiswenger/mattbeiswenger.com/edit/main/data/activities/${slug}.mdx`

type PostProps = {
  source: string
  metadata: PostMetadata
}

export default function Post({ source, metadata }: PostProps) {
  return (
    <Container title={metadata.title}>
      <BackButton href="/articles">Articles</BackButton>
      <article className="mx-auto text-sm sm:text-base">
        <header className="max-w-3xl mx-auto">
          <h1 className="text-lg font-medium text-neutral-800 md:text-2xl dark:text-neutral-200">
            {metadata.title}
          </h1>
          <div className="flex gap-2 mt-2 text-neutral-600 dark:text-neutral-400">
            <Date dateString={metadata.published} />
            <div>&#x2022;</div>
            <div>{metadata.readingTime}</div>
          </div>
        </header>
        <div className="mt-10 prose prose-neutral dark:prose-invert prose-h2:font-medium prose-h2:sm:text-lg">
          <MDXRemote compiledSource={source} components={MDXComponents} />
        </div>
        <footer className="max-w-3xl pt-8 mx-auto">
          <a
            href={editUrl(metadata.slug)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-neutral-500"
          >
            Edit on GitHub
          </a>
        </footer>
      </article>
    </Container>
  )
}

interface IParams extends ParsedUrlQuery {
  slug: string
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPublishedPosts()
  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams
  return await getPostBySlug('articles', slug)
}
