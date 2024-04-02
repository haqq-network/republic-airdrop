'use client';

import { useMemo } from 'react';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';
import { BlockLoading, Container, HaqqHeading, Text } from '@haqq-nft/ui-kit';
import { formatEthDecimal } from '@haqq-nft/utils';
import { useIslmEstimated } from '@haqq-nft/web3-connections';
import { useChartData } from './use-chart-data';

const NOW = new Date();
const TOMORROW = new Date(NOW);
TOMORROW.setDate(TOMORROW.getDate() + 1);

const numberWithZero = (num: number) => {
  return num < 10 ? `0${num}` : num;
};

const tickProps = {
  fill: 'white',
  opacity: 0.5,
  fontSize: '14px',
  fontWeight: 500,
  minWidth: 70,
  width: 70,
};

export const Chart = () => {
  const { value: price, loading } = useIslmEstimated(1);

  const { data, isLoading } = useChartData();

  const chartData = useMemo(() => {
    if (!data || loading) {
      return [];
    }

    const items = data?.historical.map((item) => {
      return {
        date: new Date(item[0]).getTime(),
        price: item[1],
      };
    });

    items.push({
      date: NOW.getTime(),
      price: +formatEthDecimal(price),
    });

    return items;
  }, [data, price, loading]);

  const maxPrice = useMemo(() => {
    return Math.max(
      ...chartData.map((item) => {
        return item.price;
      }),
    );
  }, [chartData]);

  return (
    <Container>
      <HaqqHeading>Token price</HaqqHeading>

      <div className="mb-[16px] mt-[20px]">
        <Text size="large" className="text-white/50 ">
          On {NOW.getDate()}.{NOW.getMonth()}.{NOW.getFullYear()}:
        </Text>

        <Text size="large" className="ml-[12px]">
          {loading ? (
            <BlockLoading />
          ) : (
            `${formatEthDecimal(price)} ISLM for 1 token`
          )}
        </Text>
      </div>

      {isLoading || !data ? (
        <BlockLoading />
      ) : (
        <ResponsiveContainer width={'100%'} height={123}>
          <LineChart
            data={chartData}
            margin={{ top: 0, left: 0, right: 50, bottom: 0 }}
            className="border-haqq-border rounded-[4px] border"
          >
            <CartesianGrid
              vertical={false}
              strokeOpacity={0.15}
              color="white"
            />
            <XAxis
              dataKey="date"
              opacity={0.15}
              dy={3}
              color="white"
              fontSize={14}
              fontWeight={500}
              tick={tickProps}
              tickLine={false}
              tickFormatter={(val, index) => {
                if (index === chartData.length - 1) {
                  return 'Now';
                }

                const date = new Date(val);
                return `${numberWithZero(date.getDate())}.${numberWithZero(date.getMonth())}`;
              }}
            />
            <YAxis
              tickCount={5}
              orientation="right"
              dy={-6}
              fontSize={14}
              fontWeight={500}
              tick={{
                ...tickProps,
                width: 80,
              }}
              tickFormatter={(val, index) => {
                if (index === chartData.length - 1) return '';

                return `${val} ISLM`;
              }}
              opacity={0.15}
              color="white"
              scale={'linear'}
              domain={[0, maxPrice * 1.2]}
            />
            <Line
              type="monotone"
              dataKey="price"
              width={2}
              stroke="#1BDDAF"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </Container>
  );
};
