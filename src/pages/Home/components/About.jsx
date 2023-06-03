import {
    AspectRatio,
    Box,
    HStack,
    Heading,
    Image,
    Stack,
    Text,
    VStack,
} from "@chakra-ui/react";
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
                        color={"green.300"}
                    >
                        About me
                    </Heading>
                    <Box
                        color={"gray.100"}
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
                        w={"200px"}
                        mx={{ base: "auto", md: "unset" }}
                        maxW={"full"}
                    >
                        <Image
                            rounded={"3rem"}
                            w={"full"}
                            h={"full"}
                            src={"profile.png"}
                        />
                    </AspectRatio>
                </Box>
                <VStack w={{ base: "full", md: "80%" }} pos={"relative"}>
                    <Text
                        w={"full"}
                        letterSpacing={1}
                        lineHeight={2}
                        fontSize={{ base: "md", md: "lg" }}
                    >
                        I'm Yazid Zaidan Mujadid.
                        <br /> Already has an interest in information
                        technology since high school and graduated from
                        Gunadarma University in 2021. During college,
                        contributed to a computer laboratory and learned web
                        programming from PHP to Javascript. Gained first work 
                        experience at Pt. Jojo Nomic Indonesia and are now
                        looking for a new opportunity as a Front-end Web
                        Developer.
                    </Text>
                </VStack>
            </Stack>
        </Box>
    );
}

export default About;
