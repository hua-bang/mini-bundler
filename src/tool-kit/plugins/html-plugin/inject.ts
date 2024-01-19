const Env = Object.assign({}, process.env, {
  NODE_ENV: "development",
});

const EnvJSONStr = JSON.stringify(Env);

export const InjectCode = `
  const process = {
    env: JSON.parse('${EnvJSONStr}' || "{}") ,
  };
  window.process = process;

  console.log("process.env.NODE_ENV", process.env.NODE_ENV);
`;
