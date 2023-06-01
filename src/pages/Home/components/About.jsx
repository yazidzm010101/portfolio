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
            <Stack direction={{base: "column", md: "row"}} alignItems={"flex-start"} spacing={7}>
                <Box w={{base: 'full', md: "40%"}} pos={"relative"}>
                    <Heading
                        w={"full"}
                        as="h2"
                        mb={10}
                        px={4}
                        textAlign={{base: "center", md: "start"}}
                        fontSize={"xl"}
                        letterSpacing={3}
                        fontWeight={"extrabold"}
                        textTransform={"uppercase"}
                        color={"green.300"}
                    >
                        About me
                    </Heading>
                    <Box
                        color={"green.100"}
                        opacity={0.5}
                        pos={"absolute"}
                        top={0}
                        left={0}
                        w={"200%"}
                        transform={"translate(-50%, 0)"}
                        zIndex={-1}
                    >
                        <Blob />
                    </Box>
                    <AspectRatio ratio={1} w={"200px"} mx={{base: "auto", md:"unset"}} maxW={"full"}>
                        <Image
                            rounded={"3rem"}
                            w={"full"}
                            h={"full"}
                            src={"/profile.png"}
                        />
                    </AspectRatio>
                </Box>
                <VStack w={{base: "full", md: "80%"}}>
                    <Text
                        w={"full"}
                        letterSpacing={1}
                        lineHeight={2}
                        fontSize={{base: "lg", md: "xl"}}
                    >
                        I'm Yazid Zaidan Mujadid. Sit reprehenderit ullamco quis
                        mollit anim ad sunt magna enim ad. Incididunt et sunt
                        adipisicing cupidatat ipsum velit. Ex esse sit laboris
                        sunt eiusmod excepteur duis proident do. Elit velit
                        occaecat anim non amet Lorem sunt incididunt commodo
                        velit.Irure commodo reprehenderit irure voluptate
                        aliquip ipsum id culpa commodo velit cupidatat commodo.
                        Irure sit laborum consectetur cillum est excepteur. Elit
                        exercitation magna proident ea dolore non.
                    </Text>
                </VStack>
            </Stack>
        </Box>
    );
}

export default About;
