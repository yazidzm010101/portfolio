import {
    Box,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Fade,
    HStack,
    Heading,
    Icon,
    Image,
    Stack,
    Tag,
    Text,
    VStack,
} from "@chakra-ui/react";
import { BsWindowDock, BsFiletypeHtml } from "react-icons/bs";
import { MdWeb } from "react-icons/md";
import { AiOutlineTeam } from "react-icons/ai";
import { HiDocumentReport } from "react-icons/hi";
import { IoLogoJavascript } from "react-icons/io";
import { BiBrain } from "react-icons/bi";
import { FaHandsHelping, FaChalkboardTeacher } from "react-icons/fa";
import { TbSettings2 } from "react-icons/tb";
import { SiPostman } from "react-icons/si";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const data = [
    {
        name: "Lepkom",
        image: "https://vm.lepkom.gunadarma.ac.id/assets/front/images/logo-lepkom.png",
        experiences: [
            {
                title: "Tutor Assistant",
                description:
                    "Assisting course tutor and helping the participants to learn and follow instructions during the session",
                skills: [
                    {
                        name: "Desktop Programming",
                        icon: BsWindowDock,
                        color: "green",
                    },
                    { name: "Web Programming", icon: MdWeb, color: "blue" },
                    {
                        name: "Helping Initiative",
                        icon: FaHandsHelping,
                        color: "pink",
                    },
                ],
            },
            {
                title: "Course Tutor",
                description:
                    "Giving guidance and instructions to course participants so they can learn from the subject and quiz during the sessions",
                skills: [
                    {
                        name: "Desktop Programming",
                        icon: BsWindowDock,
                        color: "green",
                    },
                    { name: "Web Programming", icon: MdWeb, color: "blue" },
                    {
                        name: "Public Speaking",
                        icon: FaChalkboardTeacher,
                        color: "pink",
                    },
                ],
            },
            {
                title: "Course Coordinator",
                description:
                    "Coordinates with tutor, assistant to ensure the course session executed by following the standarized producedure",
                skills: [
                    {
                        name: "Grade Reporting",
                        color: "red",
                        icon: HiDocumentReport,
                    },
                    {
                        name: "Attendance Reporting",
                        color: "red",
                        icon: HiDocumentReport,
                    },
                    {
                        name: "Team Collaboration",
                        icon: AiOutlineTeam,
                        color: "purple",
                    },
                ],
            },
        ],
    },
    {
        name: "Jojonomic",
        image: "https://images.glints.com/unsafe/glints-dashboard.s3.amazonaws.com/company-banner-pic/45236c0777b6054b3421b85b7ede3367.png",
        experiences: [
            {
                category: "FWD Insurance",
                categoryColor: "orange",
                title: "Office Booking System",
                description:
                    "Develops office booking system on top Jojonomic Officeless Platform using javascript visual programming for FWD Issurance",
                skills: [
                    {
                        name: "Officeless",
                        icon: TbSettings2,
                        color: "blue",
                    },
                    {
                        name: "Javascript",
                        icon: IoLogoJavascript,
                        color: "yellow",
                    },
                    {
                        name: "Postman",
                        icon: SiPostman,
                        color: "orange",
                    },
                    {
                        name: "HTML & Officeless Report",
                        icon: BsFiletypeHtml,
                        color: "red",
                    },
                ],
            },
            {
                category: "PT. Geo Dipa Energi",
                categoryColor: "green",
                title: "Expense Management System",
                description:
                    "Builds expense management system on top Officeless Platform and directly taking role as developer also business consultant facing user requirements",
                skills: [
                    {
                        name: "Officeless",
                        icon: TbSettings2,
                        color: "blue",
                    },
                    {
                        name: "Javascript",
                        icon: IoLogoJavascript,
                        color: "yellow",
                    },
                    {
                        name: "Postman",
                        icon: SiPostman,
                        color: "orange",
                    },
                    {
                        name: "HTML & Officeless Report",
                        icon: BsFiletypeHtml,
                        color: "red",
                    },
                    {
                        name: "Business Consultant",
                        icon: BiBrain,
                        color: "pink",
                    },
                ],
            },
            {
                category: "PT. Indonesia Financial Group",
                categoryColor: "red",
                title: "Company KPI Ranking",
                description:
                    "Join development for IFG's child company ranking using officeless platform. Implement custom formulation and dynamic fields for KPI calculation. Help font-end team to consume statistical data by providing API",
                skills: [
                    {
                        name: "Officeless",
                        icon: TbSettings2,
                        color: "blue",
                    },
                    {
                        name: "Javascript",
                        icon: IoLogoJavascript,
                        color: "yellow",
                    },
                    {
                        name: "Postman",
                        icon: SiPostman,
                        color: "orange",
                    },
                ],
            },
            {
                category: "CIMB Niaga",
                categoryColor: "red",
                title: "SMART Expense",
                description:
                    "Join CIMB Niaga Smart Expense Management on Jojonomic Officeless Platform using Jojo Visual Programming.",
                skills: [
                    {
                        name: "Officeless",
                        icon: TbSettings2,
                        color: "blue",
                    },
                    {
                        name: "Javascript",
                        icon: IoLogoJavascript,
                        color: "yellow",
                    },
                    {
                        name: "Postman",
                        icon: SiPostman,
                        color: "orange",
                    },
                    {
                        name: "HTML & Officeless Report",
                        icon: BsFiletypeHtml,
                        color: "red",
                    },
                ],
            },
        ],
    },
];

function Experience() {
    const [active, setActive] = useState(0);

    return (
        <VStack w={"full"} mx={"auto"} pos={"relative"}>
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
                    Working Experience
                </Heading>
            </Box>
            <HStack px={6}>
                {data.map((item, i) => (
                    <Image
                        my={4}
                        w={"200px"}
                        h={"50px"}
                        objectFit={"contain"}
                        src={item.image}
                        filter={active == i ? "saturate(1)" : "saturate(0)"}
                        cursor={"pointer"}
                        onClick={() => setActive(i)}
                        transition={".15s all ease-in-out"}
                        _hover={{ filter: active != i && "saturate(0.25)" }}
                    />
                ))}
            </HStack>
            {data.map((item, i) => (
                <HStack
                    in={active == i}
                    as={Fade}
                    unmountOnExit
                    w={"100% !important"}
                    overflowX={"scroll"}
                    overflowY={"hidden"}
                    px={{ base: 0, lg: "6rem" }}
                    py={6}
                    alignItems={"stretch"}
                    _before={{md: { content: "''", margin: "auto" }}}
                    _after={{md: { content: "''", margin: "auto" }}}
                >
                    {item.experiences.map((item, i) => (
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
                            maxW={"420px"}
                            flexShrink={0}
                            px={3}
                        >
                            <Card
                                bg={"white"}
                                w={"full"}
                                h={"full"}
                                rounded={"3xl"}
                                shadow={"unset"}
                            >
                                <CardHeader pb={1}>
                                    {item.category && (
                                        <Tag
                                            rounded={"xl"}
                                            mb={2}
                                            bg={item.categoryColor + ".500"}
                                            color={"white"}
                                        >
                                            {item.category}
                                        </Tag>
                                    )}
                                    <Heading
                                        as={"h5"}
                                        color={"gray.800"}
                                        fontSize={"xl"}
                                        fontWeight={"normal"}
                                        letterSpacing={1}
                                    >
                                        {item.title}
                                    </Heading>
                                </CardHeader>
                                <CardBody py={0}>
                                    <Text
                                        lineHeight={2}
                                        color={"gray.500"}
                                        fontSize={"sm"}
                                    >
                                        {item.description}
                                    </Text>
                                </CardBody>
                                <CardFooter>
                                    {item.skills && (
                                        <HStack flexWrap={"wrap"} spacing={3}>
                                            {item.skills.map((skill) => (
                                                <Tag
                                                    color={
                                                        skill.color &&
                                                        skill.color + ".600"
                                                    }
                                                    bg={
                                                        skill.color &&
                                                        skill.color + ".50"
                                                    }
                                                    rounded={"xl"}
                                                >
                                                    {skill.icon && (
                                                        <Icon
                                                            as={skill.icon}
                                                            mr={1}
                                                            w={3}
                                                            h={3}
                                                        />
                                                    )}
                                                    <Text fontSize="xs">
                                                        {skill.name}
                                                    </Text>
                                                </Tag>
                                            ))}
                                        </HStack>
                                    )}
                                </CardFooter>
                            </Card>
                        </Box>
                    ))}
                </HStack>
            ))}
        </VStack>
    );
}

export default Experience;
