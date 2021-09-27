/* eslint-disable react-hooks/rules-of-hooks */
import { useState, FormEvent } from "react";
import { useRouter } from "next/router";

import axios from "axios";

import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import { Radio, RadioGroup } from "@chakra-ui/react";

import Form from "../components/Form";
import Main from "../components/Main";

export default function secondForm() {
  const router = useRouter();
  const [redirect, setRedirect] = useState(false);

  const [name, setName] = useState();
  const [date, setDate] = useState();
  const [dia, setDia] = useState();
  const [hora, setHora] = useState();

  const formSubmit = (event: FormEvent) => {
    event.preventDefault();

    axios.post("/api/form", {
      name: name,
      date: date,
      dia: dia,
      hora: hora,
    });
    setRedirect(true);
    router.push("/relatorio");
  };

  return (
    <Main>
      <Form onSubmit={formSubmit}>
        <Box mb={6}>
          <Text as="label" fontSize="1.1rem" for-id="name">
            Nome:
          </Text>
          <Input
            type="text"
            id="name"
            backgroundColor="gray.50"
            mt={2}
            value={name}
            onChange={(event: any) => setName(event.target.value)}
          />
        </Box>

        <Box mb={6}>
          <Text as="label" fontSize="1.1rem" for-id="email">
            Data de Nascimento:
          </Text>
          <Input
            type="date"
            id="date"
            backgroundColor="gray.50"
            mt={2}
            value={date}
            onChange={(event: any) => setDate(event.target.value)}
          />
        </Box>

        <Box mb={6}>
          <Text
            as="label"
            fontSize={{ base: "20px", md: "40px", lg: "16px" }}
            for-id="cpf"
          >
            Para qual dia você deseja gerar o gráfico de saúde?
          </Text>
          <Input
            type="text"
            id="dia"
            backgroundColor="gray.50"
            mt={2}
            value={dia}
            onChange={(event: any) => setDia(event.target.value)}
          />
        </Box>
        <Box mb={6}>
          <Text as="label" fontSize="1.1rem" for-id="hora">
            Selecione a hora para preencher os dados:
          </Text>

          <RadioGroup name="form-name">
            <Radio
              id="hora"
              backgroundColor="gray.50"
              mt={2}
              value={hora}
              onChange={(event: any) => setHora(event.target.value)}
            >
              13:00
            </Radio>
            <Radio
              id="hora"
              backgroundColor="gray.50"
              mt={2}
              value={hora}
              onChange={(event: any) => setHora(event.target.value)}
            >
              14:00
            </Radio>
            <Radio
              id="hora"
              backgroundColor="gray.50"
              mt={2}
              value={hora}
              onChange={(event: any) => setHora(event.target.value)}
            >
              15:00
            </Radio>
            <Radio
              id="hora"
              backgroundColor="gray.50"
              mt={2}
              value={hora}
              onChange={(event: any) => setHora(event.target.value)}
            >
              17:00
            </Radio>
            <Radio
              id="hora"
              borderColor="blackAlpha.300"
              backgroundColor="gray.50"
              mt={2}
              value={hora}
              onChange={(event: any) => setHora(event.target.value)}
            >
              18:00
            </Radio>
          </RadioGroup>
        </Box>

        {redirect === false ? (
          <Flex
            mt={6}
            mb={6}
            alignContent="center"
            justifyContent="center"
            w="100%"
          >
            <Button
              type="submit"
              w="40%"
              backgroundColor="blue.500"
              _hover={{ backgroundColor: "Blue.400" }}
            >
              Gera diario de saude
            </Button>
          </Flex>
        ) : (
          <Flex
            mt={6}
            mb={6}
            alignContent="center"
            justifyContent="center"
            w="100%"
          >
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          </Flex>
        )}
      </Form>
    </Main>
  );
}
