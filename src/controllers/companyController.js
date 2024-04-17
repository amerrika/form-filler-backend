const getAllCompanies = (req, res) => {
  res.send("get all companies using find()");
};

const getOneCompany = (req, res) => {
  res.send("get one company using find(id)");
};

const createNewCompany = (req, res) => {
  res.send("new company added using save()");
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
