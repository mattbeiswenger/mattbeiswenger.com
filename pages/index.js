import Container from '../components/Container'
import ContentCard from '../components/ContentCard'
import { getAllPostsMetadata } from '../lib/mdx'
import { getAllBooks } from '../lib/oku'
import { BookOpenIcon, CheckCircleIcon } from '@heroicons/react/24/outline'
import BookCard from '../components/BookCard'
import SmallContainer from '../components/SmallContainer'
import { getStravaActivities } from '../lib/strava'
import { getCommits } from '../lib/github'
import { isAfter, parseISO, startOfDay, startOfToday, sub } from 'date-fns'
import EventStream from '../components/EventStream'
import Image from 'next/image'
import EventFactory from '../components/EventFactory'
import Link from 'next/link'

export default function Home({ articles, books, events }) {
  return (
    <>
      <Container title="Matt Beiswenger">
        <SmallContainer>
          <div className="text-lg text-neutral-900 sm:mt-7 dark:text-neutral-200">
            Matt Beiswenger
          </div>
          <div className="text-sm font-medium text-neutral-400">
            Software Developer
          </div>
          <div className="mt-5 leading-7 text-neutral-900 sm:mt-7 dark:text-neutral-200">
            I&apos;m a design-focused software developer currently building
            products at{' '}
            <a
              className="text-neutral-400"
              href="https://topbloc.com"
              rel="noreferrer"
              target="_blank"
            >
              TopBloc
            </a>
            .
            <div>
              Type{' '}
              <span className="px-1 py-0.5 text-sm rounded-md bg-neutral-800 border border-neutral-700">
                ⌘K
              </span>{' '}
              to explore this site.
            </div>
          </div>
          {/* <div className="flex gap-5 pt-5 font-medium tracking-wide text-neutral-600 text-md dark:text-neutral-400">
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
          </div> */}
          <section>
            <div className="mt-10 mb-5 text-neutral-800 dark:text-neutral-200">
              Here's what I've been up to recently
            </div>
            <div className="flex flex-col justify-center gap-10 mx-auto mt-10 align-middle fade-bottom justify-items-center">
              {events.map((event) => {
                return <EventFactory key={event.id} event={event} />
              })}
            </div>
            <div className="relative flex justify-center -mt-24">
              <Link href="/timeline">
                <a className="px-4 py-2 border rounded-md bg-neutral-800 border-neutral-700 text-neutral-200">
                  View all activities
                </a>
              </Link>
            </div>
          </section>
          {/* <section>
            <div className="mt-10 mb-5 text-xl font-medium sm:text-3xl text-neutral-800 dark:text-neutral-100">
              Activity
            </div>
            <div className="grid grid-cols-1 gap-10 sm:gap-40 sm:grid-cols-2">
              <div>
                <span className="flex items-center gap-1">
                  <BookOpenIcon className="w-4 h-4 text-indigo-400" />
                  <span className="text-sm font-semibold text-indigo-500 dark:text-indigo-300 sm:text-md">
                    I&apos;m currently reading
                  </span>
                </span>
                <div className="flex flex-col gap-3 mt-4">
                  {books.READING.map((book) => (
                    <BookCard
                      key={book.guid}
                      link={book.link}
                      title={book.title}
                      author={book.creator}
                    />
                  ))}
                </div>
              </div>
              <div>
                <span className="flex items-center gap-1">
                  <CheckCircleIcon className="w-4 h-4 text-emerald-500" />
                  <span className="text-sm font-semibold sm:text-md dark:text-emerald-300 text-emerald-600">
                    I&apos;ve recently finished
                  </span>
                </span>
                <div className="flex flex-col gap-3 mt-4">
                  {books.READ.map((book) => (
                    <BookCard
                      link={book.link}
                      key={book.guid}
                      title={book.title}
                      author={book.creator}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
          <section className="mt-10 sm:mt-20">
            <div className="flex flex-col gap-2">
              <div className="text-xl font-medium sm:text-3xl text-neutral-800 dark:text-neutral-100">
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
          </section> */}
        </SmallContainer>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  const articles = await getAllPostsMetadata('blog')
  const books = await getAllBooks()

  const today = startOfToday()
  const oneWeekAgo = sub(today, { days: 5 })

  const events = await Promise.all([getStravaActivities(), getCommits()])
  const mergedEvents = events.flat()
  const eventsFromPastWeek = mergedEvents.filter((event) =>
    isAfter(new Date(event.startTime), oneWeekAgo)
  )

  eventsFromPastWeek.sort((a, b) => {
    return new Date(b.startTime) - new Date(a.startTime)
  })

  return {
    props: {
      articles,
      books,
      events: eventsFromPastWeek,
    },
  }
}
