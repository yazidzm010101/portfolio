import { Divider, Flex, Text } from '@chakra-ui/react'

function ErrorPage({ code, message }) {
    return (
        <>
            <Flex
                w='100%'
                h='100vh'
                justify='center'
                align='center'
                gap='1.5rem'
                direction={{ base: 'column', sm: 'row' }}
            >
                <Text
                    fontSize='26px'
                    letterSpacing='2px'
                >
                    {code}
                </Text>
                <Divider
                    orientation='vertical'
                    maxH='40px'
                    borderColor='var(--chakra-colors-chakra-body-text)'
                    display={{ base: 'none', sm: 'block' }}
                />
                <Text
                    fontSize='24px'
                    letterSpacing='2px'
                >
                    {message}
                </Text>
            </Flex>
        </>
    )
}

export default ErrorPage
