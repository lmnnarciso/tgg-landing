import { Box, Container, Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import Image from "next/image";
import ArcTokenomics from "./components/ArcTokenomics";
import Hero from "./components/Hero";
import HeroSecond from "./components/HeroSecond";
import Roadmap from "./components/Roadmap";
import Team from "./components/Team";
import WhitelistBanner from "./components/WhitelistBanner";
import { TGGLogo } from "../factory/assets";
const Home: NextPage = () => {
  return (
    <Box bg="linear-gradient(95deg, rgba(46,71,168,1) 0%, rgba(185,60,119,1) 100%);">
      <Flex justifyContent="space-between" gap="24" mx="80">
        {/* Logo */}
        <Box mt="-12">
          <Image
            src={TGGLogo}
            width="200px"
            height="200px"
            layout="fixed"
            alt="TGG Logo"
          />
        </Box>
        {/* Navigation */}
        <Flex
          as="nav"
          justifyContent="space-around"
          gap="16"
          fontSize="xl"
          fontWeight="bold"
          py="12"
        >
          <Box>Home</Box>
          <Box>Gallery</Box>
          <Box>About</Box>
          <Box>Roadmap</Box>
          <Box>Team</Box>
        </Flex>
        {/* Socials */}
        <Flex gap="8" py="12">
          <Box>Icon</Box>
          <Box>Icon</Box>
        </Flex>
      </Flex>
      <Container
        maxW="8xl"
        color="white"
        textShadow={`1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000`}
      >
        <Hero />
        <HeroSecond />
        <WhitelistBanner />
        <ArcTokenomics />
        <Team />
        <Roadmap />
      </Container>
    </Box>
  );
};

export default Home;
