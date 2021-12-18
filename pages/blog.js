import Container from '@/components/Container'
import ContentCard from '@/components/ContentCard'
import { getAllPostsMetadata } from '@/lib/mdx'

export default function Home({ posts }) {
  return (
    <Container title="Blog - Matt Beiswenger">
      <div className="mb-6 text-3xl font-semibold leading-10 md:text-5xl">
        Blog
      </div>
      <div className="grid gap-10 mt-5 sm:grid-cols-2">
        {posts.map((post) => {
          return (
            <ContentCard
              key={post.slug}
              href={`/blog/${post.slug}`}
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
