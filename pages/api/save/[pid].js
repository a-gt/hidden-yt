// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import ytsr from "ytsr"
import ytdl from 'ytdl-core'
import m3u8stream from 'm3u8stream'
import miniget from 'miniget'

const user_agent =
  process.env.USER_AGENT ||
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36";


export default async function handler(req, res) {
  if (!req.query.pid) return res.redirect("/");
  try {
    let info = await ytdl.getInfo(req.query.pid);
    info.formats = info.formats.filter(
      (format) => format.hasVideo && format.hasAudio
    );

    if (!info.formats.length) {
      return res
        .status(400)
        .send("This Video is not Available for this Server Region.");
    }

    let headers = {
      "user-agent": user_agent,
    };

    // If user is seeking a video
    if (req.headers.range) {
      headers.range = req.headers.range;
    }

    res.setHeader("content-type", "video/mp4");
    if (info.videoDetails.isLiveContent && info.formats[0].type == "video/ts") {
      return m3u8stream(info.formats[0].url)
        .on("error", (err) => {
          res.status(400).send(err.toString());
          console.error(err);
        })
        .pipe(res);
    }

    let stream = miniget(info.formats[0].url, {
      headers,
    })
      .on("response", (resp) => {
        if (resp.headers["accept-ranges"])
          res.setHeader("accept-ranges", resp.headers["accept-ranges"]);
        if (resp.headers["content-length"])
          res.setHeader("content-length", resp.headers["content-length"]);
        if (resp.headers["content-type"])
          res.setHeader("content-type", resp.headers["content-type"]);
        if (resp.headers["content-range"])
          res.setHeader("content-range", resp.headers["content-range"]);
        if (resp.headers["connection"])
          res.setHeader("connection", resp.headers["connection"]);
        if (resp.headers["cache-control"])
          res.setHeader("cache-control", resp.headers["cache-control"]);
        stream.pipe(res.status(resp.statusCode));
      })
      .on("error", (err) => {
        res.status(400).send(err.toString());
      });
  } catch (error) {
    res.status(400).send(error.toString());
  }
}
