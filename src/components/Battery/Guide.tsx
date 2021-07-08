import cc from "classcat";
import React, { FC, Fragment } from "react";
import styles from "./styles.module.scss";

interface IGuideProps {
  location: number;
  caption?: boolean | string;
}

const Guide: FC<IGuideProps> = ({ location, caption }) => (
  <div
    className={cc([styles.guide, styles.guideImportant])}
    style={{ left: `${location}%` }}
  >
    {!!caption ? (
      <span>{typeof caption === "string" ? caption : `${location}%`}</span>
    ) : (
      <Fragment />
    )}
  </div>
);

export default Guide;
