import Select, { MultiValue } from "react-select";
import { Flex, Box, Text } from "@radix-ui/themes";
import { Option } from "types";
import {
  optionsWithEth,
  optionsToCompareWith,
  dateRangeOptions,
} from "./options";

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
    <Flex
      gap={{
        initial: "4",
        lg: "8",
      }}
      justify="center"
      align="center"
      direction={{
        initial: "column",
        md: "row",
      }}
    >
      <Box width={{ initial: "100%", lg: "300px" }}>
        <Text>Blockchain</Text>
        <Select
          value={selectedBlockchain}
          onChange={handleBlockchainChange}
          options={optionsWithEth}
          isOptionDisabled={(option: Option) => !!option.isDisabled}
        />
      </Box>

      <Box width={{ initial: "100%", lg: "300px" }}>
        <Text>Compare with</Text>
        <Select
          value={selectedComparisons}
          onChange={handleComparisonsChange}
          options={optionsToCompareWith}
          isOptionDisabled={(option: Option) => !!option.isDisabled}
          isMulti
        />
      </Box>

      <Box width={{ initial: "100%", lg: "300px" }}>
        <Text>Date range</Text>
        <Select
          value={selectedDateRange}
          onChange={handleDateRangeChange}
          options={dateRangeOptions}
          isOptionDisabled={(option: Option) => !!option.isDisabled}
        />
      </Box>
    </Flex>
  );
};

export default SelectBar;
