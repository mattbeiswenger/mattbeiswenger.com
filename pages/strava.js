export default function Strava() {
  return <div>Strava</div>
}

export async function getServerSideProps() {
  const response = await fetch(
    'https://www.strava.com/api/v3/athlete/activities?before=&after=&page=&per_page=',
    {
      headers: {
        Authorization: `Bearer ${process.env.STRAVA_ACCESS_TOKEN},`,
      },
    }
  )

  console.log(process.env.STRAVA_ACCESS_TOKEN)
  const data = await response.json()
  console.log(data)
  return {
    props: {
      data,
    },
  }
}
