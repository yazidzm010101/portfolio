import {
    Box,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    HStack,
    Heading,
    Icon,
    Image,
    Stack,
    Tag,
    Text,
    VStack,
} from "@chakra-ui/react";
import { SiJavascript } from "react-icons/si";
import { motion } from "framer-motion";

const data = [1, 1, 1, 1, 1, 1, 1, 1, 1];

function Experience() {
    return (
        <VStack w={"full"} mx={"auto"} px={6}>
            <Image
                w={"300px"}
                src={
                    "https://images.glints.com/unsafe/glints-dashboard.s3.amazonaws.com/company-banner-pic/45236c0777b6054b3421b85b7ede3367.png"
                }
                filter={"saturate(0)"}
            />
            <HStack
                spacing={6}
                overflowX={"scroll"}
                overflowY={"hidden"}
                w={"full"}
                justifyContent={"center"}
            >
                {data.map((item, i) => (
                    <Card
                        as={motion.div}
                        initial="offscreen"
                        whileInView="onscreen"
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
                        alignSelf={"center"}
                        bg={"white"}
                        border={"1px"}
                        borderColor={"gray.100"}
                        w={"full"}
                        maxW={"600px"}
                        flexShrink={0}
                        rounded={"3xl"}
                        shadow={"unset"}
                    >
                        <CardHeader>
                            <Heading
                                as={"h5"}
                                fontSize={"xl"}
                                letterSpacing={1}
                            >
                                Project 1
                            </Heading>
                        </CardHeader>
                        <CardBody py={0} lineHeight={2}>
                            Proident cupidatat duis aliquip id aliquip. Cillum
                            ex ad labore excepteur dolore labore consequat sunt
                            anim qui dolore ullamco magna fugiat. Ullamco cillum
                            deserunt tempor magna qui incididunt. Labore aute
                            anim voluptate nulla tempor aute sit id voluptate
                            excepteur esse. Cupidatat qui consequat nisi sit
                            nisi aliqua irure.
                        </CardBody>
                        <CardFooter>
                            <VStack alignItems={"flex-start"}>
                                <Text fontSize={"sm"} color="gray.500">
                                    Tools used
                                </Text>
                                <HStack flexWrap={"wrap"}>
                                    <Tag color={"gray.600"}>
                                        <Icon
                                            as={SiJavascript}
                                            mr={1}
                                            w={3}
                                            h={3}
                                        />
                                        <Text>Javascript</Text>
                                    </Tag>
                                    <Tag color={"gray.600"}>
                                        <Icon
                                            as={SiJavascript}
                                            mr={1}
                                            w={3}
                                            h={3}
                                        />
                                        <Text>Javascript</Text>
                                    </Tag>
                                    <Tag color={"gray.600"}>
                                        <Icon
                                            as={SiJavascript}
                                            mr={1}
                                            w={3}
                                            h={3}
                                        />
                                        <Text>Javascript</Text>
                                    </Tag>
                                </HStack>
                            </VStack>
                        </CardFooter>
                    </Card>
                ))}
            </HStack>
        </VStack>
    );
}

export default Experience;
