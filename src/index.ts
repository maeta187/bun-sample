import express from 'express'

const app = express()
const port = Bun.env.PORT

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`localhost:${port}`))
