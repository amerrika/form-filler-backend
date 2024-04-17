const dbLocal = require("db-local");
const dbConfig = require("../config/db.config");
const dbPath = dbConfig.path;

const { Schema } = new dbLocal({ path: dbPath });

const companySchema = {
  _id: Number,
  name: String,
};

const Company = Schema("Company", companySchema);
module.exports = Company;
