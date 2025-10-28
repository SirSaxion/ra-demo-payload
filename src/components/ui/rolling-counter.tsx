"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { motion, useSpring, useTransform } from "motion/react";
import type { MotionValue } from "motion/react";

interface NumberProps {
  mv: MotionValue<number>;
  number: number;
  height: number;
}

function Number({ mv, number, height }: NumberProps) {
  const y = useTransform(mv, (latest) => {
    const placeValue = latest % 10;
    const offset = (10 + number - placeValue) % 10;
    let memo = offset * height;
    if (offset > 5) {
      memo -= 10 * height;
    }
    return memo;
  });

  const style: CSSProperties = {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return <motion.span style={{ ...style, y }}>{number}</motion.span>;
}

interface DigitProps {
  place: number;
  value: number;
  height: number;
  digitStyle?: CSSProperties;
}

function Digit({ place, value, height, digitStyle }: DigitProps) {
  const valueRoundedToPlace = Math.floor(value / place);
  const animatedValue = useSpring(valueRoundedToPlace);

  useEffect(() => {
    animatedValue.set(valueRoundedToPlace);
  }, [animatedValue, valueRoundedToPlace]);

  const defaultStyle: CSSProperties = {
    height,
    position: "relative",
    width: "1ch",
    fontVariantNumeric: "tabular-nums",
  };

  return (
    <div style={{ ...defaultStyle, ...digitStyle }}>
      {Array.from({ length: 10 }, (_, i) => (
        <Number key={i} mv={animatedValue} number={i} height={height} />
      ))}
    </div>
  );
}

export interface CounterDisplayProps {
  value: number;
  fontSize?: number;
  padding?: number;
  places?: number[];
  gap?: number;
  borderRadius?: number;
  horizontalPadding?: number;
  textColor?: string;
  fontWeight?: CSSProperties["fontWeight"];
  containerStyle?: CSSProperties;
  counterStyle?: CSSProperties;
  digitStyle?: CSSProperties;
  gradientHeight?: number;
  gradientFrom?: string;
  gradientTo?: string;
  topGradientStyle?: CSSProperties;
  bottomGradientStyle?: CSSProperties;
}

export const CounterDisplay = ({
  value,
  fontSize = 80,
  padding = 0,
  places = [100, 10, 1],
  gap = 8,
  borderRadius = 12,
  horizontalPadding = 8,
  textColor = "var(--foreground)",
  fontWeight = 800,
  containerStyle,
  counterStyle,
  digitStyle,
  gradientHeight = 16,
  gradientFrom = "var(--card)",
  gradientTo = "transparent",
  topGradientStyle,
  bottomGradientStyle,
}: CounterDisplayProps) => {
  const height = fontSize + padding;

  const defaultContainerStyle: CSSProperties = {
    position: "relative",
    display: "inline-block",
  };

  const defaultCounterStyle: CSSProperties = {
    fontSize,
    display: "flex",
    gap: gap,
    overflow: "hidden",
    borderRadius: borderRadius,
    paddingLeft: horizontalPadding,
    paddingRight: horizontalPadding,
    lineHeight: 1,
    color: textColor,
    fontWeight: fontWeight,
    backgroundColor: gradientFrom,
  };

  const gradientContainerStyle: CSSProperties = {
    pointerEvents: "none",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  };

  const defaultTopGradientStyle: CSSProperties = {
    height: gradientHeight,
    background: `linear-gradient(to bottom, ${gradientFrom}, ${
      gradientTo ?? "transparent"
    })`,
  };

  const defaultBottomGradientStyle: CSSProperties = {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: gradientHeight,
    background: `linear-gradient(to top, ${gradientFrom}, ${
      gradientTo ?? "transparent"
    })`,
  };

  return (
    <div style={{ ...defaultContainerStyle, ...containerStyle }}>
      <div style={{ ...defaultCounterStyle, ...counterStyle }}>
        {places.map((place) => (
          <Digit
            key={place}
            place={place}
            value={value}
            height={height}
            digitStyle={digitStyle}
          />
        ))}
      </div>
      <div style={gradientContainerStyle}>
        <div style={topGradientStyle ? topGradientStyle : defaultTopGradientStyle} />
        <div
          style={bottomGradientStyle ? bottomGradientStyle : defaultBottomGradientStyle}
        />
      </div>
    </div>
  );
};

export interface AnimatedCounterProps
  extends Omit<CounterDisplayProps, "value"> {
  value: number;
  start?: number;
  delayMs?: number;
  play?: boolean;
}

export function AnimatedCounter({
  value,
  start = 0,
  delayMs = 80,
  play = true,
  ...rest
}: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState<number>(start);

  useEffect(() => {
    if (!play) return;
    const t = setTimeout(() => setDisplayValue(value), Math.max(0, delayMs));
    return () => clearTimeout(t);
  }, [value, delayMs, play]);

  return <CounterDisplay value={displayValue} {...rest} />;
}

export default AnimatedCounter;


