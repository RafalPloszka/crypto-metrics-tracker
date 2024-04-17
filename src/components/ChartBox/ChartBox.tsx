import { Box, Skeleton, Text } from "@radix-ui/themes";
import useSWR, { SWRResponse } from "swr";
import Chart from "./Chart";
import { RawMetricData, ChartData, RequestBody } from "./types";

const API_URL = "/api/data";

const transformDataForChart = (data?: RawMetricData): ChartData[] => {
  if (!data) {
    return [];
  }

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

const fetcher = async (
  url: string,
  body: RequestBody
): Promise<RawMetricData> => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      metric: "tg_growth_index",
      ...body,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
};

const ChartBox = ({ params }: { params: RequestBody }) => {
  const { data, isLoading, error }: SWRResponse<RawMetricData, Error> = useSWR(
    [API_URL, params],
    ([url, params]) => fetcher(url, params)
  );

  if (error) {
    return <Text color="ruby">Error fetching data</Text>;
  }

  return (
    <Box mt="6">
      <Skeleton loading={isLoading}>
        <Chart
          data={transformDataForChart(data)}
          compareWith={params.compareWith}
        />
      </Skeleton>
    </Box>
  );
};

export default ChartBox;
