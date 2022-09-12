import { ArrowLongLeftIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Container from '../components/Container'
import ContentCard from '../components/ContentCard'
import { getAllPostsMetadata } from '../lib/mdx'

export default function Home({ posts }) {
  return (
    <Container title="Blog — Matt Beiswenger">
      <Link href="/">
        <a className="inline-flex items-center gap-1 text-sm text-neutral-400">
          <ArrowLongLeftIcon className="w-4 h-4 text-sm" />
          Home
        </a>
      </Link>
      <div className="text-lg text-neutral-100">Articles</div>
      {/* <div className="mb-6 text-3xl font-semibold leading-10 md:text-5xl">
        Blog
      </div> */}
      <div className="flex flex-col gap-5 mt-5">
        {posts.map((post) => {
          return (
            <ContentCard
              key={post.slug}
              href={`/articles/${post.slug}`}
              image={post.image}
              published={post.published}
              time={post.readingTime}
              title={post.title}
            />
          )
        })}
      </div>
    </Container>
  )
}

export async function getStaticProps() {
  const posts = await getAllPostsMetadata('blog')
  return {
    props: {
      posts,
    },
  }
}
