import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { Chart } from "../factory/assets";
const distribution = [
  [
    {
      name: "Gacha Girl Holder Rewards",
      value: "69.420%",
    },
    {
      name: "Single Staking 'Bank' Rewards",
      value: "5%",
    },
  ],
  [
    {
      name: "Developer & Operations",
      value: "16.38%",
    },
    {
      name: "Team",
      value: "4%",
    },
  ],
  [
    {
      name: "Initial Liquidity",
      value: "4%",
    },
    {
      name: "Seed Funding",
      value: "1.2%",
    },
  ],
];

export default function ArcTokenomics({ id }: { id: string }) {
  return (
    <Flex
      id={id}
      py="32"
      position="relative"
      flexDirection={{ base: "column", lg: "row" }}
      alignContent="center"
      justifyContent="center"
    >
      <VStack gap="8">
        <Text fontSize="7xl">
          <Text as="span" color="brand.pink">
            $ARC
          </Text>{" "}
          TOKENOMICS
        </Text>
        <VStack alignItems="start" w="full">
          <Text>Max Supply</Text>
          <Text fontSize="5xl" color="yellow.200">
            50,000,000
          </Text>
        </VStack>
        {distribution.map((items) => {
          return (
            <HStack w="full" key={items[0].name} justifyContent="space-between">
              {items.map((item) => (
                <>
                  <VStack key={item.name} w="full" alignItems="start">
                    <Text fontSize="3xl">{item.name}</Text>
                    <Text fontSize="3xl" color="yellow.200">
                      {item.value}
                    </Text>
                  </VStack>
                </>
              ))}
            </HStack>
          );
        })}
      </VStack>
      {/* Image */}
      <Box display={{ base: "none", lg: "flex" }}>
        <Box mx="auto" my="auto">
          <Image
            src={Chart}
            width="8000px"
            height="4000px"
            alt="Distribution Chart"
          />
        </Box>
      </Box>
    </Flex>
  );
}
