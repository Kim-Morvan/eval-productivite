import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import sanitizer from "sanitizer";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const port = 8070;
const host = "127.0.0.1";

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static(path.join(dirname, "public")));
app.use(
  "/favicon.ico",
  express.static(path.join(dirname, "public", "images", "favicon.png"))
);

app.get("/", (req, res) => {
  res.status(200).sendFile("index.html", { root: path.join(dirname) }, (err) => {
    if (err) throw new Error(err);
  });
});

app.post("/comment", (req, res) => {
  const comment = sanitizer.sanitize(req.body.message);
  comment ? res.status(200).send(comment) : res.status(401).send("<h1>Script non autorisé</>");

  // if (comment) {
  //   return res.status(200).send(comment);
  // }
  // res.status(401).send("<h1>Script non autorisé</>");
});

app.listen(port, host, () => {
  console.info(`Server started @ http://${host}:${port}.`);
});
