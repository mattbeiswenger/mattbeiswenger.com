import fs from 'fs'
import path from 'path'
import { Event, EventType } from '../types'
import { bundleMDX } from 'mdx-bundler'
import readingTime from 'reading-time'

type Article = {
  code: string
  frontmatter: Frontmatter
  slug: string
  readingTime: string
}

export type Frontmatter = {
  title: string
  description?: string
  published: string
}

const articlesDir = path.join(process.cwd(), 'data', 'articles')

export async function getArticle(articleDir: string) {
  const source = fs
    .readFileSync(path.join(articlesDir, articleDir, 'index.mdx'))
    .toString()
  const postFiles = fs.readdirSync(path.join(articlesDir, articleDir))
  const files = postFiles
    .filter((fileName) => fileName !== 'index.mdx')
    .reduce((acc, fileName) => {
      return {
        ...acc,
        [fileName]: fs
          .readFileSync(path.join(articlesDir, articleDir, fileName))
          .toString(),
      }
    }, {})
  const { code, frontmatter } = await bundleMDX({
    source,
    files,
  })
  const fm = frontmatter as Frontmatter
  return {
    code,
    frontmatter: fm,
    slug: articleDir,
    readingTime: readingTime(code).text,
  }
}

export function getArticleDirs() {
  return fs.readdirSync(articlesDir)
}

function sortArticles(articles: Article[]) {
  return articles.sort((a, b) => {
    const {
      frontmatter: { published: publishedA },
    } = a
    const {
      frontmatter: { published: publishedB },
    } = b
    return new Date(publishedB).getTime() - new Date(publishedA).getTime()
  })
}

export async function getArticles() {
  const articleDirs = getArticleDirs()
  const articles = await Promise.all(
    articleDirs.map((articleDir) => {
      return getArticle(articleDir)
    })
  )
  return sortArticles(articles)
}

export async function getArticleEvents(): Promise<Event[]> {
  const articles = await getArticles()
  return articles.map(({ frontmatter, slug }) => {
    const metadata = frontmatter as Frontmatter
    return {
      id: slug,
      kind: EventType.PUBLISHED_ARTICLE,
      startTime: metadata.published,
      data: {
        title: metadata.title,
        slug: slug,
      },
    }
  })
}
