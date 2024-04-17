import Select, { MultiValue } from "react-select";
import { Flex, Box, Text, Button } from "@radix-ui/themes";
import { Option, OptionsGroup } from "types";

const ethereumOption: Option = { value: "ethereum", label: "Ethereum" };

const solanaOption: Option = { value: "solana", label: "Solana" };

const comingSoonOptions: Option[] = [
  { value: "avalanche", label: "Avalanche", isDisabled: true },
  { value: "bsc", label: "BSC", isDisabled: true },
  { value: "cosmos", label: "Cosmos", isDisabled: true },
];

const comingSoonOptionsGroup: OptionsGroup = {
  label: "Coming soon",
  options: comingSoonOptions,
};

const optionsWithEth: OptionsGroup[] = [
  {
    options: [ethereumOption],
  },
  comingSoonOptionsGroup,
];

const compareWithOptions: OptionsGroup[] = [
  {
    options: [solanaOption],
  },
  comingSoonOptionsGroup,
];

const comingSoonDateRangeOptions: Option[] = [
  { value: "last month", label: "Last month", isDisabled: true },
  { value: "last 3months", label: "Last 3 months", isDisabled: true },
  { value: "all", label: "All time", isDisabled: true },
];

const comingSoonDateRangeOptionsGroup: OptionsGroup = {
  label: "Coming soon",
  options: comingSoonDateRangeOptions,
};

const dateRangeOptions: OptionsGroup[] = [
  { options: [{ value: "last year", label: "Last year" }] },
  comingSoonDateRangeOptionsGroup,
];

interface SelectBarProps {
  selectedBlockchain: Option | null;
  handleBlockchainChange: (selectedOption: Option | null) => void;
  selectedComparisons: Option[] | [];
  handleComparisonsChange: (selectedOptions: MultiValue<Option>) => void;
  selectedDateRange: Option | null;
  handleDateRangeChange: (selectedOption: Option | null) => void;
}

const SelectBar = ({
  selectedBlockchain,
  handleBlockchainChange,
  selectedComparisons,
  handleComparisonsChange,
  selectedDateRange,
  handleDateRangeChange,
}: SelectBarProps) => {
  return (
    <Flex gap="8" align="center">
      <Box width="200px">
        <Text>Blockchain</Text>
        <Select
          value={selectedBlockchain}
          onChange={handleBlockchainChange}
          options={optionsWithEth}
          isOptionDisabled={(option: Option) => !!option.isDisabled}
        />
      </Box>

      <Box width="200px">
        <Text>Compare with</Text>
        <Select
          value={selectedComparisons}
          onChange={handleComparisonsChange}
          options={compareWithOptions}
          isOptionDisabled={(option: Option) => !!option.isDisabled}
          isMulti
        />
      </Box>

      <Box width="200px">
        <Text>Date range</Text>
        <Select
          value={selectedDateRange}
          onChange={handleDateRangeChange}
          options={dateRangeOptions}
          isOptionDisabled={(option: Option) => !!option.isDisabled}
        />
      </Box>

      <Button size="2">Compare</Button>
    </Flex>
  );
};

export default SelectBar;
