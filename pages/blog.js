import Container from '@/components/container'
import { getAllFilesMetadata } from '@/lib/mdx'
import Link from 'next/link'

export default function Home({ posts }) {
  return (
    <Container>
      {posts.map((post) => {
        return (
          <Link href={`blog/${post.slug}`}>
            <a className="dark:text-white">{post.title}</a>
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
