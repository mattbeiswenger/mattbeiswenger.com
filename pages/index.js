import InlineLink from '@/components/InlineLink'
import Container from '@/components/Container'
import { getAllFilesMetadata } from '@/lib/mdx'
import Image from 'next/image'
import Link from 'next/link'
import Date from '@/components/Date'

export default function Home({ articles }) {
  return (
    <>
      <Container title="Matt Beiswenger">
        <div className="text-4xl font-semibold leading-10 text-gray-800 md:text-5xl dark:text-gray-100">
          Hi, I’m Matt Beiswenger
        </div>
        <div className="max-w-2xl leading-loose text-gray-900 text-md mt-7 dark:text-gray-300">
          I’m a software engineer at{' '}
          <InlineLink url="https://topbloc.com/" newTab>
            👨🏼‍💻 TopBloc
          </InlineLink>{' '}
          where I work across our whole stack including Ember, Django, and Java.
          I enjoy creating declarative, simple code (conditionals are my
          kryptonite). When I’m not coding, you can find me walking along the
          Chicago lakefront with my goldendoodle{' '}
          <InlineLink url="https://www.instagram.com/p/CCABThOhGm4/" newTab>
            🐕 Charlie
          </InlineLink>
          .
        </div>
        <div className="flex gap-5 pt-5 font-medium text-gray-600 text-md dark:text-gray-400">
          <a
            href="https://github.com/mattbeiswenger"
            rel="noopener"
            target="_blank"
          >
            GitHub
          </a>
          <a
            href="https://twitter.com/mattbeiswenger"
            rel="noopener"
            target="_blank"
          >
            Twitter
          </a>
          <a
            href="https://linkedin.com/in/mattbeiswenger"
            rel="noopener"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
        <section className="mt-20">
          <div className="flex flex-col gap-2">
            <div className="text-3xl font-medium text-gray-800 dark:text-gray-100">
              Recent Articles
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10 mt-5">
            {articles.map((article) => {
              return (
                <Link href={`/blog/${article.slug}`} key={article.slug}>
                  <a className="p-4 transition border-2 dark:border-transparent dark:bg-gray-800 rounded-xl ring-opacity-80 hover:ring-2 ring-offset-4 dark:ring-offset-gray-900 ring-red-400">
                    <div className="block rounded-xl responsive-image">
                      <Image src={article.image} layout="fill" />
                    </div>
                    <div className="flex gap-2 mt-3 text-sm text-gray-600 dark:text-gray-400">
                      <Date dateString={article.published} />
                      <div>&#x2022;</div>
                      <div>{article.readingTime}</div>
                    </div>
                    <div className="mt-2 text-xl font-medium text-gray-800 dark:text-gray-100">
                      {article.title}
                    </div>
                  </a>
                </Link>
              )
            })}
          </div>
        </section>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  const articles = await getAllFilesMetadata('blog')
  return {
    props: {
      articles,
    },
  }
}
