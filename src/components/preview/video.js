import withDefaults from "@utils/with-defaults";
import { Card, Row, Col, Text, Button, Spacer } from "@nextui-org/react"
import { styled } from '@nextui-org/react';
import { CircleCheck } from 'tabler-icons-react';

const StyledImage = styled('div', { '--nextui-radii-lg': 0 })

const defaultProps = {
  url: "",
  bestThumbnail: ["", 0, 0],
  title: "Video",
  channel: "Channel",
  channelIcon: "",
  width: 360,
  height: 203,
  verified: false
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
  ...props
}) => {
  const thumbnail = { url: bestThumbnail[0], width: bestThumbnail[1], height: bestThumbnail[2] }
  return (
    <div style={{ margin: "10px" }}>
      <Card cover hoverable clickable css={{ w: width, p: 0 }} onClick={() => {
        location.href = url
      }}>
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
            background: "$headerBackground",
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
                    {channel} {verified && <CircleCheck size={18} style={{ transform: 'translateY(5px)' }} />}
                  </Text>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row justify="flex-end">

              </Row>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default withDefaults(VideoPreview, defaultProps);
