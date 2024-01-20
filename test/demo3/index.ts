import { run } from "../../src/index";
import * as path from "path";
import HtmlPlugin from "../../src/tool-kit/plugins/html-plugin";
import { getTSLoader } from "../../src/tool-kit/loaders/ts-loader";
import { cssLoader } from "../../src/tool-kit/loaders/css-loader";

const tsLoader = getTSLoader({ useBabel: true });

const filePath = path.resolve(__dirname, "./code/index.ts");

const outputPath = path.resolve(__dirname, "./dist/bundle.js");

run({
  rootPath: path.resolve(__dirname, "./code"),
  entry: filePath,
  output: outputPath,
  loaders: {
    ".css": [cssLoader],
    ".ts": [tsLoader],
  },
  plugins: [new HtmlPlugin()],
  devServer: {
    rootPath: path.resolve(__dirname),
    hot: true,
  },
  watch: true,
});
