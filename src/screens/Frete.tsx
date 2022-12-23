import React from 'react';
import { Text } from 'react-native';
import { ScrollView, VStack, Stack, Box  } from 'native-base';
import { Navbar } from '../components/static/Navbar';
import { Footer } from '../components/static/Footer';

export  function Frete(){
    return(
        <Box flex={1} backgroundColor= "gray.400" flexDirection="column" safeArea justifyContent="center" alignItems="center">

                <VStack space={4} w="100%" alignItems="center" justifyContent="space-between">
                    <Box>
                        <Navbar />
                    </Box>

                    <Box>
                        <Text>Produto</Text>
                    </Box>
                    
                    <Box>
                        <Text>Formulario</Text>
                    </Box>

                    <Box>
                        <Footer />
                    </Box>

                </VStack>

        </Box>

    );
}