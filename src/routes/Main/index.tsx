import React, { FC } from "react";
import Battery from "../../components/Battery";
import { Route } from "../../context/Router/models";

const Main: FC = () => <Battery />;

export default {
  name: "",
  component: Main,
} as Route;
