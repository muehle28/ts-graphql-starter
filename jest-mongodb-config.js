module.exports = {
  mongodbMemoryServerOptions: {
    instance: {
      dbName: "jest",
    },
    binary: {
      version: "5.0.8", // Version of MongoDB
      skipMD5: true,
    },
    autoStart: false,
  },
};
