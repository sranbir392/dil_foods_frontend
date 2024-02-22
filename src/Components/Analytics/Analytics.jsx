import {  Flex, Grid,  Heading, Select } from '@chakra-ui/react'
import React from 'react'
import HeaderCard from '../HeaderCard'

const Analytics = () => {
    const length=3;
  return (
    <Flex ml={3} border={"2px solid "} flexDirection={"column"} h={"100vh"} >
        {/* Dashboard Heading */}
        <Flex flexDir={{base:"column",md:"row"}} justifyContent={{base:"start",md:"space-between"}}   alignItems={{base:"start",md:"baseline"}} gap={3} p={2}>
            <Heading as={"h1"} >Dashboard</Heading>
            <Select defaultValue={"2024"} w={"200px"} variant={"outline"} border={"1px solid"} borderRadius={"10px"} mr={6}>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021 ">2021 </option>
            </Select>
        </Flex>
        {/* Dashboard header progressbar */}
        <Grid templateRows={{base:"repeat(2,1fr)",lg:"1fr"}} templateColumns={{base:"repeat(2,1fr)",lg:`repeat(${length},1fr)`}} gap={{base:2,md:6}} justifyContent={"space-between"}  mt={4} w={"100%"}>
            <HeaderCard title={"Total revenue"} color="blue" desc="Total amount recieved" amount={"1500"} data={[]} total={"2000"} />
            <HeaderCard title={"Total revenue"} color="green" desc="Total amount recieved" amount={"1300"} data={[]} total={"3000"} />
            {/* <HeaderCard title={"Total revenue"} color="yellow" desc="Total amount recieved" amount={"1700"} data={[]} total={"2000"} /> */}
            <HeaderCard title={"Total revenue"} color="red" desc="Total amount recieved" amount={"1800"} data={[]} total={"2000"} />
        </Grid>
        {/* Bar graph */}
        <Flex>

        </Flex>
    </Flex>
  )
}

export default Analytics