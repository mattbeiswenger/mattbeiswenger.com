import BackButton from '../components/BackButton'
import Container from '../components/Container'
import ContentCard from '../components/Article'
import Header from '../components/Header'
import { getAllPostsMetadata, PostMetadata } from '../lib/mdx'

type ArticlesProps = {
  articles: PostMetadata[]
}

export default function Home({ articles }: ArticlesProps) {
  return (
    <Container title="Articles — Matt Beiswenger">
      <BackButton href="/">Home</BackButton>
      <Header>Articles</Header>
      <div className="flex flex-col gap-5 mt-5">
        {articles.map((article) => {
          return (
            <ContentCard
              key={article.slug}
              href={`/articles/${article.slug}`}
              published={article.published}
              title={article.title}
            />
          )
        })}
      </div>
    </Container>
  )
}

export async function getStaticProps() {
  const articles = await getAllPostsMetadata('articles')
  return {
    props: {
      articles,
    },
  }
}
