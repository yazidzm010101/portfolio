import {
    AspectRatio,
    Box,
    Flex,
    HStack,
    Heading,
    Icon,
    Image,
    Spacer,
    Stack,
    Text,
    VStack,
} from "@chakra-ui/react";
import { SiChakraui, SiVite, SiReact } from "react-icons/si";
import Blob from "../../../assets/Blob";

function About() {
    return (
        <Box id="about" maxW="container.xl" mx={"auto"} px={6}>
            <Stack
                direction={{ base: "column", md: "row" }}
                alignItems={"flex-start"}
                spacing={7}
            >
                <Box w={{ base: "full", md: "40%" }} pos={"relative"}>
                    <Heading
                        w={"full"}
                        as="h2"
                        mb={10}
                        px={4}
                        textAlign={{ base: "center", md: "start" }}
                        fontSize={"xl"}
                        letterSpacing={3}
                        fontWeight={"extrabold"}
                        textTransform={"uppercase"}
                        color={"teal.300"}
                    >
                        About me
                    </Heading>
                    <Box
                        color={"blue.50"}
                        pos={"absolute"}
                        top={0}
                        left={0}
                        w={"400%"}
                        transform={"translate(-50%, 0)"}
                    >
                        <Blob />
                    </Box>
                    <AspectRatio
                        ratio={1}
                        w={"160px"}
                        mx={{ base: "auto", md: "unset" }}
                        maxW={"full"}
                    >
                        <Image
                            rounded={"999px"}
                            w={"full"}
                            h={"full"}
                            src={"profile.png"}
                        />
                    </AspectRatio>
                </Box>
                <VStack
                    w={{ base: "full", md: "80%" }}
                    pos={"relative"}
                    alignItems={"flex-start"}
                    textAlign={{ base: "center", md: "start" }}
                >
                    <Text
                        w={"full"}
                        letterSpacing={1}
                        lineHeight={2}
                        fontWeight={"medium"}
                        color={"gray.800"}
                        fontSize={{ base: "md", md: "lg" }}
                    >
                        I'm Yazid Zaidan Mujadid
                    </Text>
                    <Text
                        w={"full"}
                        letterSpacing={1}
                        lineHeight={2}
                        color={"gray.600"}
                        fontSize={{ base: "md", md: "lg" }}
                    >
                        Already has an interest in information technology since
                        high school and graduated from Gunadarma University in
                        2021. During college, contributed to a computer
                        laboratory and learned web programming from PHP to
                        Javascript. Gained first work experience at Pt. Jojo
                        Nomic Indonesia and are now looking for a new
                        opportunity as a Front-end Web Developer.
                    </Text>
                    <Spacer as={"hr"} my={3} />
                    <Text
                        w={"full"}
                        color={"gray.500"}
                        fontSize={{ base: "sm", md: "md" }}
                        textTransform={"uppercase"}
                        letterSpacing={3}
                    >
                        Latest interest
                    </Text>
                    <HStack
                        justifyContent={{ base: "center", md: "flex-start" }}
                        w={"full"}
                        mt={2}
                        spacing={10}
                    >
                        <Flex
                            justifyContent={"center"}
                            alignItems={"center"}
                            color={"purple.500"}
                        >
                            <Icon as={SiVite} mr={2} h={10} w={10} />
                            <Text fontSize={"xl"}>Vite</Text>
                        </Flex>
                        <Flex
                            justifyContent={"center"}
                            alignItems={"center"}
                            color={"blue.400"}
                        >
                            <Icon as={SiReact} mr={2} h={10} w={10} />
                            <Text fontSize={"xl"}>React</Text>
                        </Flex>
                        <Flex
                            justifyContent={"center"}
                            alignItems={"center"}
                            color={"teal.400"}
                        >
                            <Icon as={SiChakraui} mr={2} h={10} w={10} />
                            <Text fontSize={"xl"}>Chakra UI</Text>
                        </Flex>
                    </HStack>
                </VStack>
            </Stack>
        </Box>
    );
}

export default About;
