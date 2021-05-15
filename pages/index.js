import Head from 'next/head'
import InlineLink from '@/components/inline-link'
import Container from '@/components/container'

export default function Home() {
  return (
    <>
      <Head>
        <title>Matt Beiswenger</title>
      </Head>
      <Container>
        <div className="">
          <div>
            <div className="dark:text-white text-4xl">
              Hi, I’m Matt Beiswenger
            </div>
            <div className="mt-8 leading-8 text-gray-400 text-lg">
              I’m a software engineer at{' '}
              <InlineLink url="https://topbloc.com/" newTab>
                👨🏼‍💻 TopBloc
              </InlineLink>{' '}
              where I work across our whole stack including Ember, Django, and
              Java. I enjoy creating declarative, simple code (conditionals are
              my kryptonite). When I’m not coding, you can find me walking along
              the Chicago lakefront with my goldendoodle{' '}
              <InlineLink url="https://www.instagram.com/p/CCABThOhGm4/" newTab>
                🐕 Charlie
              </InlineLink>
              .
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
