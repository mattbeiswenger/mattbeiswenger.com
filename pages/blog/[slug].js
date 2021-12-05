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
      <article className="mx-auto">
        <header className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-semibold text-gray-800 md:text-4xl dark:text-gray-100">
            {metadata.title}
          </h1>
          <div className="flex gap-2 mt-2 text-gray-600 dark:text-gray-400">
            <Date dateString={metadata.published} />
            <div>&#x2022;</div>
            <div>{metadata.readingTime}</div>
          </div>
        </header>
        <div className="mt-10 mb-14 responsive-image">
          <Image
            src={metadata.image}
            layout="fill"
            alt="nighttime bonfire with sparks"
            title="Photo by Tengyart"
          />
        </div>
        <MDXRemote {...source} />
        <footer className="max-w-3xl pt-8 mx-auto">
          <a
            href={editUrl(metadata.slug)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500"
          >
            Edit on GitHub
          </a>
          <div className="grid mt-6 justify-items-center">
            <Link href="/">
              <Image
                className="rounded-full cursor-pointer"
                src="/profile.jpg"
                alt="Image of author"
                width="96"
                height="96"
              />
            </Link>
            <span className="pt-4 text-xs text-gray-500">WRITTEN BY</span>
            <Link href="/">
              <span className="pt-1 text-lg cursor-pointer">
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
