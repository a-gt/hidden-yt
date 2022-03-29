// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import ytsr from "ytsr"
import Cache from "node-cache"

const limit = process.env.LIMIT || 25;
const cacheTime = process.env.CACHE_TIME || 3;
const cache = new Cache({ stdTTL: cacheTime * 1000 * 60 * 60 })

export default async function handler(req, res) {
  const { pid: query } = req.query
  if (!query) return res.status(418).text("A search query is required.")

  try {
    if (cache.has(query)) return res.status(200).json(cache.get(query))
    const results = await ytsr(query, { limit })
    cache.set(query, results)
    res.status(200).json(results)
  } catch (e) {
    console.log(e)
    res.status(500).text("We encountered an unexpected error.")
  }
}
