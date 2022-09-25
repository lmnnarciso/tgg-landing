import {
  Flex,
  HStack,
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
export default function Roadmap({ id }: { id: string }) {
  return (
    <VStack py="60" w="full" id={id}>
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
            <Text>Phase 0</Text>
            <UnorderedList>
              {phase1.map((item) => (
                <ListItem key={item}>{item}</ListItem>
              ))}
            </UnorderedList>
          </VStack>
        </Flex>
        <Flex>
          <VStack>
            <Text>Phase 1</Text>
            <UnorderedList>
              {phase2.map((item) => (
                <ListItem key={item}>{item}</ListItem>
              ))}
            </UnorderedList>
          </VStack>
        </Flex>
        <Flex>
          <VStack>
            <Text>Phase 2</Text>
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
