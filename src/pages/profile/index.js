import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Flex, Text } from "@chakra-ui/layout";
import React from "react";
import Navbar from "../../components/navbar";

function Profile() {
  return <Flex w='100%' flexDir='column'>
    <Navbar/>
    <Flex w='100%'>
      <Flex w='40%' justify='center' align='center' p='10' bg='gray.100' mr='8'>
        <Image w='250px' h='250px' borderRadius='full' src='https://cdn.britannica.com/w:400,h:300,c:crop/33/194733-050-4CF75F31/Girl-with-a-Pearl-Earring-canvas-Johannes-1665.jpg'/>
      </Flex>
      <Flex w='50%' justify='center' flexDir='column'>
        <Text fontSize='4xl' fontWeight='bold'>Immanuel Adeoye</Text>
        <Button mt='6' p='6' bg='blue.400' w='40%'color='white' fontWeight='bold'>Manage CV Info</Button>
      </Flex>
    </Flex>
    
    
    </Flex>
}

export default Profile;
