import React from 'react';
import{ Feather } from '@expo/vector-icons';
import { Box, Heading, HStack, VStack, Pressable, Icon, Stack, Center, Avatar } from 'native-base';
import { Text } from 'react-native';


export  function Navbar(){
    return(
        <Box  flexDirection="row">
            {/* <HStack space={4} >
                

                <VStack flexDirection="row" justifyContent="space=between" alignItems="center"  >
                        <Pressable>
                            <Icon
                            as={Feather} 
                            name="menu"
                            size={7}
                            color="#000"
                            />
                        </Pressable>

                        <Box flexDirection="row" justifyContent="center" alignItems="center" >
                               <Box flexDirection="column">
                                    <Heading>
                                        Quase lá
                                    </Heading>
                                    <Text>Tamiris</Text>   
                               </Box>

                                 <Pressable>
                                    <Icon
                                    as={Feather} 
                                    name="bell"
                                    size={7}
                                    color="#000"
                                    />
                                </Pressable> 

                                    <Pressable>
                                    <Avatar
                                    source={{uri: "https://imgur.com/ExUzXak " }}
                                
                                    color="#000"
                                    />
                                </Pressable>  
                        </Box>
                 
                </VStack>

                
            </HStack> */}
            
        </Box>
    );
}