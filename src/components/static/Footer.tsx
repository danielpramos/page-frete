import { Box, Heading, HStack, Stack } from 'native-base';
import { Text } from 'react-native';


export  function Footer(){
    return(
        <Box>
            <HStack space={5} justifyContent="space-between">

               <Stack direction="column" space={2}>
                    <Heading>
                        
                        <Text >Inicio</Text>
                    </Heading>
                </Stack> 


                <Stack direction="column" space={2}>
                    <Heading>
                        
                        <Text >Cadastrar</Text>
                    </Heading>
                </Stack> 

                <Stack direction="column" space={2}>
                    <Heading>
                        
                        <Text >Produtos</Text>
                    </Heading>
                </Stack> 

                <Stack direction="column" space={2}>
                    <Heading>
                        
                        <Text >Gráficos</Text>
                    </Heading>
                </Stack> 

                <Stack direction="column" space={2}>
                    <Heading>
                        
                        <Text >+Metas</Text>
                    </Heading>
                </Stack> 

            </HStack>
        </Box>
    );
}