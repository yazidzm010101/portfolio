import {
    Box,
    Button,
    HStack,
    Icon,
    Link,
    Text,
    VStack,
} from "@chakra-ui/react";
import Blob from "../../assets/Blob";
import Wave from "../../assets/Wave";
import Greeting from "./components/Greeting";
import { RiMenu4Fill } from "react-icons/ri";
import LatestProject from "./components/LatestProject";
import About from "./components/About";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

function Home() {
    return (
        <Box
            w={"full"}
            minH="100vh"
            overflowY={"hidden"}
            pos={"relative"}
            bg={"gray.50"}
            overflowX={"hidden"}
        >
            <Box
                as={Wave}
                w={{ base: "600%", sm: "300%", lg: "200%" }}
                pos={"absolute"}
                top={0}
                left={"50%"}
                transform={"translateX(-50%)"}
                color={"blue.50"}
                h={"600px"}
            />
            <Box w={"full"} pos={"relative"}>
                <HStack
                    w={"full"}
                    py={6}
                    px={6}
                    justifyContent={"center"}
                    spacing={12}
                    pos={"relative"}
                >
                    <Button
                        display={{ base: "flex", md: "none" }}
                        px={2}
                        py={2}
                        pos={"absolute"}
                        top={"50%"}
                        left={0}
                        ml={6}
                        transform={"translateY(-50%)"}
                    >
                        <Icon as={RiMenu4Fill} w={6} h={6} />
                    </Button>
                    <HStack
                        flex={1}
                        justifyContent={"flex-end"}
                        spacing={12}
                        display={{ base: "none", md: "flex" }}
                    >
                        <Link href={"#"}>Home</Link>
                        <Link href={"#about"}>About</Link>
                    </HStack>
                    <Text
                        fontSize={"2xl"}
                        fontFamily={'"Noto Kufi Arabic", sans-serif'}
                    >
                        مجديد
                    </Text>
                    <HStack
                        flex={1}
                        justifyContent={"flex-start"}
                        spacing={12}
                        display={{ base: "none", md: "flex" }}
                    >
                        <Link href={"#"}>Projects</Link>
                        <Link href={"#"}>Experience</Link>
                    </HStack>
                </HStack>
            </Box>
            <VStack spacing={'12rem'} w={"full"} py={48} pos={"relative"}>
                <Greeting />
                <LatestProject />
                <About />
                <Experience />
            </VStack>
            <Footer/>
        </Box>
    );
}

export default Home;
