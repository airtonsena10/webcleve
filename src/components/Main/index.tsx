import { Flex } from "@chakra-ui/layout";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Main({ children }: Props) {
  return (
    <Flex
      as="main"
      alignItems="right"
      justifyContent="right"
      maxWidth="100%"
      minHeight="100vh"
      bg="gray.100"
      backgroundImage="/logo.png"
      backgroundRepeat="no-Repeat"
      color="white"
    >
      {children}
    </Flex>
  );
};

