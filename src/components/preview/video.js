import withDefaults from "@utils/with-defaults";
import { Card, Row, Col, Text, Button, Spacer } from "@nextui-org/react";
import { styled } from "@nextui-org/react";
import { CircleCheck, Separator } from "tabler-icons-react";
import HRNumbers from "human-readable-numbers"

const StyledImage = styled("div", { "--nextui-radii-lg": 0 });

const defaultProps = {
  url: "",
  bestThumbnail: "{}",
  title: "Video",
  channel: "Channel",
  channelIcon: "",
  width: 360,
  height: 203,
  verified: false,
  videoDetails: JSON.stringify({ views: 0, uploaded: "" }),
};

const VideoPreview = ({
  url,
  bestThumbnail,
  title,
  channel,
  channelIcon,
  width,
  height,
  verified,
  videoDetails,
  ...props
}) => {
  const thumbnail = JSON.parse(bestThumbnail);
  const video = JSON.parse(videoDetails)
  return (
    <div style={{ margin: "10px" }}>
      <Card
        cover
        hoverable
        clickable
        css={{ w: width, p: 0 }}
        onClick={() => {
          location.href = url;
        }}
      >
        <Card.Body>
          <StyledImage>
            <Card.Image
              src={thumbnail.url}
              width="100%"
              alt=""
              height={height}
            />
          </StyledImage>
        </Card.Body>
        <Card.Footer
          css={{
            background: "$menuBackground",
            borderTop: "$borderWeights$light solid $gray700",
            zIndex: 1,
          }}
        >
          <Row wrap="wrap" justify="space-between">
            <Col>
              <Row>
                <Col span={2}>
                  <Card.Image
                    src={channelIcon}
                    css={{ background: "black" }}
                    height={40}
                    width={40}
                    alt="Channel Icon"
                  />
                </Col>
                <Col css={{ marginLeft: "5px" }}>
                  <Text color="$text" size={15} weight="medium">
                    {title}
                  </Text>
                  <Text color="#d1d1d1" size={12}>
                    {channel}{" "}
                    {verified && (
                      <CircleCheck
                        size={18}
                        style={{ transform: "translateY(5px)" }}
                      />
                    )}
                  </Text>
                  <Text color="#d1d1d1" size={12}>
                    {HRNumbers.toHumanString(video.views)} <Separator
                      size={18}
                      style={{ transform: "translateY(5px) rotate(90deg)" }}
                    /> {video.uploaded}
                  </Text>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row justify="flex-end"></Row>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default withDefaults(VideoPreview, defaultProps);
