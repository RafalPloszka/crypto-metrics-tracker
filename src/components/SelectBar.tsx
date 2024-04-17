import Select, { MultiValue } from "react-select";
import { Flex, Box, Text, Button } from "@radix-ui/themes";
import { useState } from "react";

interface Option {
  value: string;
  label: string;
  isDisabled?: boolean;
}

interface OptionsGroup {
  label?: string;
  options: Option[];
}

const ethereumOption: Option = { value: "eth", label: "Ethereum" };

const solanaOption: Option = { value: "sol", label: "Solana" };

const comingSoonOptions: Option[] = [
  { value: "avax", label: "Avalanche", isDisabled: true },
  { value: "BSC", label: "BSC", isDisabled: true },
  { value: "atom", label: "Cosmos", isDisabled: true },
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

const optionsWithSol: OptionsGroup[] = [
  {
    options: [solanaOption],
  },
  comingSoonOptionsGroup,
];

const comingSoonDateRangeOptions: Option[] = [
  { value: "lastMonth", label: "Last month", isDisabled: true },
  { value: "last3Months", label: "Last 3 months", isDisabled: true },
  { value: "allTime", label: "All time", isDisabled: true },
];

const comingSoonDateRangeOptionsGroup: OptionsGroup = {
  label: "Coming soon",
  options: comingSoonDateRangeOptions,
};

const dateRangeOptions: OptionsGroup[] = [
  { options: [{ value: "lastYear", label: "Last year" }] },
  comingSoonDateRangeOptionsGroup,
];

const SelectBar = () => {
  const [selectedBlockchain, setSelectedBlockchain] = useState<Option | null>(
    null
  );
  const [selectedComparisons, setSelectedComparisons] = useState<Option[]>([]);

  const handleBlockchainChange = (selectedOption: Option | null) => {
    setSelectedBlockchain(selectedOption);
  };

  const handleComparisonsChange = (selectedOptions: MultiValue<Option>) => {
    // Convert readonly array to mutable array
    const mutableSelectedOptions: Option[] = Array.from(selectedOptions);
    setSelectedComparisons(mutableSelectedOptions);
  };

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
          options={optionsWithSol}
          isOptionDisabled={(option: Option) => !!option.isDisabled}
          isMulti
        />
      </Box>

      <Box width="200px">
        <Text>Date range</Text>
        <Select
          options={dateRangeOptions}
          isOptionDisabled={(option: Option) => !!option.isDisabled}
        />
      </Box>

      <Button size="2">Compare</Button>
    </Flex>
  );
};

export default SelectBar;
