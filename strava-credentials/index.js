import express from 'express'
import fetch from 'node-fetch'
import dotenv from 'dotenv'
import FormData from 'form-data'

dotenv.config()

const PORT = 3000
const app = express()

/**
 * Render .hbs files when res.render() is called
 */
app.set('view engine', 'hbs')

/**
 * Update application's view directory to the root
 */
app.set('views', process.cwd() + '/')

/**
 * Return index.hbs on root domain
 */
app.get('/', (req, res) => {
  res.render('index', {
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    port: PORT,
  })
})

/**
 * Render code.hbs and display access token and refresh token
 * after callback
 */
app.get('/strava/auth/callback', async (req, res) => {
  const form = new FormData()
  form.append('client_id', process.env.CLIENT_ID)
  form.append('client_secret', process.env.CLIENT_SECRET)
  form.append('code', req.query.code)
  form.append('grant_type', 'authorization_code')

  const response = await fetch('https://www.strava.com/oauth/token', {
    method: 'POST',
    body: form,
  })

  const { access_token, refresh_token } = await response.json()

  res.render('code', {
    accessToken: access_token,
    refreshToken: refresh_token,
  })
})

app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT}`)
})
