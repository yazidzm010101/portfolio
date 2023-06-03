import { AspectRatio, Box, HStack, Image, Link, Text } from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";

const data = [
    {
        name: "Hijab Ibnaty",
        thumbnail: "project-hijab.png",
    },
    {
        name: "Qliner",
        thumbnail: "project-qliner.png",
    },
];

function LatestProject() {
    return (
        <Box pos={"relative"} maxW="container.xl" w={"full"} mx={"auto"}>
            <HStack spacing={7} overflowX={"auto"} pos={"relative"} p={4}>
                {data.map((item, i) => (
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
                        minW={{ base: "full", sm: "480px" }}
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
                                    // h={"max-content !important"}
                                >
                                    {item.name}
                                </Text>
                            </>
                        </AspectRatio>
                    </Link>
                ))}
            </HStack>
            {/* <Box
                pointerEvents={"none"}
                pos={"absolute"}
                top={0}
                bottom={"0.5rem"}
                left={0}
                w={5}
                bgGradient={
                    "linear(to-l, rgba(255,255,255,0), rgba(255,255,255,1))"
                }
            />
            <Box
                pointerEvents={"none"}
                pos={"absolute"}
                top={0}
                bottom={"0.5rem"}
                right={0}
                w={5}
                bgGradient={
                    "linear(to-r, rgba(255,255,255,0), rgba(255,255,255,1))"
                }
            /> */}
        </Box>
    );
}

export default LatestProject;
