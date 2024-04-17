const express = require("express");
const router = express.Router();
const companyController = require("../controllers/companyController");

router.get("/", companyController.getAllCompanies);
router.get("/:id", companyController.getOneCompany);
router.post("/", companyController.createNewCompany);
router.put("/:id", companyController.updateOneCompany);
router.delete("/:id", companyController.deleteOneCompany);
router.delete("/", companyController.deleteAllCompanies);

module.exports = router;
