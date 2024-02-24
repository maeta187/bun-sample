import fs from 'fs'
const message = 'Hello World'

await Bun.write('./src/file/out/test.txt', message)

const content = 'Hello World by fs Modules'

fs.writeFile('./src/file/out/test2.txt', content, (err) => {
  if (err) {
    console.error(err)
  }
})
