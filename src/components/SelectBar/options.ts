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

export const optionsWithEth: OptionsGroup[] = [
  {
    options: [ethereumOption],
  },
  comingSoonOptionsGroup,
];

export const optionsToCompareWith: OptionsGroup[] = [
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

export const dateRangeOptions: OptionsGroup[] = [
  { options: [{ value: "last year", label: "Last year" }] },
  comingSoonDateRangeOptionsGroup,
];
