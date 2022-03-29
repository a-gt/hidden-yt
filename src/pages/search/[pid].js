import { useRouter } from "next/router";
import useSWR from "swr";
import axios from "axios";
import VideoPreview from "@components/preview/video";
import { Grid, Loading, Text, Spacer } from "@nextui-org/react";
import Head from "next/head";
import { useState, useEffect } from "react";

import ytsr from "ytsr";
import Cache from "node-cache";

const limit = process.env.LIMIT || 25;
const cacheTime = process.env.CACHE_TIME || 3;
const cache = new Cache({ stdTTL: cacheTime * 1000 * 60 * 60 });

export async function getServerSideProps({ params }) {
  const query = params.pid;

  if (cache.has(query))
    return { props: { results: JSON.stringify(cache.get(query)) } };
  const results = await ytsr(query, { limit });
  cache.set(query, results);
  return { props: { results: JSON.stringify(results) } };
}

const SearchPage = ({ results }) => {
  const router = useRouter();
  const { pid: search } = router.query;
  const data = JSON.parse(results);

  if (!data)
    return (
      <>
        <Spacer y={1} />
        <Loading
          css={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
      </>
    );
  if (data)
    return (
      <>
        <Head>
          <title>Search results for &quot;{search}&quot;</title>
        </Head>
        <div style={{ textAlign: "center" }}>
          <Spacer y={0.3} />
          <Text size={25} weight="bold">
            Search results for &quot;{search}&quot;
          </Text>
          <Grid.Container
            gap={2}
            justify="center"
            style={{ textAlign: "left" }}
          >
            {data.items.map((v, i) => {
              if (v.type == "video") {
                return (
                  <VideoPreview
                    title={v.title}
                    url={v.url}
                    bestThumbnail={JSON.stringify(v.bestThumbnail)}
                    channel={v.author.name}
                    channelIcon={v.author.bestAvatar.url}
                    verified={v.author.verified}
                    videoDetails={JSON.stringify({
                      views: v.views,
                      uploaded: v.uploadedAt
                    })}
                    key={i}
                  />
                );
              }
            })}
          </Grid.Container>
        </div>
      </>
    );
};

export default SearchPage;
