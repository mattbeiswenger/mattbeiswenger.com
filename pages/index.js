import Container from '@/components/Container'
import ContentCard from '@/components/ContentCard'
import { getAllPostsMetadata } from '@/lib/mdx'

export default function Home({ articles }) {
  return (
    <>
      <Container title="Matt Beiswenger">
        <div className="max-w-2xl text-neutral-900 sm:text-2xl text-lg tracking-wide sm:mt-7 mt-5 dark:text-neutral-200">
          Hi, I’m Matt Beiswenger
        </div>
        <div className="max-w-2xl text-neutral-900 sm:text-2xl text-lg tracking-wide sm:mt-7 mt-5 dark:text-neutral-200">
          I&apos;m a design-minded software developer currently building and
          breaking things at{' '}
          <a
            className="underline decoration-neutral-300 dark:decoration-neutral-700"
            href="https://topbloc.com"
            rel="noreferrer"
            target="_blank"
          >
            TopBloc
          </a>
        </div>
        <div className="flex gap-5 pt-5 font-medium text-neutral-600 text-md dark:text-neutral-400 tracking-wide">
          <a
            href="https://github.com/mattbeiswenger"
            rel="noreferrer"
            target="_blank"
          >
            GitHub
          </a>
          <a
            href="https://twitter.com/mattbeiswenger"
            rel="noreferrer"
            target="_blank"
          >
            Twitter
          </a>
          <a
            href="https://linkedin.com/in/mattbeiswenger"
            rel="noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
        <section className="sm:mt-20 mt-10">
          <div className="flex flex-col gap-2">
            <div className="sm:text-3xl text-xl font-medium text-neutral-800 dark:text-neutral-100">
              Recent Articles
            </div>
          </div>
          <div className="grid gap-6 mt-5 sm:grid-cols-1">
            {articles.map((article) => {
              return (
                <ContentCard
                  key={article.slug}
                  href={`/blog/${article.slug}`}
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
