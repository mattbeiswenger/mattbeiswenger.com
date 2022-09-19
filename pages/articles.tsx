import BackButton from '../components/BackButton'
import Container from '../components/Container'
import ContentCard from '../components/Article'
import Header from '../components/Header'
import { getAllPostsMetadata, PostMetadata } from '../lib/mdx'
import { useCommandPaletteContext } from '../contexts/command-palette'

type ArticlesProps = {
  articles: PostMetadata[]
}

export default function Home({ articles }: ArticlesProps) {
  const [open, setOpen] = useCommandPaletteContext()

  return (
    <Container title="Articles — Matt Beiswenger">
      <div className="flex items-center justify-between">
        <div>
          <BackButton href="/">Home</BackButton>
          <Header>Articles</Header>
        </div>
        <button
          onClick={() => setOpen(true)}
          className="flex-none px-3 py-1.5 text-sm border rounded-md ring-0 bg-neutral-800 border-neutral-700"
        >
          ⌘K
        </button>
      </div>
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
