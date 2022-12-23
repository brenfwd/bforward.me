///<reference types="vite/client" />

import { render } from "preact";

import { App } from "./App";

const fromPath = window.localStorage.getItem("path");
if (fromPath) {
  window.localStorage.removeItem("path");
  window.history.replaceState({}, "", fromPath);
}

render(<App />, document.getElementById("root")!);
