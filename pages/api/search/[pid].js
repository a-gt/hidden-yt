// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import ytsr from "ytsr"
const limit = process.env.LIMIT || 50;

export default async function handler(req, res) {
  const { pid: query } = req.query
  if (!query) return res.status(418).text("A search query is required.")

  try {
    const results = await ytsr(query, { limit })
    res.status(200).json(results)
  } catch (e) {
    console.log(e)
    res.status(500).text("We encountered an unexpected error.")
  }
}
