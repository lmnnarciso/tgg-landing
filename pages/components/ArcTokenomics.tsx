import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/react";

const distribution = [
  [
    {
      name: "Gacha Girls Emissions",
      value: "69.42%",
    },
    {
      name: "Bank Incentive",
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

export default function ArcTokenomics() {
  return (
    <Flex py="64">
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
            <HStack w="full" justifyContent="space-between">
              {items.map((item) => (
                <>
                  <VStack w="full" alignItems="start">
                    <Text>{item.name}</Text>
                    <Text color="yellow.200">{item.value}</Text>
                  </VStack>
                </>
              ))}
            </HStack>
          );
        })}
      </VStack>
      {/* Image */}
      <Box>Image</Box>
    </Flex>
  );
}
