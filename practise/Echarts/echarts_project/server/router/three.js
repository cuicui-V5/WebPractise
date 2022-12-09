import express from "express";
import data from "../mock/three.json" assert { type: "json" };
console.log(data);
export const router = express.Router();

router.get("/data", (req, res) => {
    res.send(data);
});
