import Head from 'next/head'
import InlineLink from '../components/inline-link'
import TwitterLogo from '../components/twitter-logo'
import InstagramLogo from '../components/instagram-logo'
import GitHubLogo from '../components/github-logo'
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
      <div class="bg-dark-grey fixed -inset-0 grid">
        <div class="relative flex flex-row justify-between mx-auto max-w-screen-xl p-10 w-screen">
          <div class="w-96">
            <div class="text-white text-5xl">Hi, I’m Matt Beiswenger</div>
            <div class="text-white pt-4 leading-7 text-lg font-light">
              I’m a software engineer at{' '}
              <InlineLink url="https://topbloc.com/">👨🏼‍💻 TopBloc</InlineLink>{' '}
              where I work across our whole stack including Ember, Django, and
              Java. I enjoy creating declarative, simple code (conditionals are
              my kryptonite) and I share what I learn on my blog{' '}
              <InlineLink>📓 something.io</InlineLink>. When I’m not coding, you
              can find me walking along the Chicago lakefront with my
              goldendoodle{' '}
              <InlineLink url="https://www.instagram.com/p/CCABThOhGm4/">
                🐕 Charlie
              </InlineLink>
              .
              <div class="pt-4 flex flex-row gap-3">
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
          <div>
            <div class="text-white text-2xl justify-self-start">Projects</div>
            <div class="grid grid-flow-row gap-y-4 pt-4">
              <div class="w-96 h-10 bg-light-grey rounded-lg"></div>
              <div class="w-96 h-10 bg-light-grey rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
