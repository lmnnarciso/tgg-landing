import { Box, Button, Flex, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { GachaGirl } from "../../factory/assets";
import TGGButton from "./shared/Button";

export default function Hero() {
  return (
    <Flex>
      <VStack alignItems="start" gap="4">
        <Text fontSize="2xl" textAlign="start" width="full">
          Minting soon on Avalanche
        </Text>
        <Text fontSize="8xl">
          THE CUTESTGIRLS ON THE BLOCK
          <Text as="span" opacity="0.5">
            CHAIN
          </Text>
        </Text>
        <Text fontSize="2xl">
          Tokyo Gacha Girls is a 2D anime themed idle RPG that will feel and
          play like a Japanese visual novel game, with a dash of Play-to-Earn
          features.
        </Text>
        <TGGButton w="200px">Launch App</TGGButton>
      </VStack>
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
    </Flex>
  );
}
