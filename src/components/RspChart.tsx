import { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { MONTH_LABELS } from "../utils/aggregation";

interface RspChartProps {
  monthlyAverages: number[];
  city: string;
  fuel: string;
  year: number;
}

export function RspChart({ monthlyAverages, city, fuel, year }: RspChartProps) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const chart = echarts.init(ref.current);

    chart.setOption({
      backgroundColor: "#fff",
      title: {
        text: `${fuel} RSP in ${city} (${year})`,
        left: "center",
        top: 10
      },
      tooltip: { trigger: "axis" },

      xAxis: {
        type: "category",
        data: MONTH_LABELS
      },

      yAxis: {
        type: "value",
        name: "RSP",
        min: 0
      },

      series: [
        {
          type: "bar",
          data: monthlyAverages,
          barWidth: "55%",
          itemStyle: {
            color: "#5b9bd5"
          }
        }
      ]
    });

    const resize = () => chart.resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [monthlyAverages, city, fuel, year]);

  return <div ref={ref} style={{ width: "100%", height: 420 }} />;
}
