import fs from 'fs'
import path from 'path'
import { serialize } from 'next-mdx-remote/serialize'
import matter from 'gray-matter'

const root = process.cwd()

export async function getFiles(type) {
  return fs.readdirSync(path.join(root, 'data', type))
}

export async function getFileBySlug(type, slug) {
  const source = slug
    ? fs.readFileSync(path.join(root, 'data', type, `${slug}.mdx`), 'utf8')
    : fs.readFileSync(path.join(root, 'data', `${type}.mdx`), 'utf8')

  const { data, content } = matter(source)
  const mdxSource = await serialize(content)
  return { props: { source: mdxSource, metadata: data } }
}

export async function getAllFilesMetadata(type) {
  const files = fs.readdirSync(path.join(root, 'data', type))
  return files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(
      path.join(root, 'data', type, postSlug),
      'utf8'
    )
    const { data } = matter(source)
    return [
      {
        ...data,
        slug: postSlug.replace('.mdx', ''),
      },
    ]
  }, [])
}
