import cc from "classcat";
import React, { FC, useState } from "react";
import { Range } from "react-range";
import styles from "./styles.module.scss";

interface IBatteryProps {}

const Battery: FC<IBatteryProps> = () => {
  const [value, setValue] = useState<number>(50);

  const updateValues = (newValues: number[]): void => {
    const [newValue] = newValues || [50];
    let result = newValue % 10 < 3 ? newValue - (newValue % 10) : newValue;
    setValue(result < 50 ? 50 : result);
  };

  return (
    <div className={styles.battery}>
      <Range
        step={0.1}
        min={0}
        max={100}
        values={[value]}
        onChange={(values) => updateValues(values)}
        renderTrack={({ props, children }) => (
          <div {...props} className={styles.track} style={props.style}>
            {children}
            <div className={styles.completion} style={{ width: `${value}%` }} />
            <div
              className={cc([styles.guide, styles.guideGreen])}
              style={{ left: "50%" }}
            >
              <span>50%</span>
            </div>
            <div className={styles.guide} style={{ left: "60%" }} />
            <div
              className={cc([styles.guide, styles.guideGreen])}
              style={{ left: "70%" }}
            >
              <span>70%</span>
            </div>
            <div className={styles.guide} style={{ left: "80%" }} />
            <div
              className={cc([styles.guide, styles.guideGreen])}
              style={{ left: "90%" }}
            >
              <span>DAILY</span>
            </div>
          </div>
        )}
        renderThumb={({ props }) => (
          <div {...props} className={styles.thumb} style={props.style} />
        )}
      />
      <div className={styles.batteryCap} />
    </div>
  );
};

export default Battery;
