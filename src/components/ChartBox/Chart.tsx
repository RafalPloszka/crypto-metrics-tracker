import { useState } from "react";
import { Button, Flex, Text } from "@radix-ui/themes";
import {
  Brush,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { ChartData } from "./types";

interface Chart {
  data: ChartData[];
}

const Chart = ({ data }: Chart) => {
  const [granularity, setGranularity] = useState<number>(1);

  const handleGranularityChange = (weeks: number) => {
    setGranularity(weeks);
  };

  const renderDataWithGranularity = () => {
    if (granularity === undefined) {
      return data;
    }

    const filteredData = data.filter((_item, index) => {
      if (granularity === 1) {
        return true;
      }
      return index % granularity === 0;
    });

    return filteredData;
  };

  return (
    <div>
      <Text size="2">Change granularity:</Text>
      <Flex gap="2">
        <Button
          onClick={() => handleGranularityChange(1)}
          size="1"
          variant="outline"
          disabled={granularity === 1}
        >
          1 Week
        </Button>
        <Button
          onClick={() => handleGranularityChange(2)}
          size="1"
          variant="outline"
          disabled={granularity === 2}
        >
          2 Weeks
        </Button>
        <Button
          onClick={() => handleGranularityChange(4)}
          size="1"
          variant="outline"
          disabled={granularity === 4}
        >
          4 Weeks
        </Button>
      </Flex>
      <LineChart width={800} height={400} data={renderDataWithGranularity()}>
        <CartesianGrid strokeDasharray="2 2" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="ethereumValue"
          name="Ethereum"
          stroke="#37367b"
        />
        <Line
          type="monotone"
          dataKey="cumulativeValue"
          name="Solana"
          stroke="#14F195"
        />
        <Brush height={10} />
      </LineChart>
    </div>
  );
};

export default Chart;
