import { Box, Container } from "@chakra-ui/react";
import type { NextPage } from "next";
import ArcTokenomics from "../components/ArcTokenomics";
import Hero from "../components/Hero";
import HeroSecond from "../components/HeroSecond";
import Roadmap from "../components/Roadmap";
import Team from "../components/Team";
import WhitelistBanner from "../components/WhitelistBanner";
import { NavBar } from "../components/NavBar";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import { Container as ParticleContainer, Engine } from "tsparticles-engine";
import { Carousel } from "../components/Carousel";

const Home: NextPage = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: ParticleContainer | undefined) => {
      await console.log(container);
    },
    []
  );
  return (
    <Box bg="linear-gradient(95deg, rgba(46,71,168,1) 0%, rgba(185,60,119,1) 100%);">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: "0",
          left: "0",
        }}
        params={{
          autoPlay: true,
          particles: {
            opacity: {
              value: 0.5,
            },
            number: {
              value: 480,
              density: {
                enable: false,
              },
            },
            links: {
              opacity: 0.5,
            },
            size: {
              value: 2,
              random: true,
              anim: {
                speed: 3,
                size_min: 0.3,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              enable: true,
              random: true,
              speed: 1,
              direction: "none",
              out_mode: "out",
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "bubble",
              },
              // onclick: {
              //   enable: true,
              //   mode: "repulse",
              // },
            },
            modes: {
              bubble: {
                distance: 250,
                duration: 2,
                size: 0,
                opacity: 0,
              },
              repulse: {
                distance: 400,
                duration: 4,
              },
            },
          },
        }}
      />
      <NavBar />
      <Container
        maxW={{ base: "2xl", lg: "8xl" }}
        color="white"
        textShadow={`1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000`}
      >
        <Hero id="hero" />
        <HeroSecond id="hero-second" />
        <Carousel />
        <WhitelistBanner id="whitelist" />
        <ArcTokenomics id="tokenomics" />
        <Team id="team" />
        <Roadmap id="roadmap" />
      </Container>
    </Box>
  );
};

export default Home;
