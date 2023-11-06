import { Box, Flex, FormControl, FormHelperText, FormLabel, Select } from "@chakra-ui/react";
import React from "react";
import styles from '../customs/styles.module.css';

interface ComponentProps {
    label1: string;
    label2?: string;
    placeholder: string;
    helperText: string;
}

const ChakraSelect: React.FC<ComponentProps> = ({ label1, label2, placeholder, helperText }) => {
    return (
        <Box width='100%'>
            <FormControl>
                <Flex justifyContent='space-between'>
                    <FormLabel fontSize={'1.5rem'} color={'#515a74'} fontWeight={'bold'} className={styles.labelText}>{label1}</FormLabel>
                    <FormLabel fontSize={'1.5rem'} color={'#515a74'} className={styles.labelText}>{label2}</FormLabel>
                </Flex>
                <Select 
                    placeholder={placeholder} 
                    size='lg' 
                    h={'5rem'} 
                    iconSize="5rem"
                    borderRadius={'1rem'} 
                    fontSize={'1.4rem'} 
                    focusBorderColor="#ab90e7"
                    _focus={{
                        bg: '#f6f4ff'
                    }}
                />
                <FormHelperText fontSize={'1.4rem'} color={'#bec2cc'} fontWeight={'500'} className={styles.labelText}>{helperText}</FormHelperText>
            </FormControl>
        </Box>  
    )
}

export default ChakraSelect;