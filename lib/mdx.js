import fs from 'fs'
import path from 'path'
import { serialize } from 'next-mdx-remote/serialize'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const root = process.cwd()

export async function getPublishedPosts(type) {
  const posts = fs.readdirSync(path.join(root, 'data', 'blog'))
  console.log(posts)
  return posts.filter((post) => {
    const slug = post.replace(/\.mdx/, '')
    const source = fs.readFileSync(
      path.join(root, 'data', 'blog', `${slug}.mdx`),
      'utf8'
    )
    const { data } = matter(source)
    return data.published
  })
}

export async function getPostBySlug(type, slug) {
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

export async function getAllPostsMetadata(type) {
  const files = fs.readdirSync(path.join(root, 'data', type))
  return files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(
      path.join(root, 'data', type, postSlug),
      'utf8'
    )
    const { data, content } = matter(source)
    return data.published
      ? [
          {
            ...data,
            readingTime: readingTime(content).text,
            slug: postSlug.replace('.mdx', ''),
          },
          ...allPosts,
        ]
      : allPosts
  }, [])
}
