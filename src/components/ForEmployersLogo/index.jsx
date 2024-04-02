import React from "react";
import { Text, Heading, Flex, Box } from "@chakra-ui/react";
import style from './re.css';

export default function ForEmployersLogo({ rework, ai = "ai", ...props }) {
  return (
    <>
    
    <Box {...props}>
    <div className="box1" > <span className="spn1">re</span></div>
      <Flex gap="6px" alignItems="center " flexWrap="wrap">
        <Heading
          size="lg"
          as="h1"
          color="white.A700_01"
          pl="0px"
          letterSpacing="-0.71px"
          fontFamily="Outfit"
          fontSize="35.5px"
          borderColor="deep_purple.600"
          borderWidth="1px"
          borderStyle="solid"
          borderRadius="5px"
        >
         
          <Heading size="lg" as="span" color="white.A700_01" fontFamily="Actor" fontWeight={400}>
            work
          </Heading>
        </Heading>
        <Text size="xs" color="white.A700_01" mb="4px" fontFamily="Gilroy-Regular" fontSize="11.43px" alignSelf="end">
          {ai}
        </Text>
      </Flex>
    </Box>
    </>
  );
}
