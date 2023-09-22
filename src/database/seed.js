const { readFileSync } = require('fs')
const { join } = require('path')
const db = require('./db')

const seedPath = join('src', 'database', 'seed.sql')
const seed = readFileSync(seedPath, 'utf-8')
db.exec(seed)

console.log('DB seeded with example data')
