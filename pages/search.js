import { Spacer, Text } from '@nextui-org/react'
import { styled } from '@nextui-org/react';
import Search from "@components/search"
import Head from 'next/head'

const Hero = styled("div", {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center"
})

export default function SearchPage() {
  return (
    <>
      <Head>
        <title>Hidden YT</title>
      </Head>
      <Hero>
        <Text size={35} weight="bold">Search</Text>
        <Spacer y={0.5} />
        <Search />
      </Hero>
    </>
  )
} 
