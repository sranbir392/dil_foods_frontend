import { Box, CircularProgress, CircularProgressLabel, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const HeaderCard = (props) => {
    const {title,desc,data,amount,color,total}={...props}
    const percentageCompleted = Math.ceil((amount / total) * 100);
    const colors = ['#0088FE', '#EFEFEF'];
    const data1 = [
        { name: 'Completed', value: percentageCompleted },
        { name: 'Remaining', value: 100 - percentageCompleted }
      ];
    
  return (
    <Flex flexDir={"column"} alignItems={"center"} justifyContent={"space-between"} border={"1px solid"}   borderRadius={"10px"}   h={"100%"} w={"90%"} p={3}  m={3}>
        <Flex alignItems={"center"} justifyContent={"space-between"}  w={"100%"}>
            <Flex flexDir={"column"} justifyContent={"start"} gap={"4px"} alignItems={"baseline"} w={"50%"} textAlign={"start"} >
                <Text fontWeight={"400"} fontSize={{base:"14px",md:"18px"}}>{title}</Text>
                <Text fontWeight={"700"} fontSize={{base:"18px",md:"24px"}}>{`${amount}$`}</Text>
            </Flex>
            <Flex p={2}>
            <CircularProgress value={percentageCompleted} color={`${color}.400`} thickness={"16px"}  size={{base:"50px",md:"70px",lg:"100px"}} >
    <CircularProgressLabel>{`${percentageCompleted}%`}</CircularProgressLabel>
    </CircularProgress>
            </Flex>  
        </Flex>
        <Box w={"100%"} textAlign={"start"}>
        <Text fontWeight={"400"} fontSize={{base:"12px",md:"16px"}}  textOverflow={"hidden"}>{desc}</Text>
        </Box>
    </Flex>
  )
}

export default HeaderCard