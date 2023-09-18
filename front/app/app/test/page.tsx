
import {Box,Text,Heading} from "@chakra-ui/react";



export default function Page() {

  return (
    <>
        <Text m="30px" paddingRight={3}>下記に赤色BOXが出る</Text>
        <Heading color="#2B3774">見出し</Heading>
        <Box bg="red.500" w="40px" paddingRight={3} h="40px" ml="80px"/>
        <Box backgroundColor='tomato' />
    </>
  );
}