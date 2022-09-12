import Container from '../components/Container'
import fs from 'fs'
import path from 'path'
import Image from 'next/image'

export default function Photos({ photos }) {
  return (
    <Container title="Photos — Matt Beiswenger" className="!m-5 !max-w-none">
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
