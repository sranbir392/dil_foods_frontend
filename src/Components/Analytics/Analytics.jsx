import {  Box, Flex, Grid,  Heading, Select, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import HeaderCard from '../HeaderCard'
import BarGraph from '../BarGraph';
import PieGraph from '../PieGraph';


import DataChart from './../DataChart';
import {  useSearchParams } from 'react-router-dom';
import { getBarData, getHeaderData, getLineData, getPIEData } from '../../redux/action';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Loader';

const Analytics = () => {
    const length=4;
  const [searchParams,setSearchParams] = useSearchParams();

  const dispatch = useDispatch();
  const { loading,lineData,barData,headerData,pieData,error } = useSelector(
    (store) => store.data
  );
  

  const [year, setCurrentYear] = useState(searchParams.get("year") || "2024");
  const handleChange=(e)=>{
    const selectedYear = e.target.value;
    setSearchParams({ year: selectedYear });
    // dispatch(getHeaderData(selectedYear))
    setCurrentYear(selectedYear);
  }
  const getData=(year)=>{
    dispatch(getHeaderData(year))
    dispatch(getBarData(year));
    dispatch(getLineData(year));
    dispatch(getPIEData(year))
    // console.log(headerData)
  }

  useEffect(()=>{
    getData(year);
  },[year])
  return (
    <Flex height={"100%" } w={"100%"} >
    {loading ?
          <Flex justifyContent={"center"} height={"70vh"} alignItems={"center"} w={"100%"}> 
                <Loader/>
          </Flex>:
    <Flex   flexDirection={"column"} justifyContent={"space-between"} gap={5}  alignSelf={"end"} w="100%">
        {/* Dashboard Heading */}
        <Flex flexDir={{base:"column",md:"row"}} justifyContent={{base:"start",md:"space-between"}}   alignItems={{base:"start",md:"baseline"}} gap={3} >
            <Heading as={"h1"} >Dashboard</Heading>
            <Select  value={year} onChange={handleChange} w={"200px"} variant={"outline"} border={"1px solid"} borderRadius={"10px"} mr={6}>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
            </Select>
        </Flex>
        {/* Dashboard header progressbar */}
        <Grid templateRows={{base:"repeat(2,1fr)",lg:"1fr"}} templateColumns={{base:"repeat(2,1fr)",lg:`repeat(${headerData.length},1fr)`}} gap={{base:2,md:3}} justifyContent={"space-between"}   w={"100%"}>
            
            {headerData.map((el)=>{
               return  <HeaderCard key={el.id} title={el.title} color={el.color} desc={el.desc} amount={el.amount} isamount={el.isamount} total={el.total}/>
            })}
        </Grid>
        {/* Bar graph */}
        <Flex mt={3} p={2} gap={3} flexDir={{base:"column",md:"column",lg:"row"}} justifyContent={"space-between"}>
            <Flex w={{base:"100%",md:"100%",lg:"60%"}} h={400}  justifyContent={"start"}  border={"1px solid" }  borderRadius={10} flexDir={"column"} gap={3}>
            <Text alignSelf={"start"} fontSize={"18px"} fontWeight={600} p={3}>Product Sold In Week </Text>
                <BarGraph data={barData}/>
                
            </Flex>
            <Flex w={{base:"100%",md:"100%",lg:"30%"}}  h={400} justifyContent={"start"}  border={"1px solid" }  borderRadius={10} flexDir={"column"} gap={3}>
                <Text alignSelf={"start"} p={3} fontSize={"18px"} fontWeight={600}>Product Sold in Percentage</Text>
            <PieGraph data={pieData}/>
            </Flex>
        </Flex>
        <Flex h={400 }  border={"1px solid "} justifyContent={"start"} borderRadius={10} flexDir={"column"} gap={3}>
        <Text alignSelf={"start"} p={3} fontSize={"18px"} fontWeight={600}>Yearly Product Data</Text>
            <DataChart data={lineData}/>
        </Flex>
        
            
    
    </Flex>
}
    </Flex>
  )
}

export default Analytics