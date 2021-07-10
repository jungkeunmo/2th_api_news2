import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import globalRouter from "./routers/globalRouter";

const PORT = 3000;
const app = express();

app.set("view engine", "pug");
app.use(morgan(`dev`));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", globalRouter);

app.listen(PORT, () => {
    console.log(`${PORT} SERVER START🥕`);
});