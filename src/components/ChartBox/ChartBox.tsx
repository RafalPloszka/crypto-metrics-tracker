import { Card, Text } from "@radix-ui/themes";
import useSWR, { SWRResponse } from "swr";
import Chart from "./Chart";
import { RawMetricData, ChartData } from "./types";

const API_URL =
  "https://api.tokenguard.io/db-api/growth-index/basic-timeline-data";

const transformDataForChart = (data: RawMetricData): ChartData[] => {
  const ethereumData = data.blockchain.tg_growth_index;
  const cumulativeData = data.cumulative.tg_growth_index;

  const transformedData: ChartData[] = [];

  for (let i = 0; i < ethereumData.length; i++) {
    transformedData.push({
      date: ethereumData[i].date,
      ethereumValue: ethereumData[i].value,
      cumulativeValue: cumulativeData[i].value,
    });
  }

  return transformedData;
};

const data: RawMetricData = {
  blockchain: {
    tg_growth_index: [
      {
        date: "2023-04-17",
        value: 56.66,
      },
      {
        date: "2023-04-24",
        value: 52.73,
      },
      {
        date: "2023-05-01",
        value: 62.11,
      },
      {
        date: "2023-05-08",
        value: 61,
      },
      {
        date: "2023-05-15",
        value: 51.96,
      },
      {
        date: "2023-05-22",
        value: 50.13,
      },
      {
        date: "2023-05-29",
        value: 47.82,
      },
      {
        date: "2023-06-05",
        value: 46.6,
      },
      {
        date: "2023-06-12",
        value: 44.18,
      },
      {
        date: "2023-06-19",
        value: 44.62,
      },
      {
        date: "2023-06-26",
        value: 46.05,
      },
      {
        date: "2023-07-03",
        value: 46.63,
      },
      {
        date: "2023-07-10",
        value: 48.82,
      },
      {
        date: "2023-07-17",
        value: 50.21,
      },
      {
        date: "2023-07-24",
        value: 51.71,
      },
      {
        date: "2023-07-31",
        value: 49.02,
      },
      {
        date: "2023-08-07",
        value: 48.33,
      },
      {
        date: "2023-08-14",
        value: 48.08,
      },
      {
        date: "2023-08-21",
        value: 45.72,
      },
      {
        date: "2023-08-28",
        value: 46.58,
      },
      {
        date: "2023-09-04",
        value: 44.43,
      },
      {
        date: "2023-09-11",
        value: 49.01,
      },
      {
        date: "2023-09-18",
        value: 45.13,
      },
      {
        date: "2023-09-25",
        value: 46.01,
      },
      {
        date: "2023-10-02",
        value: 45.59,
      },
      {
        date: "2023-10-09",
        value: 43.54,
      },
      {
        date: "2023-10-16",
        value: 46.49,
      },
      {
        date: "2023-10-23",
        value: 54.77,
      },
      {
        date: "2023-10-30",
        value: 57.59,
      },
      {
        date: "2023-11-06",
        value: 65.76,
      },
      {
        date: "2023-11-13",
        value: 64.97,
      },
      {
        date: "2023-11-20",
        value: 65.48,
      },
      {
        date: "2023-11-27",
        value: 64.57,
      },
      {
        date: "2023-12-04",
        value: 63.47,
      },
      {
        date: "2023-12-11",
        value: 57.98,
      },
      {
        date: "2023-12-18",
        value: 56.9,
      },
      {
        date: "2023-12-25",
        value: 50.81,
      },
      {
        date: "2024-01-01",
        value: 48.64,
      },
      {
        date: "2024-01-08",
        value: 52.94,
      },
      {
        date: "2024-01-15",
        value: 50.18,
      },
      {
        date: "2024-01-22",
        value: 47.34,
      },
      {
        date: "2024-01-29",
        value: 49.48,
      },
      {
        date: "2024-02-05",
        value: 55.44,
      },
      {
        date: "2024-02-12",
        value: 56.56,
      },
      {
        date: "2024-02-19",
        value: 60.1,
      },
      {
        date: "2024-02-26",
        value: 68.08,
      },
      {
        date: "2024-03-04",
        value: 69.82,
      },
      {
        date: "2024-03-11",
        value: 67.28,
      },
      {
        date: "2024-03-18",
        value: 58.07,
      },
      {
        date: "2024-03-25",
        value: 54.33,
      },
      {
        date: "2024-04-01",
        value: 48.61,
      },
    ],
  },
  cumulative: {
    tg_growth_index: [
      {
        date: "2023-04-17",
        value: 52.19,
      },
      {
        date: "2023-04-24",
        value: 53.17,
      },
      {
        date: "2023-05-01",
        value: 56.8,
      },
      {
        date: "2023-05-08",
        value: 56.03,
      },
      {
        date: "2023-05-15",
        value: 53.21,
      },
      {
        date: "2023-05-22",
        value: 49.64,
      },
      {
        date: "2023-05-29",
        value: 48.37,
      },
      {
        date: "2023-06-05",
        value: 43.21,
      },
      {
        date: "2023-06-12",
        value: 42.04,
      },
      {
        date: "2023-06-19",
        value: 45.1,
      },
      {
        date: "2023-06-26",
        value: 47.67,
      },
      {
        date: "2023-07-03",
        value: 49.89,
      },
      {
        date: "2023-07-10",
        value: 55.77,
      },
      {
        date: "2023-07-17",
        value: 56.75,
      },
      {
        date: "2023-07-24",
        value: 56.31,
      },
      {
        date: "2023-07-31",
        value: 54.09,
      },
      {
        date: "2023-08-07",
        value: 53.04,
      },
      {
        date: "2023-08-14",
        value: 49.97,
      },
      {
        date: "2023-08-21",
        value: 46.41,
      },
      {
        date: "2023-08-28",
        value: 44.72,
      },
      {
        date: "2023-09-04",
        value: 44.14,
      },
      {
        date: "2023-09-11",
        value: 44.46,
      },
      {
        date: "2023-09-18",
        value: 46.39,
      },
      {
        date: "2023-09-25",
        value: 48.64,
      },
      {
        date: "2023-10-02",
        value: 52.29,
      },
      {
        date: "2023-10-09",
        value: 53.89,
      },
      {
        date: "2023-10-16",
        value: 58.04,
      },
      {
        date: "2023-10-23",
        value: 61.15,
      },
      {
        date: "2023-10-30",
        value: 66.22,
      },
      {
        date: "2023-11-06",
        value: 72.53,
      },
      {
        date: "2023-11-13",
        value: 74.64,
      },
      {
        date: "2023-11-20",
        value: 75.61,
      },
      {
        date: "2023-11-27",
        value: 71.13,
      },
      {
        date: "2023-12-04",
        value: 72.86,
      },
      {
        date: "2023-12-11",
        value: 73.88,
      },
      {
        date: "2023-12-18",
        value: 80.71,
      },
      {
        date: "2023-12-25",
        value: 77.11,
      },
      {
        date: "2024-01-01",
        value: 71.73,
      },
      {
        date: "2024-01-08",
        value: 64.71,
      },
      {
        date: "2024-01-15",
        value: 64.35,
      },
      {
        date: "2024-01-22",
        value: 60.95,
      },
      {
        date: "2024-01-29",
        value: 63.22,
      },
      {
        date: "2024-02-05",
        value: 58.41,
      },
      {
        date: "2024-02-12",
        value: 58.35,
      },
      {
        date: "2024-02-19",
        value: 55.68,
      },
      {
        date: "2024-02-26",
        value: 57.69,
      },
      {
        date: "2024-03-04",
        value: 64.55,
      },
      {
        date: "2024-03-11",
        value: 75.59,
      },
      {
        date: "2024-03-18",
        value: 74.67,
      },
      {
        date: "2024-03-25",
        value: 77.31,
      },
      {
        date: "2024-04-01",
        value: 71.66,
      },
    ],
  },
};

const fetcher = async (url: string): Promise<RawMetricData[]> => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chainName: "ethereum",
      period: "last year",
      metric: "tg_growth_index",
      compareWith: ["solana"],
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
};

const ChartBox = () => {
  const {
    // data,
    isLoading,
    error,
  }: SWRResponse<RawMetricData[], Error> = useSWR(API_URL, fetcher);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text color="ruby">Error fetching data</Text>;
  }

  return (
    <Card size="4" mt="3">
      {/* TODO: Add chart here */}
      <Chart data={transformDataForChart(data)} />
    </Card>
  );
};

export default ChartBox;
