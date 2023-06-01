import { AspectRatio, HStack, Image, Link, Text } from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";

function LatestProject() {
    return (
        <HStack maxW="container.xl" w={"full"} mx={"auto"} spacing={7} overflowX={"auto"} px={6}>
            <Link
                as={ReactLink}
                to={"#"}
                display={"block"}
                w={"full"}
                rounded={"xl"}
                minW={{base: "full", sm: "480px"}}
                overflow={"hidden"}
            >
                <AspectRatio ratio={16 / 9}>
                    <>
                        <Image
                            border={"1px"}
                            borderColor={"gray.100"}
                            src="project-hijab.png"
                            w={"full"}
                            h={"full"}
                            objectFit={"cover"}
                        />
                        <Text
                            bgGradient={
                                "linear(to-b, rgba(0,0,0,0), blackAlpha.300, blackAlpha.700)"
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
                            top={"unset !important"}
                            h={"max-content !important"}
                        >
                            Hijab ibnaty
                        </Text>
                    </>
                </AspectRatio>
            </Link>
            <Link
                as={ReactLink}
                to={"#"}
                display={"block"}
                w={"full"}
                rounded={"xl"}
                minW={{base: "full", sm: "480px"}}
                overflow={"hidden"}
            >
                <AspectRatio ratio={16 / 9}>
                    <>
                        <Image
                            border={"1px"}
                            borderColor={"gray.100"}
                            src="project-hijab.png"
                            w={"full"}
                            h={"full"}
                            objectFit={"cover"}
                        />
                        <Text
                            bgGradient={
                                "linear(to-b, rgba(0,0,0,0), blackAlpha.300, blackAlpha.700)"
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
                            top={"unset !important"}
                            h={"max-content !important"}
                        >
                            Hijab ibnaty
                        </Text>
                    </>
                </AspectRatio>
            </Link>
        </HStack>
    );
}

export default LatestProject;
