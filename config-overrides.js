module.exports = function override(config, env) {
  console.log("override!");

  let loaders = config.module.rules[1].oneOf;
  loaders.splice(loaders.length - 1, 0, {
    test: /\.css$/i,
    use: ["style-loader", "css-loader"],
  });

  return config;
};
