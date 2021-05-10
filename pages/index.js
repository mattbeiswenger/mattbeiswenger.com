import Head from 'next/head'
import InlineLink from '@/components/inline-link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Matt Beiswenger</title>
      </Head>
      <div className="bg-dark-grey fixed -inset-0">
        <div className="max-w-5xl px-20 mt-24">
          <div>
            <div className="text-white text-5xl">Hi, I’m Matt Beiswenger</div>
            <div className="text-white mt-8 leading-8 text-lg font-light">
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
          <div className="text-white text-2xl mt-10">Articles</div>
          <div className="text-white font-light">
            Fleshed out ideas and tutorials
          </div>
          <div className="text-white text-2xl mt-10">Notes</div>
          <div className="text-white font-light">Scramble think</div>
        </div>
      </div>
    </>
  )
}
