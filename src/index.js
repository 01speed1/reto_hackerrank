import React from "react";
import { render } from "react-dom";
import { App } from "./App";
import { configureFakeAPI } from "./helpers";

configureFakeAPI();

render(<App />, document.getElementById("app"));
