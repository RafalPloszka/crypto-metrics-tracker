import { Box, Flex, Heading } from "@radix-ui/themes";
import MetricsWrapper from "@components/MetricsWrapper";

function App() {
  return (
    <Flex align="center" justify="center" pt={{ initial: "6", lg: "9" }} px="2">
      <Box width="100%" minHeight="50%">
        <Heading size="8" mb="8" align="center">
          Crypto metrics tracker
        </Heading>
        <MetricsWrapper />
      </Box>
    </Flex>
  );
}

export default App;
