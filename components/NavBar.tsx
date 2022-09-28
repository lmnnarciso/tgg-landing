import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import { TGGLogo } from "../factory/assets";
import { Hamburger } from "./Hamburger";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import { TbBrandDiscord } from "react-icons/tb";
import { Icon } from "@chakra-ui/icons";
import { AiFillTwitterCircle } from "react-icons/ai";
export const navLinks = [
  { link: "#hero", name: "Home" },
  { link: "#hero-second", name: "About" },
  { link: "#whitelist", name: "Whitelist Details" },
  { link: "#tokenomics", name: "Tokenomics" },
  { link: "#team", name: "Team" },
  { link: "#roadmap", name: "Roadmap" },
];
export function NavBar() {
  return (
    <Flex
      justifyContent={{ sm: "flex-start", lg: "space-between" }}
      gap={{ base: "0", lg: "24" }}
      mx={{ base: "auto", lg: "80" }}
    >
      {/* Logo */}
      <Flex
        alignItems="center"
        mt={{ base: "0", lg: "-12" }}
        margin={{ base: "auto" }}
      >
        <Image
          src={TGGLogo}
          width={"400px"}
          height={"400px"}
          layout="fixed"
          alt="TGG Logo"
        />
      </Flex>
      <Hamburger />
      {/* Navigation */}
      <Flex
        display={{ base: "none", lg: "flex" }}
        as="nav"
        justifyContent="space-around"
        gap="16"
        fontWeight="bold"
        py="32"
        fontSize="2xl"
        color="white"
      >
        {navLinks.map((link) => (
          <Box key={link.link}>
            <a href={`${link.link}`} key={link.link}>
              {link.name}
            </a>
          </Box>
        ))}
      </Flex>
      {/* Socials */}
      <Flex gap="8" py="32" display={{ base: "none", lg: "flex" }}>
        <a
          href="https://discord.gg/hgfuneuxwF"
          target="_blank"
          rel="noreferrer"
        >
          <Icon as={FaDiscord} width="32px" height="32px" color="white" />
        </a>
        <a
          href="https://twitter.com/TokyoGachaGirls"
          target="_blank"
          rel="noreferrer"
        >
          <Icon
            as={AiFillTwitterCircle}
            width="32px"
            height="32px"
            color="white"
            rounded="full"
          />
        </a>
      </Flex>
    </Flex>
  );
}
