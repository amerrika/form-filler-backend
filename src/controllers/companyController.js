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
    console.log(req)
    const data = req.body;

    Company.create({
      ...data,
      _id: uuid(),
      createdAt: new Date().toLocaleString("en-GB"),
    }).save();
    res.send({
      message: "New company was created",
    });
  } catch (error) {
    res.status(500).send({
      message: "Error happened when creating a new company",
    });
    console.log("Error happened when creating a new company!", error);
  }
};

const updateOneCompany = (req, res) => {
  try {
    const id = req.params.id;
    Company.update(id).save();
    res.send({
      message: "Company was sucessfully updated",
    });
  } catch (error) {
    res.status(500).send({
      message: "Error happened while updating company",
    });
    console.log(`Error happened while updating company with id: ${id}`, error);
  }
};

const deleteOneCompany = (req, res) => {
  try {
    const id = req.params.id;
    Company.remove(id);
    res.send({
      message: "Company was sucessfully deleted",
    });
  } catch (error) {
    res.status(500).send({
      message: "Error happened while deleting company",
    });
    console.log(`Error happened while deleting company with id: ${id}`, error);
  }
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
