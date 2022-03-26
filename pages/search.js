import { Spacer, Text } from '@nextui-org/react'
import { styled } from '@nextui-org/react';
import Search from "@components/search"


const Hero = styled("div", {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center"
})

export default function SearchPage() {
  return (
    <Hero>
      <Text size={35} weight="bold">Search</Text>
      <Spacer y={0.5} />
      <Search />
    </Hero>
  )
}
