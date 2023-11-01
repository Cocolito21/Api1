import express from "express";
import cors from "cors";
import data from "./server/routes/data.routes.js";
import img from "./server/routes/img.routes.js";
import log from "./server/routes/login.js";
import comment from "./server/routes/comentario.js";

const app = express();

app.use(cors());

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use("/api", data);
app.use("/api", comment);
app.use("/api", img);
app.use("/api", log);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
