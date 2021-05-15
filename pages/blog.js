import Container from '@/components/container'
import { getAllFilesMetadata } from '@/lib/mdx'
import Link from 'next/link'

export default function Home({ posts }) {
  return (
    <Container>
      {posts.map((post) => {
        return (
          <Link href={`blog/${post.slug}`}>
            <div className="cursor-pointer grid gap-1 w-full">
              <a className="dark:text-white text-2xl">{post.title}</a>
              <div className="text-gray-500">{post.description}</div>
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
