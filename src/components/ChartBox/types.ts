export interface RequestBody {
  chainName: string;
  period: string;
  compareWith: string[];
}

export interface RawMetricData {
  blockchain: {
    tg_growth_index: {
      date: string;
      value: number;
    }[];
  };
  cumulative: {
    tg_growth_index: {
      date: string;
      value: number;
    }[];
  };
}

export interface ChartData {
  date: string;
  ethereumValue: number;
  cumulativeValue: number;
}
