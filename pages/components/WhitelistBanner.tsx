import { Button, Flex, Text, VStack } from "@chakra-ui/react";
import TGGButton from "./shared/Button";

const whitelistingDetails =
  "Brief text about the whitelisting process, date frame, conditions, limits, and a link to the docs where more info can be found.";

export default function WhitelistBanner() {
  return (
    <Flex
      p="32"
      bg="url(/images/Arcade_Final.jpg), linear-gradient(95deg, rgba(46,71,168,1) 0%, rgba(185,60,119,1) 100%)"
      //   bgColor="pink-gradient"
      backgroundBlendMode="overlay"
      color="white"
      w="full"
      boxShadow="0px 0px 112px 5px rgba(136,230,251,0.9), 0px 0px 21px 10px rgba(136,230,251,0.9), 0px 0px 5px 5px rgba(136,230,251,0.9), -101px 51px 5px 0px rgba(0,0,0,1)"
      sx={{
        "::before": {
          content: '""',
          boxShadow: "0px 0px 21px 10px rgba(136,230,251,0.9)",
        },
      }}
    >
      <VStack alignItems="start">
        <Text fontSize="8xl" fontWeight="bold">
          GETTING WHITELISTED FOR PRESALE
        </Text>
        <Text fontSize="2xl">{whitelistingDetails}</Text>
        <Flex gap="12" justifyContent="start">
          <TGGButton
            bg="transparent"
            borderColor="brand.flame"
            borderWidth="4px"
            boxShadow="pink-shadow"
            pl="8"
            pr="12"
            h="12"
            textAlign="center"
            // verticalAlign="center"
          >
            Discord
          </TGGButton>
          <TGGButton
            bg="transparent"
            borderColor="brand.flame"
            borderWidth="4px"
            boxShadow="pink-shadow"
            pl="8"
            pr="12"
            h="12"
            textAlign="center"
          >
            {" "}
            Twitter
          </TGGButton>
          <TGGButton
            bg="transparent"
            borderColor="brand.flame"
            borderWidth="4px"
            boxShadow="pink-shadow"
            pl="8"
            pr="12"
            h="12"
            textAlign="center"
          >
            Docs
          </TGGButton>
        </Flex>
      </VStack>
    </Flex>
  );
}
