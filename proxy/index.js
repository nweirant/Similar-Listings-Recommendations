const express = require("express");
const proxy = require("http-proxy-middleware");

const app = express();

app.use("/", proxy({ target: "http://127.0.0.1:3011/", changeOrigin: true }));

app.listen(3000, () => console.log("Proxy Server Working!!!"));
