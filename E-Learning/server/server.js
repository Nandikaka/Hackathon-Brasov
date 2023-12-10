const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "hackathon",
});

app.get("/", (re, res) => {
  return res.json("From backend");
});

app.get("/course", (req, res) => {
  const sql = "SELECT * FROM course";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/user", (req, res) => {
  const sql = "SELECT * FROM user";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/user", (req, res) => {
  const sql = "SELECT * FROM user WHERE email = ? AND password = ?";
  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) return res.json("Failed");
    return res.json(data);
  });
});

app.listen("8801", () => {
  console.log("listening");
});
