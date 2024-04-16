import SelectBar from "./components/SelectBar";
import { Box, Container, Flex, Heading } from "@radix-ui/themes";

function App() {
  return (
    <Flex align="center" justify="center" height="100vh">
      <Box minHeight="50%">
        <Heading mb="3">Crypto metrics tracker</Heading>
        <SelectBar />
        <Container size="3" />
      </Box>
    </Flex>
  );
}

export default App;
