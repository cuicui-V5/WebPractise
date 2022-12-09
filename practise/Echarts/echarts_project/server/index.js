import express from "express";
const app = express();
// 导入路由
import { router as r1 } from "./router/one.js";
import { router as r2 } from "./router/two.js";
import { router as r3 } from "./router/three.js";
import { router as r4 } from "./router/four.js";
import { router as r5 } from "./router/map.js";

// cors中间件
import cors from "cors";
app.use(cors());
// 使用路由
app.use("/one", r1);
app.use("/two", r2);
app.use("/three", r3);
app.use("/four", r4);
app.use("/map", r5);

app.listen(1234, "localhost", () => {
    console.log("server started at http://localhost:1234");
});
