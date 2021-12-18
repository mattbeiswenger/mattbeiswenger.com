import Container from '@/components/Container'
import ContentCard from '@/components/ContentCard'
import InlineLink from '@/components/InlineLink'
import { getAllPostsMetadata } from '@/lib/mdx'

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
          <div className="grid gap-10 mt-5 sm:grid-cols-2">
            {articles.map((article) => {
              return (
                <ContentCard
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  image={article.image}
                  published={article.published}
                  time={article.readingTime}
                  title={article.title}
                />
              )
            })}
          </div>
        </section>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  const articles = await getAllPostsMetadata('blog')
  return {
    props: {
      articles,
    },
  }
}
