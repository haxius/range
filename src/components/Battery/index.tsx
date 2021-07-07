import React, { FC, useState } from "react";
import { Range } from "react-range";
import styles from "./styles.module.scss";

interface IBatteryProps {}

const Battery: FC<IBatteryProps> = () => {
  const [values, setValues] = useState<number[]>([50]);

  return (
    <div className={styles.battery}>
      <Range
        step={0.1}
        min={0}
        max={100}
        values={values}
        onChange={(values) => setValues(values)}
        renderTrack={({ props, children }) => (
          <div {...props} className={styles.track} style={props.style}>
            {children}
            <div
              className={styles.completion}
              style={{ width: `${values[0]}%` }}
            />
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
