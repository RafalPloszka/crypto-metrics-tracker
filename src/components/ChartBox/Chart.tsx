import { useState } from "react";
import { Box, Flex, Heading, SegmentedControl, Text } from "@radix-ui/themes";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label,
  ResponsiveContainer,
} from "recharts";
import { ChartData } from "./types";

function capitalizeString(str: string): string {
  if (str.length === 0) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const renderCompareWithLabel = (values: string[]) => {
  if (values.length === 1) {
    return capitalizeString(values[0]);
  }
  return "Cumulative";
};

interface ChartProps {
  data: ChartData[];
  compareWith: string[];
}

const Chart = ({ data, compareWith }: ChartProps) => {
  const [granularity, setGranularity] = useState<number>(1);

  const handleGranularityChange = (weeks: string) => {
    setGranularity(Number(weeks));
  };

  const renderDataWithGranularity = () => {
    const filteredData = data.filter((_item, index) => {
      // If granularity is 1 (show every data point), return true for all data points
      if (granularity === 1) {
        return true;
      }
      // For other granularities, return true only for data points where the index is a multiple of the granularity
      return index % granularity === 0;
    });

    return filteredData;
  };

  return (
    <Box minHeight="200px">
      <Heading as="h2" size="5" align="center">
        TG Growth Index
      </Heading>

      <Box my="4">
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
      </Box>

      <Box style={{ marginLeft: "-24px" }}>
        <ResponsiveContainer width="100%" height="100%" minHeight="250px">
          <LineChart data={renderDataWithGranularity()}>
            <Label>TG Growth Index</Label>
            <CartesianGrid strokeDasharray="2 2" />
            <XAxis dataKey="date" tick={{ fontSize: 10 }} minTickGap={20} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Legend height={16} wrapperStyle={{ fontSize: "12px" }} />
            <Line
              type="monotone"
              dataKey="ethereumValue"
              name="Ethereum"
              stroke="#37367b"
              dot={{ fill: "#37367b", strokeWidth: 0, r: 2 }} // Adjust the 'r' value for smaller dot size
            />
            <Line
              type="monotone"
              dataKey="cumulativeValue"
              name={renderCompareWithLabel(compareWith)}
              stroke="#65BA74"
              dot={{ fill: "#65BA74", strokeWidth: 0, r: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default Chart;
