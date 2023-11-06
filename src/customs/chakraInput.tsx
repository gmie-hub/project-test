import { Badge, Box, Flex, FormControl, FormHelperText, FormLabel, Input } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import styles from '../customs/styles.module.css';

interface ComponentProps {
    label1: string;
    label2?: ReactNode;
    placeholder: string;
    helperText: string;
    display?: boolean;
}

const ChakraInput: React.FC<ComponentProps> = ({ label1, label2, placeholder, helperText, display }) => {
    return (
        <Box width='100%' position={'relative'}>
            <FormControl>
                <Flex justifyContent='space-between'>
                    <FormLabel 
                        fontSize={'1.5rem'} 
                        color={'#515a74'} 
                        fontWeight={'bold'}
                        className={styles.labelText}
                    >
                        {label1}
                    </FormLabel>
                    <FormLabel 
                        fontSize={'1.5rem'} 
                        color={'#515a74'}
                        className={styles.labelText}
                    >
                        {label2}
                    </FormLabel>
                </Flex>
                <Input 
                    placeholder={placeholder} 
                    size='lg' py='2.5rem' 
                    borderRadius={'1rem'} 
                    fontSize={'1.4rem'} 
                    focusBorderColor="#ab90e7"
                    _focus={{
                        bg: '#f6f4ff'
                    }}
                />
                <FormHelperText fontSize={'1.4rem'} color={'#bec2cc'} fontWeight={'500'} className={styles.labelText}>{helperText}</FormHelperText>
            </FormControl>
            {display && (
                <Box display='flex' alignItems='baseline' position={'absolute'} top={'3.6rem'} right={'1.7rem'} className={styles.hide}>
                    <Box fontSize='1.4rem' color='#bec2cc'>Min: </Box>
                    <Badge 
                        borderRadius='full' 
                        px='4' 
                        py={'2'}
                        colorScheme="#f6f4ff" 
                        backgroundColor={'#f6f4ff'} 
                        color='#877ad4' 
                        fontSize='1.4rem' 
                        ms='2'
                        textTransform={'none'}
                    >
                        500k
                    </Badge>
                    <Box fontSize='1.4rem' color='#bec2cc' ms='6'>Max: </Box>
                    <Badge 
                        borderRadius='full' 
                        px='5' 
                        py={'2'}
                        colorScheme="#f6f4ff" 
                        backgroundColor={'#f6f4ff'} 
                        color='#877ad4' 
                        fontSize='1.4rem' 
                        ms='2' 
                        textTransform={'none'}
                    >
                        5m
                    </Badge>
                </Box>
            )
            }  
        </Box>
        
    )
}

export default ChakraInput;