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
// import BarChart from "./BarChart";
// import LineChart from "./LineChart";/
// import PieChart from "./PieChart";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
// import { getData, getTopSelling } from "../redux/chartData/chartData.action";
// import Loader from "./Loader";
// import SelectYear from "./SelectYear";
// import Ecommerce from "./Ecommerce";
// import MobileNav from "./MobileNav";
// import SideBarContent from "./SideBarContent";
// import { generateRandomColor } from "../scripts/generateColors";

import BottomBar from "./BottomBar";
import {  getHeaderData } from "../redux/action";
import SideBarItem from "./SideBarItem";
import Analytics from './Analytics/Analytics';
import Loader from "./Loader";

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const { loading, data,error } = useSelector(
    (store) => store.data
  );
  const [searchParams] = useSearchParams();
  const [year, setCurrentYear] = useState(searchParams.get("year") || "2024");
  

  useEffect(() => {
    dispatch(getHeaderData(year));

    // dispatch(getTopSelling(year));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [year]);

  // useEffect(() => {
  //   setSalesData({
  //     labels: chartData?.map((data) => data.month),
  //     datasets: [
  //       {
  //         label: "Total Revenue",
  //         data: chartData?.map((data) => data.revenue),
  //         backgroundColor: generateRandomColor(),
  //         borderColor: "black",
  //         borderWidth: 2,
  //       },
  //       {
  //         label: "Total Users Active",
  //         data: chartData?.map((data) => data.userActivity),
  //         backgroundColor: generateRandomColor(),
  //         borderColor: "black",
  //         borderWidth: 2,
  //       },
  //       {
  //         label: "Total Sales",
  //         data: chartData?.map((data) => data.sales),
  //         backgroundColor: generateRandomColor(),
  //         borderColor: "black",
  //         borderWidth: 2,
  //       },
  //     ],
  //   });
  // }, [chartData]);

  useEffect(() => {
    setCurrentYear(searchParams.get("year") || "2024");
  }, [searchParams]);

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
        {/* <SelectYear /> */}

        {loading ? (
          <Flex  justifyContent={"center"} alignItems={"center"}>
          <Loader/>
          </Flex>
        ) : (
          <>
            <Flex w="100%"> 
              {window.location.pathname.includes("home") ? (
                <Flex justifyContent={"center"} flexDirection={"column"} alignItems={"center"} gap={"10px"}>
                  
                <Text fontSize={"22px" }>Website is in Progress.</Text>
                <Button onClick={()=>navigate("/analytics")}>Go to Analytics</Button>
              </Flex>
                
                
              ) :  (
                <Flex w="100%">
                <Analytics/>
              </Flex>
              )}
            </Flex>
          </>
        )}
      </Flex>
    </Box>
  );
};

export default Sidebar;
