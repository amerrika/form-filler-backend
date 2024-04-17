const dbLocal = require("db-local");
const dbConfig = require("../config/db.config");
const dbPath = dbConfig.path;

const { Schema } = new dbLocal({ path: dbPath });

const citySchema = {
  _id: { type: String, required: true },
  cityName: { type: String, required: true },
  cityPostal: { type: Number, required: true },
  cityCode: { type: Number, required: true },
};
