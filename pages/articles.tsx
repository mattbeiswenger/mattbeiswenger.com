import BackButton from '../components/BackButton'
import Container from '../components/Container'
import ContentCard from '../components/Article'
import Header from '../components/Header'
import { getArticles, Frontmatter } from '../lib/mdx'
import { useCommandPaletteContext } from '../contexts/command-palette'

type Article = {
  frontmatter: Frontmatter
  code: string
  slug: string
}

type ArticlesProps = {
  articles: Article[]
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
        {articles.map(({ frontmatter, slug }) => {
          return (
            <ContentCard
              key={slug}
              href={`/articles/${slug}`}
              published={frontmatter.published}
              title={frontmatter.title}
            />
          )
        })}
      </div>
    </Container>
  )
}

export async function getStaticProps() {
  const articles = await getArticles()
  return {
    props: {
      articles,
    },
  }
}
