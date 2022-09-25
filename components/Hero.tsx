import { Box, Flex, Show, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { GachaGirl } from "../factory/assets";
import TGGButton from "./shared/Button";

export default function Hero({ id }: { id: string }) {
  return (
    <Flex id={id}>
      <VStack alignItems={{ base: "center", lg: "start" }} gap="4">
        <Text
          fontSize={{ base: "lg", lg: "2xl" }}
          textAlign={{ base: "center", lg: "start" }}
          width="full"
        >
          Minting soon on Avalanche
        </Text>
        <Text
          fontWeight={{ base: "extrabold", lg: "bold" }}
          fontSize={{ base: "6xl", lg: "8xl" }}
          textAlign={{ base: "center", lg: "start" }}
        >
          THE CUTEST GIRLS ON THE BLOCK
          <Text as="span" opacity="0.5">
            CHAIN
          </Text>
        </Text>
        <Text fontSize="2xl" textAlign={{ base: "center", lg: "start" }}>
          Tokyo Gacha Girls is a 2D anime themed idle RPG that will feel and
          play like a Japanese visual novel game, with a dash of Play-to-Earn
          features.
        </Text>
        <TGGButton w="200px">Launch App</TGGButton>
      </VStack>
      <Show breakpoint="(min-width: 900px)">
        <Box>
          {/* <Box position="absolute" right="5vmin" zIndex="-1"> */}
          <Image
            src={GachaGirl}
            width="600px"
            height="600px"
            layout="fixed"
            alt="Gacha Girl Hero"
          />
          {/* </Box> */}
        </Box>
      </Show>
    </Flex>
  );
}
