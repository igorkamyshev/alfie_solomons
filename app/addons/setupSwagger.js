export const setupSwagger = (path, config) => {
  const host = config.getOrElse("EXTERNAL_HOST", "localhost:3001");

  return {
    routePrefix: path,
    exposeRoute: true,
    swagger: {
      info: {
        title: "Mr. Solomons",
        description: "Money conversation service",
      },
      host,
      schemes: ["https", "http"],
      consumes: ["application/json"],
      produces: ["application/json"],
    },
  };
};
