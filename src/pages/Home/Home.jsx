import {
    Box,
    HStack,
    Link,
    Text,
    VStack,
} from "@chakra-ui/react";
import Blob from "../../assets/Blob";
import Greeting from "./components/Greeting";
import LatestProject from "./components/LatestProject";
import About from "./components/About";
import Experience from "./components/Experience";

function Home() {
    return (
        <Box w={"full"} minH="100vh" overflowY={"hidden"}>
            <Box w={"full"}>
                <HStack
                    w={"full"}
                    py={6}
                    px={6}
                    justifyContent={"center"}
                    spacing={12}
                >
                    <HStack flex={1} justifyContent={"flex-end"} spacing={12} display={{base: 'none', md:"flex"}}>
                        <Link href={"#"}>Home</Link>
                        <Link href={"#about"}>About</Link>
                    </HStack>
                    <Text
                        fontSize={"2xl"}
                        fontFamily={'"Noto Kufi Arabic", sans-serif'}
                    >
                        مجديد
                    </Text>
                    <HStack flex={1} justifyContent={"flex-start"} spacing={12} display={{base: 'none', md:"flex"}}>
                        <Link href={"#"}>Projects</Link>
                        <Link href={"#"}>Experience</Link>
                    </HStack>
                </HStack>
            </Box>
            <VStack spacing={24} w={"full"} py={12}>
                <Greeting/>
                <LatestProject/>
                <About/>
                <Experience/>
            </VStack>
        </Box>
    );
}

export default Home;
