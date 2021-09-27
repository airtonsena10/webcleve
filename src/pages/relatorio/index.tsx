import { GetServerSideProps } from "next";

import axios from "axios";

import { Box, Flex, Heading, Text } from "@chakra-ui/layout";

import Main from "../../components/Main";

interface Form {
  name: string;
  date: number;
  dia: string;
  hora: number;
}

interface Results {
  data: Form[];
}

export default function relatorio({ data }: Results) {
  const filterName = data.filter((d) => d.name.length);

  return (
    <Main>
      <Flex flexDir="column" p={10}>
        <Heading fontSize="5xl">Relatorio de saude:</Heading>

        <Box mt={8}>
          {filterName.map((data) => (
            <Box
              key={data.name}
              as="ul"
              mt={6}
              p={4}
              listStyleType="none"
              backgroundColor="gray.200"
            >
              <Text mb={4} as="li" fontSize="lg">
                Nome: {data.name}
              </Text>
              <Text mb={4} as="li" fontSize="lg">
                Data de nascimento: {data.date}
              </Text>
              <Text mb={4} as="li" fontSize="lg">
                dia: {data.dia}
              </Text>
              <Text as="li">HOra: {data.hora}</Text>
            </Box>
          ))}
        </Box>
      </Flex>
    </Main>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await axios.get("http://localhost:3000/api/formGet");

  return {
    props: { data },
  };
};
