import {
  Box,
  Flex,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import {
  AquaStone,
  ArcToken,
  FireStone,
  GachaGirl3,
  GachaMachine,
  MoonStone,
  TerraStone,
} from "../factory/assets";

const list = [
  "Stake Elemental Stones to your Gacha Girl & increase their power",
  "Raise your Gamer Score & Cosmic Level with items from the gacha",
  "Increase your daily passive $ARC earning!",
];

const stoneSize = {
  width: "100px",
  height: "100px",
};

export default function HeroSecond({ id }: { id: string }) {
  return (
    <Flex
      id={id}
      py="32"
      justifyContent="space-between"
      flexDirection={{ base: "column", lg: "row" }}
      alignItems={{ base: "center" }}
    >
      <Box position="relative" flex="1">
        <Box position="relative" zIndex="3">
          <Image
            src={GachaMachine}
            width="500px"
            height="500px"
            alt="Gacha Machine"
            unoptimized
          />
        </Box>
        <Box
          zIndex="1"
          position="absolute"
          top="-2vmin"
          right="22vmin"
          border="5px solid white"
          rounded="lg"
          w="40%"
          h="40%"
          mb="-5"
        >
          <Image
            src={GachaGirl3}
            width="500px"
            height="500px"
            alt="Gacha Machine"
            unoptimized
            layout="fill"
          />
        </Box>
      </Box>
      <VStack alignItems="center" gap="16" flex="2">
        <Text fontSize="7xl" textAlign="start">
          Level Up your $ARC earnings with the Power Stone Gacha!
        </Text>
        <UnorderedList w="full" pl="8" fontSize="3xl">
          {list.map((item) => (
            <ListItem key={item}>{item}</ListItem>
          ))}
        </UnorderedList>
        <Flex justifyContent="space-between" w="full" flexWrap="wrap">
          <Box>
            <Image
              height={stoneSize.height}
              width={stoneSize.width}
              src={FireStone}
              alt="Fire stone"
              unoptimized
            />
            <Text fontSize="2xl">Fire Stone</Text>
          </Box>
          <Box>
            <Image
              height={stoneSize.height}
              width={stoneSize.width}
              src={AquaStone}
              alt="aqua stone"
              unoptimized
            />
            <Text fontSize="2xl">Aqua Stone</Text>
          </Box>
          <Box>
            <Image
              height={stoneSize.height}
              width={stoneSize.width}
              src={TerraStone}
              alt="terra stone"
              unoptimized
            />
            <Text fontSize="2xl">Terra Stone</Text>
          </Box>
          <Box>
            <Image
              height={stoneSize.height}
              width={stoneSize.width}
              src={MoonStone}
              alt="Moonstone"
            />
            <Text fontSize="2xl">Moonstone</Text>
          </Box>
          <Box>
            <Image
              height={stoneSize.height}
              width={stoneSize.width}
              src={ArcToken}
              alt="Arc token"
            />
            <Text fontSize="2xl">$ARC token</Text>
          </Box>
        </Flex>
      </VStack>
    </Flex>
  );
}
