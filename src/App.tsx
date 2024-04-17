import { Box, Flex, Heading } from "@radix-ui/themes";
import MetricsWrapper from "@components/MetricsWrapper";

function App() {
  return (
    <Flex align="center" justify="center" height="100vh">
      <Box minHeight="50%">
        <Heading mb="3">Crypto metrics tracker</Heading>
        <MetricsWrapper />
      </Box>
    </Flex>
  );
}

export default App;
