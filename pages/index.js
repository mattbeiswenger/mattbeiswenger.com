import Head from 'next/head'
import InlineLink from '../components/inline-link'
import TwitterLogo from '../components/svg/twitter-logo'
import InstagramLogo from '../components/svg/instagram-logo'
import GitHubLogo from '../components/svg/github-logo'
import SocialLink from '../components/social-link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Matt Beiswenger</title>
        <link rel="icon" href="/favicon-16x16.png" />
        <link rel="icon" href="/favicon-32x32.png" />
        <link rel="icon" href="/favicon-96x96.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="bg-dark-grey fixed -inset-0">
        <div className="flex flex-row justify-between mx-auto max-w-screen-xl px-10 mt-20 w-screen gap-36">
          <div>
            <div className="text-white text-5xl">Hi, I’m Matt Beiswenger</div>
            <div className="text-white mt-8 leading-8 text-lg font-light">
              I’m a software engineer at{' '}
              <InlineLink url="https://topbloc.com/" newTab>
                👨🏼‍💻 TopBloc
              </InlineLink>{' '}
              where I work across our whole stack including Ember, Django, and
              Java. I enjoy creating declarative, simple code (conditionals are
              my kryptonite), and I share what I learn on my{' '}
              <InlineLink url="/blog"> 📓 blog </InlineLink>. When I’m not
              coding, you can find me walking along the Chicago lakefront with
              my goldendoodle{' '}
              <InlineLink url="https://www.instagram.com/p/CCABThOhGm4/" newTab>
                🐕 Charlie
              </InlineLink>
              .
              <div className="pt-4 flex flex-row gap-3">
                <SocialLink url="https://github.com/mattbeiswenger">
                  <GitHubLogo />
                </SocialLink>
                <SocialLink url="https://twitter.com/mattbeiswenger">
                  <TwitterLogo />
                </SocialLink>
                <SocialLink url="https://www.instagram.com/matt_beiswenger">
                  <InstagramLogo />
                </SocialLink>
              </div>
            </div>
          </div>
          <div className="justify-self-end">
            <div className="text-white text-2xl justify-self-start">
              Projects
            </div>
            <div className="grid grid-flow-row gap-y-4 pt-4">
              <div className="w-96 h-10 bg-light-grey rounded-lg"></div>
              <div className="w-96 h-10 bg-light-grey rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
