import { useRouter } from "next/router";
import useSWR from "swr";
import axios from "axios";
import VideoPreview from "@components/preview/video";
import { Grid } from "@nextui-org/react";

const SearchPage = () => {
  const router = useRouter();
  const { pid: search } = router.query;

  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data, error } = useSWR("/api/search/" + search, fetcher, {
    revalidateOnFocus: false,
    revalidateOnMount: false,
    revalidateOnReconnect: false,
    refreshWhenOffline: false,
    refreshWhenHidden: false,
    refreshInterval: 0
  });

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  if (data)
    return (
      <div>
        <Grid.Container gap={2} justify="center">
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
    );
};

export default SearchPage;
