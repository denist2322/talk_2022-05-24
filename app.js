import express from "express";
import mysql from "mysql2/promise";
import cors from "cors";

const pool = mysql.createPool({
  host: "localhost",
  user: "sm",
  password: "1234",
  database: "a9",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const app = express();
app.use(express.json());

var corsOptions = {
  origin: "https://cdpn.io",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

const port = 3005;

// 조회 ============================================================================
app.get("/todos", async (req, res) => {
  const [rows] = await pool.query(`SELECT * FROM todo ORDER BY id`);
  res.json(rows);
});

// 단건조회 ========================================================================
app.get("/todos/:id", async (req, res) => {
  const { id } = req.params;
  const [rows] = await pool.query(`SELECT * FROM todo WHERE id = ?`, [id]);
  res.json(rows[0]);
});

// 생성 post ============================================================================
app.post("/todos", async (req, res) => {
  const { reg_Date, perform_date, is_completed, content } = req.body;

  if (!reg_Date) {
    req.status(400).json({
      msg: "no data of regDate",
    });
    return;
  }

  if (!perform_date) {
    req.status(400).json({
      msg: "no data of perform_date",
    });
    return;
  }

  if (!is_completed) {
    req.status(400).json({
      msg: "no data of is_completed",
    });
    return;
  }

  if (!content) {
    req.status(400).json({
      msg: "no data of content",
    });
    return;
  }

  const [rs] = await pool.query(
    `
  INSERT INTO todo SET
  reg_Date = ?,
  perform_date = ?, 
  is_completed = ?, 
  content = ?
  `,
    [reg_Date, perform_date, is_completed, content]
  );

  res.json({
    msg: "create success",
  });
});

// 수정 patch ============================================================================
app.patch("/todos/:id", async (req, res) => {
  const { id } = req.params;
  const [rows] = await pool.query(`SELECT * FROM todo WHERE id = ?`, [id]);

  if (rows.length == 0) {
    res.status(404).json({
      msg: "not found",
    });
    return;
  }

  const { perform_date, is_completed, content } = req.body;

  if (!perform_date) {
    res.status(400).json({
      msg: "not perform_date",
    });
    return;
  }

  if (!is_completed) {
    res.status(400).json({
      msg: "not is_completed",
    });
    return;
  }

  if (!content) {
    res.status(400).json({
      msg: "not content",
    });
    return;
  }

  const [rs] = await pool.query(
    `
   UPDATE todo SET
   perform_date = ?, 
   is_completed = ?, 
   content = ?
   WHERE id = ?
   `,
    [perform_date, is_completed, content, id]
  );

  res.json({
    msg: `${id} update success.`,
  });
});
// 삭제 delete ============================================================================
app.delete("/todos/:id", async (req, res) => {
  const { id } = req.params;
  const [rows] = await pool.query(`SELECT * FROM todo WHERE id = ?`, [id]);

  if (rows.length == null) {
    req.status(404).json({
      msg: "not found",
    });
    return;
  }

  const [rs] = await pool.query(`DELETE FROM todo WHERE id = ?`, [id]);

  res.json({
    msg: `${id} DELETE success`,
  });
});

app.listen(port);
