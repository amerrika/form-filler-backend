const dbLocal = require("db-local");
const dbConfig = require("../config/db.config");
const dbPath = dbConfig.path;

const { Schema } = new dbLocal({ path: dbPath });

const companySchema = {
  _id: { type: Number, required: true },
  companyId: { type: Number, required: true },
  companyTaxId: { type: Number, required: false },
  companyFullName: { type: String, required: true },
  companyShortName: { type: String, required: true },
  companyType: { type: String, required: true },
  companyOffice: {
    city: { type: String, required: true },
    street: { type: String, required: true },
    streetNumber: { type: String, required: true },
  },
  companyContact: {
    phone: { type: String, required: false },
    email: { type: String, required: false },
  },
};

const Company = Schema("Company", companySchema);
module.exports = Company;
