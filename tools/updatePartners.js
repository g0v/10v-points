import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs'
import axios from 'axios'
import got from 'got'
import CsvReadableStream from 'csv-reader'
import AutoDetectDecoderStream from 'autodetect-decoder-stream'

const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRnwi4M1rK17sNjFWlwkiSozz401CMvZnxmto53ipL9fIPoq9GPUSWRZ1c4oDCSUZkWbLyhFfyUw7AK/pub?gid=1059324241&single=true&output=csv'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)
const TARGET_PATH = path.join(__dirname, '../src/lib/assets/partners.json')

async function main () {
  let rows = []
  await new Promise((resolve) => {
    got.stream(csvUrl)
      .pipe(new AutoDetectDecoderStream())
      .pipe(new CsvReadableStream({ asObject: true }))
      .on('data', (data) => {
        rows.push(data)
      })
      .on('end', resolve)
    })
  // TODO: download cover image from google drive
  const randomImages = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=${rows.length}`)
  rows = rows.map((row, i) => {
    return {
      ...row,
      coverImg: randomImages.data[i].url
    }
  })
  fs.writeFileSync(TARGET_PATH, JSON.stringify(rows, null, '  '))
}

main()
