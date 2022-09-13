import BackButton from '../components/BackButton'
import Container from '../components/Container'
import ContentCard from '../components/ContentCard'
import Header from '../components/Header'
import { getAllPostsMetadata } from '../lib/mdx'

export default function Home({ posts }) {
  return (
    <Container title="Blog — Matt Beiswenger">
      <BackButton href="/">Home</BackButton>
      <Header>Articles</Header>
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
