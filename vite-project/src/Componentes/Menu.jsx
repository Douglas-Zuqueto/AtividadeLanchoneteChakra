import React from "react"
import { Card, CardBody, CardFooter, Stack, Heading, Divider, ButtonGroup, Button, Image, Text, Center} from '@chakra-ui/react'
import styles from './Menu.module.css'

export function Hamburguers(props) {
    return(
        <>
        <Card maxW='sm'>
                <CardBody className={styles.card}>
                    <Center>
                        <Image className={styles.image}
                        src={props.url}
                        borderRadius='lg'
                        />
                    </Center>
                    <Stack mt='6' spacing='3'>
                    <Heading size='md'>{props.name}</Heading>
                    <Text color='blue.600' fontSize='2xl'>{props.price}</Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter bgColor='black' justifyContent='center'>
                    <Center>
                        <ButtonGroup spacing='2'>
                            <Button variant='solid' colorScheme='blue'>
                                Add to cart
                            </Button>
                        </ButtonGroup>
                    </Center>
                </CardFooter>
            </Card>
        </>
    )
}
export function HotD(props) {
    return(
        <>
        <Card maxW='sm'>
                <CardBody className={styles.card}>
                    <Center>
                        <Image className={styles.image}
                        src={props.url}
                        borderRadius='lg'
                        />
                    </Center>
                    <Stack mt='6' spacing='3'>
                    <Heading size='md'>{props.name}</Heading>
                    <Text color='blue.600' fontSize='2xl'>{props.price}</Text>
                    </Stack>    
                </CardBody>
                <Divider />
                <CardFooter bgColor='black' justifyContent='center'>
                        <Center>
                            <ButtonGroup spacing='2'>
                                <Button variant='solid' colorScheme='blue'>
                                    Add to cart
                                </Button>
                            </ButtonGroup>
                        </Center>
                </CardFooter>
            </Card>
        </>
    )
}
export function Porcoes(props) {
    return(
        <>
            <Card maxW='sm'>
                <CardBody className={styles.card}>
                    <Center>
                        <Image className={styles.image}
                        src={props.url}
                        borderRadius='lg'
                        />
                    </Center>
                    <Stack mt='6' spacing='3'>
                    <Heading size='md'>{props.name}</Heading>
                    <Text color='blue.600' fontSize='2xl'>{props.price}</Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter bgColor='black' justifyContent='center'>
                    <Center>
                        <ButtonGroup spacing='2'>
                            <Button variant='solid' colorScheme='blue'>
                                Add to cart
                            </Button>
                        </ButtonGroup>
                    </Center>
                </CardFooter>
            </Card>
        </>
    )
}