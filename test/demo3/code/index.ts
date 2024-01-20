import { add } from "./add";
import { sub } from "./sub";
import "./index.css";

const value = add(1, 4) + sub(3, 2);

document.body.innerHTML = `<div id="app">with ts loader and css loader: ${value}</div>`;
