import {
  getArticle,
  getArticleDirs,
  getArticles,
  Frontmatter,
} from '../../lib/mdx'
import Container from '../../components/Container'
import Date from '../../components/Date'
import BackButton from '../../components/BackButton'
import MDXComponents from '../../components/MdxComponents'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getMDXComponent } from 'mdx-bundler/client'
import { useMemo } from 'react'

const editUrl = (slug: string) =>
  `https://github.com/mattbeiswenger/mattbeiswenger.com/edit/main/data/articles/${slug}.mdx`

type PostProps = {
  code: string
  frontmatter: Frontmatter
  slug: string
}

export default function Post({
  code,
  frontmatter,
  slug,
  readingTime,
}: PostProps) {
  const Component = useMemo(() => getMDXComponent(code), [code])
  return (
    <Container title={frontmatter.title}>
      <BackButton href="/articles">Articles</BackButton>
      <article className="mx-auto text-sm sm:text-base">
        <header className="max-w-3xl mx-auto">
          <h1 className="text-lg font-medium text-neutral-800 md:text-2xl dark:text-neutral-200">
            {frontmatter.title}
          </h1>
          <div className="flex gap-2 mt-2 text-neutral-600 dark:text-neutral-400">
            <Date dateString={frontmatter.published} />
            <div>&#x2022;</div>
            <div>{readingTime}</div>
          </div>
        </header>
        <div className="mt-10 prose prose-neutral dark:prose-invert prose-h2:font-medium prose-h2:sm:text-lg">
          <Component components={MDXComponents} />
        </div>
        <footer className="max-w-3xl pt-8 mx-auto">
          <a
            href={editUrl(slug)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-neutral-500"
          >
            Edit on GitHub
          </a>
        </footer>
      </article>
    </Container>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const articleDirs = getArticleDirs()
  return {
    paths: articleDirs.map((dir) => ({
      params: {
        slug: dir,
      },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as { slug: string }
  const article = await getArticle(slug)
  return {
    props: {
      ...article,
    },
  }
}
