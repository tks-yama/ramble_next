
import { Button, Flex, Heading, Input, Checkbox, Text,Link} from "@chakra-ui/react";



export default function Page() {

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center" >
       <Flex direction="column" padding={100} rounded={50} minWidth="550px" maxWidth="90%" background="gray.100">
            <Heading padding={10} color="#2B3774" textAlign="center">ログイン画面</Heading>
            <Input placeholder="mail@sample.com" type="email" borderRadius="12px"  sx={{'::placeholder': {fontSize: '10px',},}} mb={3} />
            <Input placeholder="********" type="password" borderRadius="12px"/>
            <Flex align="center" justifyContent="space-between" margin={4}>
                <Flex align="center">
                    <Checkbox fontSize="8px" />
                    <Text ml={2} fontSize="10px">ログイン状態を保存する</Text>
                </Flex>
                <Link color="#4418FF" fontSize="10px" href="/forgot-password"> パスワードを忘れですか？</Link>
            </Flex>
            <Button type="submit" margin={2} color="white" bg="#4418FF"  borderRadius="10px" fontSize="8px">ログイン</Button>
      </Flex>
    </Flex>
  );
}