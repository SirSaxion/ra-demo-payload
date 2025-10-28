"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";

// Utility: random integer in range
function getRandom(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate a smooth SVG path from data points
function generateSmoothPath(points: number[], width: number, height: number): string {
  if (!points || points.length < 2) return `M 0 ${height}`;

  const xStep = width / (points.length - 1);
  const pathData = points.map((point, i) => {
    const x = i * xStep;
    // Scale point to height with small padding from top/bottom
    const y = height - (point / 100) * (height * 0.8) - height * 0.1;
    return [x, y] as const;
  });

  let path = `M ${pathData[0][0]} ${pathData[0][1]}`;
  for (let i = 0; i < pathData.length - 1; i++) {
    const [x1, y1] = pathData[i];
    const [x2, y2] = pathData[i + 1];
    const midX = (x1 + x2) / 2;
    path += ` C ${midX},${y1} ${midX},${y2} ${x2},${y2}`;
  }

  return path;
}

export type StatsWidgetProps = {
  className?: string;
  timeframeLabel?: string;
};

export default function StatsWidget({ className, timeframeLabel = "This Week" }: StatsWidgetProps) {
  const [stats, setStats] = useState<{ amount: number; change: number; chartData: number[] }>(
    () => ({ amount: 283, change: 36, chartData: [30, 55, 45, 75, 60, 85, 70] })
  );

  const linePathRef = useRef<SVGPathElement | null>(null);
  const areaPathRef = useRef<SVGPathElement | null>(null);

  // Update with random data to simulate live changes
  const updateStats = () => {
    const newAmount = getRandom(100, 999);
    const newChange = getRandom(-50, 100);
    const newChartData = Array.from({ length: 7 }, () => getRandom(10, 90));
    setStats({ amount: newAmount, change: newChange, chartData: newChartData });
  };

  useEffect(() => {
    const id = setInterval(updateStats, 3000);
    return () => clearInterval(id);
  }, []);

  const svgWidth = 150;
  const svgHeight = 60;

  const linePath = useMemo(
    () => generateSmoothPath(stats.chartData, svgWidth, svgHeight),
    [stats.chartData]
  );

  const areaPath = useMemo(() => {
    if (!linePath.startsWith("M")) return "";
    return `${linePath} L ${svgWidth} ${svgHeight} L 0 ${svgHeight} Z`;
  }, [linePath]);

  // Animate line + area on change
  useEffect(() => {
    const path = linePathRef.current;
    const area = areaPathRef.current;
    if (!path || !area) return;

    const length = path.getTotalLength();

    // Line
    path.style.transition = "none";
    path.style.strokeDasharray = `${length} ${length}`;
    path.style.strokeDashoffset = `${length}`;

    // Area
    area.style.transition = "none";
    area.style.opacity = "0";

    // Reflow
    void path.getBoundingClientRect();

    // Start transitions
    path.style.transition = "stroke-dashoffset 0.8s ease-in-out, stroke 0.5s ease";
    path.style.strokeDashoffset = "0";

    area.style.transition = "opacity 0.8s ease-in-out 0.2s, fill 0.5s ease";
    area.style.opacity = "1";
  }, [linePath]);

  const isPositive = stats.change >= 0;
  const changeColorClass = isPositive ? "text-[var(--chart-2)]" : "text-[var(--chart-3)]";
  const graphStrokeColor = isPositive ? "var(--chart-2)" : "var(--chart-3)";
  const gradientId = isPositive ? "areaGradientSuccess" : "areaGradientDestructive";

  return (
    <div className={`w-full bg-card text-card-foreground rounded-2xl shadow-sm p-6 border ${className ?? ""}`}>
      <div className="flex items-center justify-between">
        {/* Left content */}
        <div className="flex w-1/2 flex-col">
          <div className="flex items-center text-muted-foreground text-sm">
            <span>{timeframeLabel}</span>
            <span className={`ml-2 flex items-center font-semibold ${changeColorClass}`}>
              {Math.abs(stats.change)}%
              {isPositive ? <ArrowUp size={16} className="ml-1" /> : <ArrowDown size={16} className="ml-1" />}
            </span>
          </div>
          <p className="mt-2 text-4xl font-bold text-foreground">€{stats.amount}</p>
        </div>

        {/* Right chart */}
        <div className="h-16 w-1/2">
          <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="h-full w-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="areaGradientSuccess" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--chart-2)" stopOpacity={0.35} />
                <stop offset="100%" stopColor="var(--chart-2)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="areaGradientDestructive" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--chart-3)" stopOpacity={0.35} />
                <stop offset="100%" stopColor="var(--chart-3)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <path ref={areaPathRef} d={areaPath} fill={`url(#${gradientId})`} />
            <path
              ref={linePathRef}
              d={linePath}
              fill="none"
              stroke={graphStrokeColor}
              strokeWidth={3}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
