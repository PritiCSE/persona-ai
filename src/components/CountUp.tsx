import { useEffect, useRef, useState } from "react";

export const useCountUp = (target: number, duration = 1400) => {
  const [val, setVal] = useState(0);
  const startedAt = useRef<number | null>(null);
  useEffect(() => {
    let raf = 0;
    const step = (t: number) => {
      if (startedAt.current === null) startedAt.current = t;
      const p = Math.min(1, (t - startedAt.current) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(target * eased);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  return val;
};

export const CountUp = ({
  value, prefix = "", suffix = "", decimals = 0, className,
}: { value: number; prefix?: string; suffix?: string; decimals?: number; className?: string }) => {
  const v = useCountUp(value);
  const formatted = decimals > 0 ? v.toFixed(decimals) : Math.round(v).toLocaleString();
  return <span className={className}>{prefix}{formatted}{suffix}</span>;
};
