import {
  Flex,
  HStack,
  List,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";

const phase1 = [
  "Social Media Launch",
  "Discord Community Building",
  "Website Launch",
  "Cosmic Orb Distribution",
];

const phase2 = [
  "NFT Mint",
  "Gacha Girl NFT pre-mint",
  "Public Mint",
  "$ARC Token Launch",
  "Token Emissions",
  "Bank Release",
  "Power Stone Gacha",
];

const phase3 = [
  "Gacha Girl NFT",
  "Gacha Girl Upgrade",
  "Website Launch",
  "Arcade Game",
  "RPG Game",
];
export default function Roadmap() {
  return (
    <VStack py="60" w="full">
      <Text fontSize="8xl" color="brand.aqua" w="full">
        Roadmap
      </Text>
      <HStack
        w="full"
        justifyContent="space-between"
        fontSize="2xl"
        alignItems="start"
      >
        <Flex>
          <VStack>
            <UnorderedList>
              {phase1.map((item) => (
                <ListItem key={item}>{item}</ListItem>
              ))}
            </UnorderedList>
          </VStack>
        </Flex>
        <Flex>
          <VStack>
            <UnorderedList>
              {phase2.map((item) => (
                <ListItem key={item}>{item}</ListItem>
              ))}
            </UnorderedList>
          </VStack>
        </Flex>
        <Flex>
          <VStack>
            <UnorderedList>
              {phase3.map((item) => (
                <ListItem key={item}>{item}</ListItem>
              ))}
            </UnorderedList>
          </VStack>
        </Flex>
      </HStack>
    </VStack>
  );
}
