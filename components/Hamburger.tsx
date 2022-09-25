import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Button, Flex, IconButton } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import { navLinks } from "./NavBar";

export function Hamburger() {
  const [display, changeDisplay] = useState("none");
  return (
    <Flex>
      <Flex position="fixed" top="1rem" right="1rem" align="center">
        {/* Mobile */}
        <IconButton
          aria-label="Open Menu"
          bg="linear-gradient(95deg, rgba(46,71,168,1) 0%, rgba(185,60,119,1) 100%)"
          size="lg"
          mr={2}
          icon={<HamburgerIcon />}
          onClick={() => changeDisplay("flex")}
          display={{ base: "flex", lg: "none" }}
        />
      </Flex>

      {/* Mobile Content */}
      <Flex
        w="100vw"
        display={display}
        bg="linear-gradient(95deg, rgba(46,71,168,1) 0%, rgba(185,60,119,1) 100%)"
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        flexDir="column"
      >
        <Flex
          justify="flex-end"
          bg="linear-gradient(95deg, rgba(46,71,168,1) 0%, rgba(185,60,119,1) 100%)"
        >
          <IconButton
            mt={2}
            mr={2}
            aria-label="Open Menu"
            bg="linear-gradient(95deg, rgba(46,71,168,1) 0%, rgba(185,60,119,1) 100%)"
            size="lg"
            icon={<CloseIcon />}
            onClick={() => changeDisplay("none")}
          />
        </Flex>

        <Flex flexDir="column" align="center">
          {navLinks.map((item) => (
            <Link href={`${item.link}`} key={item.link} passHref>
              <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
                {item.name}
              </Button>
            </Link>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}
