import Head from 'next/head'
import CustomLink from '../components/custom-link'

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
      <div class="w-full h-full bg-dark-grey fixed -inset-0 grid">
        <div class="grid grid-cols-2 gap-x-40 pt-10 flex flex-col mx-auto">
          <div class="justify-self-start w-96">
            <div class="text-white text-3xl">Hi, I’m Matt Beiswenger</div>
            <div class="text-white pt-4 leading-7 text-md font-light">
              I’m a software engineer at{' '}
              <CustomLink url="https://topbloc.com/">👨🏼‍💻 TopBloc</CustomLink>{' '}
              where I work across our whole stack including Ember, Django, and
              Java. I enjoy creating declarative, simple code (conditionals are
              my kryptonite) and I share what I learn on my blog{' '}
              <CustomLink>📓 something.io</CustomLink>. When I’m not coding, you
              can find me walking along the Chicago lakefront with my
              goldendoodle{' '}
              <CustomLink url="https://www.instagram.com/p/CCABThOhGm4/">
                🐕 Charlie
              </CustomLink>
              .
            </div>
          </div>
          <div class="text-white text-2xl">Projects</div>
        </div>
      </div>
    </>
  )
}
