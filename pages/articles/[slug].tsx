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
      <article className="mx-auto sm:text-lg text-md">
        <header className="max-w-3xl mx-auto">
          <h1 className="text-lg font-medium text-neutral-800 md:text-4xl dark:text-neutral-100">
            {metadata.title}
          </h1>
          <div className="flex gap-2 mt-2 text-neutral-600 dark:text-neutral-400">
            <Date dateString={metadata.published} />
            <div>&#x2022;</div>
            <div>{metadata.readingTime}</div>
          </div>
        </header>
        <div className="wrapper">
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
          <div className="grid mt-6 justify-items-center">
            <Link href="/">
              <a>
                <Image
                  className="rounded-full cursor-pointer"
                  src="/profile.jpg"
                  alt="Image of author"
                  width="96"
                  height="96"
                />
              </a>
            </Link>
            <span className="pt-4 text-xs text-neutral-500">WRITTEN BY</span>
            <Link href="/">
              <a>
                <span className="pt-1 text-lg cursor-pointer">
                  Matt Beiswenger
                </span>
              </a>
            </Link>
          </div>
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
