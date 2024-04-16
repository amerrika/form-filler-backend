const express = require("express");
const router = express.Router();

router.get("/", console.log("get all companies"));
router.get("/:id", console.log("get existing company"));
router.post("/", console.log("create new company"));
router.put("/:id", console.log("update exisiting company"));
router.delete("/:id", console.log("delete existing company"));
router.delete("/", console.log("delete all companies"));

module.exports = router;
