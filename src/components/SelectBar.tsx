import Select from "react-select";

interface Option {
  readonly value: string;
  readonly label: string;
  readonly isDisabled?: boolean;
}

interface OptionsGroup {
  label?: string;
  options: Option[];
}

const ethereumOption: Option = { value: "eth", label: "Ethereum" };

const solanaOption: Option = { value: "sol", label: "Solana" };

const comingSoonOptions: Option[] = [
  { value: "avax", label: "Avalanche", isDisabled: true },
  { value: "bnb", label: "BNB", isDisabled: true },
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
  return (
    <>
      <span>Blockchain:</span>
      <Select
        options={optionsWithEth}
        isOptionDisabled={(option: Option) => !!option.isDisabled}
      />
      <br />
      <span>Compare with:</span>
      <Select
        options={optionsWithSol}
        isOptionDisabled={(option: Option) => !!option.isDisabled}
        isMulti
      />
      <br />
      <span>Date range:</span>
      <Select
        options={dateRangeOptions}
        isOptionDisabled={(option: Option) => !!option.isDisabled}
      />
    </>
  );
};

export default SelectBar;
