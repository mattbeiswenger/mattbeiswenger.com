import fs from 'fs'
import path from 'path'
import { serialize } from 'next-mdx-remote/serialize'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import rehypePrism from 'rehype-prism-plus'
import { Event, EventType } from '../types'

const root = process.cwd()

export type PostMetadata = {
  title: string
  description?: string
  published: string
  readingTime: string
  slug: string
}

export async function getPublishedPosts() {
  const posts = fs.readdirSync(path.join(root, 'data', 'articles'))
  return posts.filter((post) => {
    const slug = post.replace(/\.mdx/, '')
    const source = fs.readFileSync(
      path.join(root, 'data', 'articles', `${slug}.mdx`),
      'utf8'
    )
    const { data } = matter(source)
    return data.published
  })
}

export async function getPostBySlug(type: string, slug: string) {
  const source = slug
    ? fs.readFileSync(path.join(root, 'data', type, `${slug}.mdx`), 'utf8')
    : fs.readFileSync(path.join(root, 'data', `${type}.mdx`), 'utf8')
  const { data, content } = matter(source)
  const frontmatter = data as PostMetadata
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [rehypePrism],
      format: 'mdx',
    },
  })
  return {
    props: {
      source: mdxSource.compiledSource,
      metadata: {
        ...frontmatter,
        readingTime: readingTime(content).text,
        slug,
      },
    },
  }
}

export async function getArticleEvents() {
  const files = fs.readdirSync(path.join(root, 'data/articles'))

  return files.reduce<Event[]>((allPosts, postSlug) => {
    const slug = postSlug.replace('.mdx', '')
    const source = fs.readFileSync(
      path.join(root, 'data/articles', postSlug),
      'utf8'
    )
    const { data } = matter(source)
    const frontmatter = data as PostMetadata
    return frontmatter.published
      ? [
          {
            id: slug,
            kind: EventType.PUBLISHED_ARTICLE,
            startTime: frontmatter.published,
            data: {
              title: frontmatter.title,
              slug: slug,
            },
          },
          ...allPosts,
        ]
      : allPosts
  }, [] as Event[])
}

export async function getAllPostsMetadata(type: string) {
  const files = fs.readdirSync(path.join(root, 'data', type))
  return files.reduce<PostMetadata[]>((allPosts, postSlug) => {
    const source = fs.readFileSync(
      path.join(root, 'data', type, postSlug),
      'utf8'
    )
    const { data, content } = matter(source)
    // Cast metadata till pull request is merged
    // https://github.com/jonschlinkert/gray-matter/pull/140
    const frontmatter = data as PostMetadata
    return frontmatter.published
      ? [
          {
            ...frontmatter,
            readingTime: readingTime(content).text,
            slug: postSlug.replace('.mdx', ''),
          },
          ...allPosts,
        ]
      : allPosts
  }, [] as PostMetadata[])
}
