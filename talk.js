import express from "express";
import mysql from "mysql2/promise";
import cors from "cors";

const pool = mysql.createPool({
  host: "localhost",
  user: "",
  password: "",
  database: "",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const app = express();
const port = 3000;
app.use(express.json());

const corsOptions = {
  origin: "https://cdpn.io",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

app.get("/todos", async (req, res) => {
  const [[rows]] = await pool.query(
    `SELECT * FROM todo ORDER BY RAND() LIMIT 1`
  );
  await pool.query(`UPDATE todo SET hit = hit + 1 WHERE id = ?`, [rows.id]);
  rows.hit++;

  res.json([rows]);
});

app.patch("/todos", async (req, res) => {
  const { id, like, dislike } = req.body;

  const [rs] = await pool.query(
    `UPDATE todo SET \`like\` = \`like\`+ ?, dislike = dislike + ? WHERE id = ?`,
    [like, dislike, id]
  );
  res.json();
});

app.listen(port);
