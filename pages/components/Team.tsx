import { Box, Flex, Grid, GridItem, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { GachaGirl } from "../../factory/assets";

const teamData = [
  {
    name: "Drizz",
    img: GachaGirl,
  },
  {
    name: "Drizz",
    img: GachaGirl,
  },
  {
    name: "Drizz",
    img: GachaGirl,
  },
  {
    name: "Drizz",
    img: GachaGirl,
  },
  {
    name: "Drizz",
    img: GachaGirl,
  },
  {
    name: "Drizz",
    img: GachaGirl,
  },
];

export default function Team({ id }: { id: string }) {
  return (
    <Flex
      id={id}
      gap={{ base: "40", lg: "30" }}
      flexDir={{ base: "column-reverse", lg: "row" }}
    >
      <Grid
        gridTemplateColumns={{ base: "1fr 1fr", lg: "1fr 1fr 1fr" }}
        gridTemplateRows="250px 250px"
        gap="20"
      >
        {teamData.map((member) => (
          <GridItem key={member.name} textAlign="center">
            <Box
              rounded="full"
              border="5px solid white"
              height="250px"
              width="250px"
              style={{
                overflow: "hidden",
              }}
            >
              <Image src={GachaGirl} layout="responsive" alt="team member" />
            </Box>
            <Text fontSize="2xl">{member.name}</Text>
          </GridItem>
        ))}
      </Grid>
      <VStack w="full">
        <Text fontSize="5xl" textAlign="center" w="full" color="brand.flame">
          Team
        </Text>
        <Text>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut
          augue vel est rhoncus lacinia. Pellentesque tincidunt tempus turpis
          eget semper. Praesent malesuada ultricies turpis placerat convallis.
          Sed posuere malesuada erat, vitae malesuada tortor tempor ut.
          Suspendisse pharetra molestie elit maximus malesuada. Aliquam mattis,
          neque sit amet ultricies consectetur, ligula ligula aliquam risus, nec
          volutpat ante quam in sem. Maecenas eget nisi eu tortor commodo
          pretium. Mauris neque eros, aliquam quis odio ut, viverra consequat
          odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Curabitur blandit magna consequat neque pretium, eu maximus nulla
          dignissim. Phasellus id convallis nisi. Duis non sapien cursus quam
          pellentesque mattis ultrices id lectus. Praesent suscipit nisi eget
          metus congue, non eleifend nisl interdum. Mauris mollis at nisl sit
          amet imperdiet. Sed nec faucibus erat, quis maximus elit. Duis
          convallis, enim vitae bibendum euismod, est mauris fermentum metus,
          sit amet rhoncus neque justo id enim. Curabitur congue placerat eros,
          tempor ultricies quam scelerisque non.{" "}
        </Text>
      </VStack>
    </Flex>
  );
}
