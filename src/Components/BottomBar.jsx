import {
    Avatar,
    Button,
    Flex,
    HStack,
    IconButton,
    Menu,
    MenuButton,
    Text,
    VStack,
    useColorMode,
  } from "@chakra-ui/react";
  import React from "react";
  import { FiMenu } from "react-icons/fi";
  import { FaMoon, FaSun } from "react-icons/fa";
  
  const BottomBar = ({ onOpen, ...rest }) => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
      <Flex
        ml={{ base: 0, md: 60 }}
        px={{ base: 4, md: 4 }}
        height="20"
        alignItems="center"
        borderBottomWidth="1px"
        justifyContent={{ base: "space-between", md: "flex-end" }}
        {...rest}
      >
        <IconButton
          display={{ base: "flex", md: "none" }}
          onClick={onOpen}
          variant="outline"
          aria-label="open menu"
          icon={<FiMenu />}
        />
  
        <HStack spacing={{ base: "3", md: "6" }}>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <FaMoon /> : <FaSun />}
          </Button>
          <Flex alignItems={"center"} >
            <Menu>
              <MenuButton
                py={2}
                transition="all 0.3s"
                _focus={{ boxShadow: "none" }}
              >
                <HStack>
                  <Avatar size={"sm"} name="Arpita" />
                  <VStack
                    display={{ base: "none", md: "flex" }}
                    alignItems="flex-start"
                    spacing="1px"
                    ml="2"
                  >
                    <Text fontSize="xs" color="gray.600" fontWeight={400}>
                      Arpita
                    </Text>
                  </VStack>
                </HStack>
              </MenuButton>
            </Menu>
          </Flex>
        </HStack>
      </Flex>
    );
  };
  
  export default BottomBar;
  