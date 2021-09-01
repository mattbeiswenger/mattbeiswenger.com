import InlineLink from '@/components/InlineLink'
import Container from '@/components/Container'

export default function Home() {
  return (
    <>
      <Container title="Matt Beiswenger">
        <div className="text-4xl font-semibold leading-10 md:text-5xl">
          Hi, I’m Matt Beiswenger
        </div>
        <div className="text-xl leading-loose text-gray-900 mt-7 dark:text-gray-100">
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
        <div className="flex gap-5 pt-5 text-lg text-gray-600 dark:text-gray-400">
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
          <a href="mailto:mattbeis@yahoo.com">Email</a>
        </div>
      </Container>
    </>
  )
}
