import { getFileBySlug, getFiles } from '@/lib/mdx'
import { MDXRemote } from 'next-mdx-remote'
import Container from '@/components/Container'
import Date from '@/components/Date'
import Image from 'next/image'
import Link from 'next/link'

const editUrl = (slug) =>
  `https://github.com/mattbeiswenger/mattbeiswenger.com/edit/main/data/blog/${slug}.mdx`

export default function Post({ source, metadata }) {
  return (
    <Container title={metadata.title}>
      <article className="leading-7 md:leading-8 text-gray-800 max-w-prose dark:text-gray-300 mx-auto">
        <header>
          <h1 className="text-2xl font-semibold md:text-4xl">
            {metadata.title}
          </h1>
          <div className="mt-2 flex gap-2 text-gray-400">
            <Date dateString={metadata.published} />
            <div>/</div>
            <div>{metadata.readingTime}</div>
          </div>
        </header>
        <MDXRemote {...source} />
        <footer className="pt-8">
          <a
            href={editUrl(metadata.slug)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500"
          >
            Edit on GitHub
          </a>
          <div className="grid justify-items-center mt-6">
            <Link href="/">
              <Image
                className="cursor-pointer"
                src="/favicon-96x96.png"
                alt="Image of author"
                width="96"
                height="96"
              />
            </Link>
            <span className="text-xs text-gray-500 pt-4">WRITTEN BY</span>
            <Link href="/">
              <span className="cursor-pointer text-lg pt-1">
                Matt Beiswenger
              </span>
            </Link>
          </div>
        </footer>
      </article>
    </Container>
  )
}

export async function getStaticPaths() {
  const posts = await getFiles('blog')
  return {
    paths: posts.filter(p => p.published).map((p) => ({
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
