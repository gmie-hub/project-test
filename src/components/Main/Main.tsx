import React, { useState } from 'react';
import styles from '../Main/main.module.css';
import { ReactComponent as Warning } from '../../svg/location-exclamation.svg';
import Button from '../Button/Button';
import { StyledLabelContainer } from '../Main/styles'
import { Box, Flex, HStack, Heading, Stack, Text, VStack } from '@chakra-ui/layout';
import { Card, CardHeader, CardBody } from '@chakra-ui/react'
import ChakraInput from '../../customs/chakraInput';
import ChakraSelect from '../../customs/chakraSelect';

const Main = () => {
    const [selectedOption, setSelectedOption] = useState('option1');

    const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(e.target.value);
    };

    return (
        <div className={styles.container}>
            <Stack spacing='12'>
                <Box textAlign='center' lineHeight='10' my='4' className={styles.headingContainer}>
                    <Heading as='h2' size='4xl' mb='8' className={styles.heading}>Create your hedge</Heading>
                    <Text 
                        color='#a0a5b4' 
                        fontSize='1.6rem' 
                        fontWeight='500'
                        className={styles.headingText}
                    >
                        Umoja offers hedging as a service that's simple, affordable, & price transparent.
                    </Text>
                </Box>
                <Flex justifyContent='center'>
                    <Card mt='1.5' borderRadius='2rem' className={styles.card}>
                        <CardHeader>
                            <Heading>Hedging details</Heading>
                        </CardHeader>
                        <CardBody mt={'1rem'}>
                            <form>
                                <VStack spacing='2rem'>
                                    <ChakraInput 
                                        label1='Notional amount'
                                        placeholder='Notional amount'
                                        helperText='Please enter the amount you are looking to hedge in the base currency.'
                                        display={true}
                                    />
                                    <ChakraSelect
                                        label1='Base currency' 
                                        placeholder='Base currency'
                                        helperText='Please select the currency you are looking to protect.'
                                    />
                                    <ChakraSelect
                                        label1='Quote currency' 
                                        label2='1 USD = 17.810 MXN'
                                        placeholder='Quote currency'
                                        helperText='Please select the currency you are looking to hedge.'
                                    />
                                    <Stack width={'100%'}>
                                        <Text fontSize={'1.4rem'} color={'#515a74'} fontWeight={'bold'}>Data on direction</Text>
                                        <Stack spacing={'1.3rem'}>
                                            <StyledLabelContainer className={selectedOption === 'option1' ? 'checked' : ''}>
                                                <HStack>
                                                    <Box><Warning /></Box>
                                                    <Text 
                                                        fontSize={'1.7rem'} 
                                                        fontWeight={500} 
                                                        color={'#515a74'}
                                                        className={styles.radioText}
                                                    >
                                                        MXN appreciates vs USD
                                                    </Text>
                                                </HStack>
                                                <input 
                                                    type='radio' 
                                                    name='radioGroup'
                                                    value='option1'
                                                    checked={selectedOption === 'option1'}
                                                    onChange={handleOptionChange}
                                                />
                                            </StyledLabelContainer>
                                            <StyledLabelContainer className={selectedOption === 'option2' ? 'checked' : ''}>
                                                <HStack>
                                                    <Box><Warning /></Box>
                                                    <Text 
                                                        fontSize={'1.7rem'} 
                                                        fontWeight={500} 
                                                        color={'#515a74'}
                                                        className={styles.radioText}
                                                    >
                                                        MXN depreciatesD vs USD
                                                    </Text>
                                                </HStack>
                                                <input 
                                                    type='radio'
                                                    name='radioGroup'
                                                    value='option2' 
                                                    checked={selectedOption === 'option2'}
                                                    onChange={handleOptionChange}
                                                />
                                            </StyledLabelContainer>
                                        </Stack>
                                    </Stack>
                                    <ChakraInput 
                                        label1='Strike rate'
                                        label2={
                                            <Box display={'flex'}>1 USD = 17.810 MXN <Text color={'#439e76'} ms={2}>+40%</Text></Box>
                                        }
                                        placeholder='Strike rate'
                                        helperText='Please enter the devaluation threshold at which you would like your currency risk protection to be triggered.'
                                        display={false}
                                    />
                                    <ChakraSelect
                                        label1='Maturity' 
                                        placeholder='Maturity'
                                        helperText='Please enter the maturity for which you would like currency risk protection.'
                                    />
                                    <ChakraSelect
                                        label1='Option type' 
                                        placeholder='Option type'
                                        helperText='Protect base currency devaluation against quote currency.'
                                    />
                                </VStack>
                                <Button />
                            </form>
                        </CardBody>
                    </Card>
                </Flex>
            </Stack>
        </div>
    )
};

export default Main;

