const db = require("../models/index");
const Company = db.companies;
const { v4: uuid } = require("uuid");

const getAllCompanies = (req, res) => {
  try {
    const data = Company.find();
    res.send(data);
  } catch (error) {
    res.status(500).send({
      message: "Error happened while getting all companies",
    });
    console.log("Error happened while getting all companies!", error);
  }
};

const getOneCompany = (req, res) => {
  try {
    const id = req.params.id;
    const data = Company.find(id);
    res.send(data);
  } catch (error) {
    res.status(500).send({
      message: "Error happened while getting a company",
    });
    console.log(`Error happened while getting a company with id: ${id}`, error);
  }
};

const createNewCompany = (req, res) => {
  try {
    // get data from client: req.body
    const companyData = {
      companyId: 42663,
      companyTaxId: 2663,
      companyFullName: "Company City Full Name",
      companyShortName: "Company Short Name",
      companyType: "doo",
      companyOffice: {
        city: "Cazin",
        street: "Ulica",
        streetNumber: "bb",
      },
      companyContact: {
        phone: "+98869696",
        email: "company@company.at",
      },
    };
    Company.create({
      ...companyData,
      _id: uuid(),
      createdAt: new Date().toLocaleString("en-GB"),
    }).save();
    res.send({
      message: "New company was created",
    });
  } catch (error) {
    res.status(500).send({
      message: "Error happened when creating new company",
    });
    console.log("Error happened when creating new company!", error);
  }
};

const updateOneCompany = (req, res) => {
  console.log("update a company using update(id)");
};

const deleteOneCompany = (req, res) => {
  console.log("delete a company using remove(id)");
};

const deleteAllCompanies = (req, res) => {
  console.log("delete all companies)");
};

module.exports = {
  getAllCompanies,
  getOneCompany,
  createNewCompany,
  updateOneCompany,
  deleteOneCompany,
  deleteAllCompanies,
};
