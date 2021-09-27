import { Flex } from "@chakra-ui/layout";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onSubmit:any ;
}

export default function Form ({ children, onSubmit }: Props) {
  return (
    <Flex
      as="form"
      onSubmit={onSubmit}
      h="60%"
      w="58%"
      p={20}
      fontSize="23.8"
      flexDir="column"
      backgroundColor="gray.100"
      boxShadow=" 1px  #bebebe"
    >
      {children}
    </Flex>
  );
};


