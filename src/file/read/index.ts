import type { BunFile } from 'bun'

const file = Bun.file('./src/file/out/test.txt') as BunFile

console.log(await file.exists())
console.log(file.type)
console.log(file.name)
