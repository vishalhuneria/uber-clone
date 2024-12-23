const http = require("http");
const app = require("./app");
const port = process.env.PORT || 3000;

// const port = 4000;
const server = http.createServer(app);

server.listen(4000, () => {
  console.log(`server is running on port ${port}`);
});
