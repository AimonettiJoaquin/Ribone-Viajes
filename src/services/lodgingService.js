const LodgingRepository = require("../repositories/LodgingRepository.js");
const repository = new LodgingRepository();

const save = async (lodging) => {
  return await repository.save(lodging);
};
const findById = async (id) => {
  return await repository.findById(id);
};

const findAll = async (filter, options) => {
  return await repository.findAll(filter, options);
};

const remove = async (id) => {
  return await repository.remove(id);
};

module.exports = {
  save,
  findById,
  findAll,
  remove
};
