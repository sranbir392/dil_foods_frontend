import { Avatar, Box, CloseButton, Flex, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import NavItem from "./NavItem";
import { FiShoppingBag } from "react-icons/fi";
import { FaChartPie,  } from "react-icons/fa";

const LinkItems = [
  { name: "Home", icon: FiShoppingBag },
  { name: "Analytics", icon: FaChartPie },
  
];

const SideBarItem = ({ onClose, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Avatar
          size="lg"
          src="https://dilfoods.in/wp-content/uploads/2023/04/Dil-Foods-new-logo.png"
          alt="logo"
        />
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <Link to={`/${link.name.toLowerCase()}`} onClick={() => onClose()}>
          <NavItem key={link.name} icon={link.icon}>
            {link.name}
          </NavItem>
        </Link>
      ))}
    </Box>
  );
};

export default SideBarItem;
