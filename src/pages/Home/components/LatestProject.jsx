import {
    AspectRatio,
    Box,
    HStack,
    Heading,
    Image,
    Link,
    Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link as ReactLink } from "react-router-dom";

const data = [
    {
        name: "Qliner",
        thumbnail: "project-qliner.png",
    },
    {
        name: "Hijab Ibnaty",
        thumbnail: "project-hijab.png",
    },
    {
        name: "Qliner",
        thumbnail: "project-qliner.png",
    },
    {
        name: "Hijab Ibnaty",
        thumbnail: "project-hijab.png",
    },
];

function LatestProject() {
    return (
        <Box pos={"relative"} w={"full"} mx={"auto"}>
            <Box w={"full"} maxW={"container.xl"} mx={"auto"}>
                <Heading
                    w={"full"}
                    as="h2"
                    mb={10}
                    px={4}
                    textAlign={{ base: "center" }}
                    fontSize={"xl"}
                    letterSpacing={3}
                    fontWeight={"extrabold"}
                    textTransform={"uppercase"}
                    color={"teal.300"}
                >
                    Discover my latest projects
                </Heading>
            </Box>
            <HStack
                overflowX={"auto"}
                overflowY={"hidden"}
                pos={"relative"}
                px={{ base: 0, lg: "6rem" }}
                py={6}
                _before={{ content: "''", margin: "auto" }}
                _after={{ content: "''", margin: "auto" }}
            >
                {data.map((item, i) => (
                    <Box
                        as={motion.div}
                        initial="offscreen"
                        whileInView="onscreen"
                        key={i}
                        viewport={{ once: false, amount: 0.1 }}
                        variants={{
                            offscreen: {
                                scale: 0.8,
                                opacity: 0,
                            },
                            onscreen: {
                                scale: 1,
                                opacity: 1,
                                transition: {
                                    type: "spring",
                                    bounce: 0.4,
                                    duration: 0.8,
                                },
                            },
                        }}
                        w={"full"}
                        maxW={"480px"}
                        flexShrink={0}
                        px={3}
                    >
                        <Link
                            key={i}
                            as={ReactLink}
                            to={"#"}
                            display={"block"}
                            w={"full"}
                            rounded={"xl"}
                            border={"1px"}
                            borderColor={"blackAlpha.200"}
                            _hover={{
                                transform: "scale(1.01)",
                                borderColor: "green.400",
                            }}
                            overflow={"hidden"}
                        >
                            <AspectRatio ratio={16 / 9}>
                                <>
                                    <Image
                                        border={"1px"}
                                        borderColor={"gray.100"}
                                        src={item.thumbnail}
                                        w={"full"}
                                        h={"full"}
                                        objectFit={"cover"}
                                    />
                                    <Text
                                        bgGradient={
                                            "linear(to-b, rgba(0,0,0,0), blackAlpha.300, blackAlpha.800)"
                                        }
                                        color={"white"}
                                        pb={4}
                                        pt={24}
                                        bottom={0}
                                        w={"full"}
                                        textAlign={"start"}
                                        px={6}
                                        fontWeight={"bold"}
                                        letterSpacing={2}
                                        justifyContent={"start !important"}
                                        alignItems={"end !important"}
                                        top={0}
                                    >
                                        {item.name}
                                    </Text>
                                </>
                            </AspectRatio>
                        </Link>
                    </Box>
                ))}
            </HStack>
        </Box>
    );
}

export default LatestProject;
