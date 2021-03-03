import express from "express";
const app = express();
const port = process.env.PORT || "8000";
import { LocalStorage } from "node-localstorage";
const localStorage = new LocalStorage("./scratch");
// import ip from "ip";

import bodyParser from "body-parser";
import cors from "cors";
app.use([cors(), bodyParser.json()]);

import getCarInfo from "./src/getCarInfo.js";
import parkMyCar from "./src/parkMyCar.js";
import unParkMyCar from "./src/unParkMyCar.js";
import allParking from "./parking.js";

/**
 * Set the static Json in a localStorage
 */
let parkingList;
if (!JSON.parse(localStorage.getItem("parking")).length) {
  localStorage.setItem("parking", JSON.stringify(allParking));
  parkingList = JSON.parse(localStorage.getItem("parking"));
} else {
  parkingList = JSON.parse(localStorage.getItem("parking"));
}

/**
 * Get all parking List
 */
app.get("/getList", function (req, res) {
  res.json(parkingList);
});

/**
 * Car/Slot Information:
 */

app.get("/getCarInfo", (req, res) => {
  getCarInfo(parkingList, req.body, res);
});

/**
 * Park a Car
 */
app.get("/parkMyCar", (req, res) => {
  parkMyCar(parkingList, req.body, res);
});

/**
 * Unpark the Car:
 */
app.get("/unParkMyCar", (req, res) => {
  unParkMyCar(parkingList, req.body, res);
});
app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
