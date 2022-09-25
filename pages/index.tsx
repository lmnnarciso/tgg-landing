import { Box, Container } from "@chakra-ui/react";
import type { NextPage } from "next";
import ArcTokenomics from "../components/ArcTokenomics";
import Hero from "../components/Hero";
import HeroSecond from "../components/HeroSecond";
import Roadmap from "../components/Roadmap";
import Team from "../components/Team";
import WhitelistBanner from "../components/WhitelistBanner";
import { NavBar } from "../components/NavBar";
const Home: NextPage = () => {
  return (
    <Box bg="linear-gradient(95deg, rgba(46,71,168,1) 0%, rgba(185,60,119,1) 100%);">
      <NavBar />
      <Container
        maxW={{ base: "2xl", lg: "8xl" }}
        color="white"
        textShadow={`1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000`}
      >
        <Hero id="hero" />
        <HeroSecond id="hero-second" />
        <WhitelistBanner id="" />
        <ArcTokenomics id="tokenomics" />
        <Team id="team" />
        <Roadmap id="roadmap" />
      </Container>
    </Box>
  );
};

export default Home;
