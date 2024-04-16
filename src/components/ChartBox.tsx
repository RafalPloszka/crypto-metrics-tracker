import { Card, Text } from "@radix-ui/themes";
import useSWR, { SWRResponse } from "swr";

const API_URL =
  "https://api.tokenguard.io/db-api/growth-index/basic-timeline-data";

// TODO: add better type
type Data = unknown;

const fetcher = async (url: string): Promise<Data[]> => {
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
  }: SWRResponse<Data[], Error> = useSWR(API_URL, fetcher);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text color="ruby">Error fetching data</Text>;
  }

  return (
    <Card size="4" mt="3">
      {/* TODO: Add chart here */}
    </Card>
  );
};

export default ChartBox;
