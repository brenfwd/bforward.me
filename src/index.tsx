import { render } from "preact";
import { App } from "./app";

const fromPath = window.localStorage.getItem("path");
if (fromPath) {
  window.localStorage.removeItem("path");
  window.history.replaceState({}, "", fromPath);
}

render(<App />, document.body);
