import {
  Box,
  Button,
  Flex,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import {
  AquaStone,
  FireStone,
  GachaMachine,
  TerraStone,
} from "../../factory/assets";

const list = [
  "Upgrade your Gacha Girls with our Power Stone Gacha",
  "Infuse elemental stones by staking them to your Gacha Girl",
  "Increase Gamer Score & Cosmic Level to increase daily rewards & $ARC earnings",
];

const stoneSize = {
  width: "100px",
  height: "100px",
};

export default function HeroSecond() {
  return (
    <Flex py="32" justifyContent="space-between">
      <Box>
        <Image
          src={GachaMachine}
          width="500px"
          height="500px"
          alt="Gacha Machine"
        />
      </Box>
      <VStack alignItems="center" gap="16">
        <Text fontSize="5xl">Gacha Girls are fully upgradeable NFTs</Text>
        <UnorderedList w="full" pl="8" fontSize="xl">
          {list.map((item) => (
            <ListItem key={item}>{item}</ListItem>
          ))}
        </UnorderedList>
        <Flex justifyContent="space-between" w="full">
          <Box>
            <Image
              height={stoneSize.height}
              width={stoneSize.width}
              src={FireStone}
              alt="Fire stone"
            />
            <Text fontSize="2xl">Fire Stone</Text>
          </Box>
          <Box>
            <Image
              height={stoneSize.height}
              width={stoneSize.width}
              src={AquaStone}
              alt="aqua stone"
            />
            <Text fontSize="2xl">Aqua Stone</Text>
          </Box>
          <Box>
            <Image
              height={stoneSize.height}
              width={stoneSize.width}
              src={TerraStone}
              alt="terra stone"
            />
            <Text fontSize="2xl">Terra Stone</Text>
          </Box>
          <Box>
            <Image
              height={stoneSize.height}
              width={stoneSize.width}
              src={TerraStone}
              alt="Moonstone"
            />
            <Text fontSize="2xl">Moonstone</Text>
          </Box>
          <Box>
            <Image
              height={stoneSize.height}
              width={stoneSize.width}
              src={TerraStone}
              alt="Arc token"
            />
            <Text fontSize="2xl">$ARC token</Text>
          </Box>
        </Flex>
      </VStack>
    </Flex>
  );
}
