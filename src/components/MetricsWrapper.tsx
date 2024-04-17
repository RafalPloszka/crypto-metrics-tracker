import ChartBox from "@components/ChartBox/ChartBox";
import SelectBar from "@components/SelectBar/SelectBar";
import { Container } from "@radix-ui/themes";
import { MultiValue } from "react-select";
import { useState } from "react";
import { Option } from "types";

const MetricsWrapper = () => {
  const [selectedBlockchain, setSelectedBlockchain] = useState<Option | null>(
    null
  );
  const [selectedComparisons, setSelectedComparisons] = useState<Option[]>([]);

  const [selectedDateRange, setSelectedDateRange] = useState<Option | null>(
    null
  );

  const handleBlockchainChange = (selectedOption: Option | null) => {
    setSelectedBlockchain(selectedOption);
  };

  const handleComparisonsChange = (selectedOptions: MultiValue<Option>) => {
    // Convert readonly array to mutable array
    const mutableSelectedOptions: Option[] = Array.from(selectedOptions);
    setSelectedComparisons(mutableSelectedOptions);
  };

  const handleDateRangeChange = (selectedOption: Option | null) => {
    setSelectedDateRange(selectedOption);
  };

  const displayChart =
    !!selectedBlockchain &&
    selectedComparisons.length !== 0 &&
    !!selectedDateRange;

  return (
    <>
      <SelectBar
        selectedBlockchain={selectedBlockchain}
        handleBlockchainChange={handleBlockchainChange}
        selectedComparisons={selectedComparisons}
        handleComparisonsChange={handleComparisonsChange}
        selectedDateRange={selectedDateRange}
        handleDateRangeChange={handleDateRangeChange}
      />
      <Container size="3">
        {displayChart ? (
          <ChartBox
            params={{
              chainName: selectedBlockchain?.value,
              compareWith: selectedComparisons.map((option) => option.value),
              period: selectedDateRange?.value,
            }}
          />
        ) : null}
      </Container>
    </>
  );
};

export default MetricsWrapper;
