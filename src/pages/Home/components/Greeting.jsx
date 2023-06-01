import { Button, Heading, Icon, Link, Text, VStack } from "@chakra-ui/react";
import { FaPaperPlane } from "react-icons/fa";

function Greeting() {
    return (
        <VStack spacing={12} px={4}>
            <Heading
                as={"h1"}
                letterSpacing={1}
                fontWeight={"extrabold"}
                maxW={"640px"}
                fontSize={"5xl"}
                textAlign={"center"}
                bgGradient={"linear(to-br, green.200, green.300, blue.400)"}
                bgClip={"text"}
            >
                Front-end Developer with Fresh Experience
            </Heading>
            <Text
                textAlign={"center"}
                maxW={"640px"}
                fontSize={"lg"}
                color={"gray.600"}
            >
                Nisi elit laborum pariatur elit. Occaecat nisi commodo in elit
                ea adipisicing commodo sunt ex sunt elit.
            </Text>
            <Button
                as={Link}
                rightIcon={<Icon as={FaPaperPlane} />}
                rounded={"3xl"}
                px={10}
                py={6}
                href="mailto:yazidzm.developer@gmail.com?subject=Hello%20Yazid"
                bg={"green.200"}
                letterSpacing={1}
                _hover={{ bg: "green.300" }}
                color={"green.800"}
            >
                Get in touch
            </Button>
        </VStack>
    );
}

export default Greeting;
