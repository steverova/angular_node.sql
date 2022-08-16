const express = require("express");
const router = express.Router();
const { poolPromise } = require("../Connection/DB");
const sql = require("mssql");

router.get("/api-person", async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .query("select * from tb_person;", function (err, profileset) {
        if (err) {
          console.log(err);
        } else {
          var send_data = profileset.recordset;
          res.json(send_data);
        }
      });
  } catch (err) {
    res.status(500);
    res.send(err.message);
  }
});

router.get("/api-person/:id", async (req, res) => {
   console.log('Current: '+req.params.id);
  try {
    const pool = await poolPromise;
    const current = req.params.id;
    const result = await pool
      .request()
      .query(
        `select * from tb_person where id = ${current};`,
        function (err, profileset) {
          if (err) {
            console.log(err);
          } else {
            var send_data = profileset.recordset;
            res.json(send_data);
          }
        }
      );
  } catch (err) {
    res.status(500);
    res.send(err.message);
  }
});

router.post("/api-person", async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .input("nombre", req.body.nombre)
      .input("apellido", req.body.apellido)
      .input("cedula", req.body.cedula)
      .execute("Add_Person")
      .then(function (recordSet) {
        res.status(200).json({ status: "Add Success" });
      });
  } catch (err) {
    res.status(400).json({ message: "invalid" });
    res.send(err.message);
  }
});

router.put("/api-person", async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .input("id", req.body.id)
      .input("nombre", req.body.nombre)
      .input("apellido", req.body.apellido)
      .input("cedula", req.body.cedula)
      .execute("Update_Person")
      .then(function (recordSet) {
        res.status(200).json({ status: "Updated Success" });
      });
  } catch (err) {
    res.status(400).json({ message: "invalid" });
    res.send(err.message);
  }
});

router.delete("/api-person/:id", async (req, res) => {

  console.log(req.params.id);
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .input("id", req.params.id)
      .execute("Delete_Person")
      .then(function (err, recordSet) {
        res.status(200).json({ status: " Deleted Success" });
      });
  } catch (err) {
    res.status(500);
    res.send(err.message);
  }
}); 

module.exports = router;
