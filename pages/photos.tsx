import Container from '../components/Container'
import fs from 'fs'
import path from 'path'
import Image from 'next/image'
import { ArrowLongLeftIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

type PhotosProps = {
  photos: string[]
}

export default function Photos({ photos }: PhotosProps) {
  return (
    <Container
      title="Photos — Matt Beiswenger"
      className="!m-5 !max-w-none !p-0"
    >
      <Link href="/">
        <a className="fixed z-10 flex items-center gap-2 px-4 py-2 text-sm rounded-lg group sm:top-14 sm:left-14 left-10 top-10 backdrop-blur-md bg-opacity-40 bg-neutral-700">
          <ArrowLongLeftIcon className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Home
        </a>
      </Link>
      <div className="image-grid">
        {photos.map((photo) => {
          return (
            <div
              key={photo}
              className="relative rounded-md shadow-md aspect-w-2 aspect-h-3"
            >
              {/* eslint-disable-next-line jsx-a11y/alt-text */}
              <Image
                className="rounded-md"
                src={`/photos/${photo}`}
                layout="fill"
                placeholder="blur"
                blurDataURL={`/_next/image?url=/photos/${photo}&w=16&q=1`}
              />
            </div>
          )
        })}
      </div>
    </Container>
  )
}
export async function getStaticProps() {
  const root = process.cwd()
  const photos = fs.readdirSync(path.join(root, 'public', 'photos'))
  return {
    props: {
      photos,
    },
  }
}
