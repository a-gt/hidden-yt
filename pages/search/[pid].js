import { useRouter } from "next/router";
import useSWR from "swr";
import axios from "axios";
import VideoPreview from "@components/preview/video";
import { Grid, Loading, Text, Spacer } from "@nextui-org/react";
import Head from 'next/head'
import { useState, useEffect } from "react"

const SearchPage = () => {
  const router = useRouter();
  const { pid: search } = router.query;

  const fetcher = (url) => axios.get(url).then((res) => res.data);
  /*const { data, error } = useSWR("/api/search/" + search, fetcher, {
    revalidateOnFocus: false,
    revalidateOnMount: false,
    revalidateOnReconnect: false,
    refreshWhenOffline: false,
    refreshWhenHidden: false,
    refreshInterval: 0
  });*/

  const [data, setData] = useState(null)
  const [error, setError] = useState(false)

  useEffect(async ()=>{
    setData(null)
    try {
      setData(await fetcher('/api/search/'+search))
      console.log(data)
    } catch(e) {
      setError(e)
    }
  }, [search])

  if (error) return <div>Failed to load</div>;
  if (!data) return <><Spacer y={1} /><Loading css={{ position: "absolute", left: "50%", transform: "translateX(-50%)" }} /></>;
  if (data)
    return (
      <>
        <Head>
          <title>Search results for "{search}"</title>
        </Head>
        <div style={{ textAlign: 'center' }}>
          <Spacer y={0.3} />
          <Text size={25} weight="bold">Search results for "{search}"</Text>
          <Grid.Container gap={2} justify="center" style={{ textAlign: 'left' }}>
            {data.items.map((v, i) => {
              if (v.type == "video") {
                return (
                  <VideoPreview
                    title={v.title}
                    url={v.url}
                    bestThumbnail={[
                      v.bestThumbnail.url,
                      v.bestThumbnail.width,
                      v.bestThumbnail.height,
                    ]}
                    channel={v.author.name}
                    channelIcon={v.author.bestAvatar.url}
                    verified={v.author.verified}
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
