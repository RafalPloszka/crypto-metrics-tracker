import { useState } from "react";
import { Flex, SegmentedControl, Text } from "@radix-ui/themes";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label,
} from "recharts";
import { ChartData } from "./types";

interface Chart {
  data: ChartData[];
}

const Chart = ({ data }: Chart) => {
  const [granularity, setGranularity] = useState<number>(1);

  const handleGranularityChange = (weeks: string) => {
    setGranularity(Number(weeks));
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
      <Text size="2">Granularity:</Text>
      <Flex gap="2">
        <SegmentedControl.Root
          defaultValue="1"
          onValueChange={handleGranularityChange}
          size="1"
        >
          <SegmentedControl.Item value="1">1 week</SegmentedControl.Item>
          <SegmentedControl.Item value="2">2 weeks</SegmentedControl.Item>
          <SegmentedControl.Item value="4">4 weeks</SegmentedControl.Item>
        </SegmentedControl.Root>
      </Flex>
      <LineChart width={800} height={400} data={renderDataWithGranularity()}>
        <Label>TG Growth Index</Label>
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
      </LineChart>
    </div>
  );
};

export default Chart;
