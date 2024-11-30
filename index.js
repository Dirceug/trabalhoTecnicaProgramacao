const server = require("./server");

(async () => {
  await server.start();
  console.log("Server listening on: " + server.info.uri);
    await server.start();
})();
