import Container from '@/components/container'
import { getAllFilesMetadata } from '@/lib/mdx'
import Link from 'next/link'

export default function Home({ posts }) {
  return (
    <Container title="Blog - Matt Beiswenger">
      <div className="text-3xl leading-10 md:text-5xl mb-6 font-semibold">
        Blog
      </div>
      {posts.map((post) => {
        return (
          <Link key={post.slug} href={`blog/${post.slug}`}>
            <div className="cursor-pointer grid gap-1 w-full">
              <a className="dark:text-white text-lg md:text-2xl font-medium">
                {post.title}
              </a>
              <div className="dark:text-gray-400 leading-relaxed text-sm md:text-md text-gray-600">
                {post.description}
              </div>
            </div>
          </Link>
        )
      })}
    </Container>
  )
}

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllFilesMetadata('blog'),
    },
  }
}
