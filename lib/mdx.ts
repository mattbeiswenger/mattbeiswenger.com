import fs from 'fs'
import path from 'path'
import { serialize } from 'next-mdx-remote/serialize'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const root = process.cwd()

export type PostMetadata = {
  title: string
  description: string
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
  const mdxSource = await serialize(content)
  return {
    props: {
      source: mdxSource,
      metadata: {
        ...data,
        readingTime: readingTime(content).text,
        slug,
      },
    },
  }
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
