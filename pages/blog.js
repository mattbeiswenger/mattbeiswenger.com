import Container from '@/components/container'
import { getAllFilesMetadata } from '@/lib/mdx'
import Link from 'next/link'

export default function Home({ posts }) {
  return (
    <Container>
      {posts.map((post) => {
        return (
          <div className="grid gap-1 w-full">
            <Link href={`blog/${post.slug}`}>
              <a className="dark:text-white text-2xl">{post.title}</a>
            </Link>
            <div className="text-gray-500">{post.description}</div>
          </div>
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
