import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  useColorModeValue,
  Drawer,
  DrawerContent,
  useDisclosure,
  Text,
  Button,
} from "@chakra-ui/react";

import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";


import BottomBar from "./BottomBar";

import SideBarItem from "./SideBarItem";
import Analytics from './Analytics/Analytics';


const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navigate=useNavigate()
  const { loading } = useSelector(
    (store) => store.data.loading
  );
  


  return (
    <Box  bg={useColorModeValue("gray.100", "gray.900")}>
      <SideBarItem
        onClose={onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SideBarItem onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <BottomBar onOpen={onOpen} />
      <Flex ml={{ base: 0, md: 60 }} p="4" >
            <Flex w="100%" > 
              {window.location.pathname.includes("/home") ? (
                <Flex justifyContent={"center"} flexDirection={"column"} alignItems={"center"}  w="100%" gap={"10px"} height={"90vh"}>
                  
                <Text fontSize={"22px" }>Website is in Progress.</Text>
                <Button onClick={()=>navigate("/analytics")}>Go to Analytics</Button>
              </Flex>
                
                
              ) :  (
                <Flex  justifyContent={"center"} alignContent={"center"} alignItems={"center"} w={"100%"} >
                <Analytics/>
              </Flex>
              )}
            </Flex>
      </Flex>
    </Box>
  );
};

export default Sidebar;
