const LodgingRepository = require("../repositories/lodgingRepository.js");
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

const update = async (id, transport) => {
  return await repository.update(id, transport);
};

module.exports = {
  save,
  findById,
  findAll,
  remove,
  update
};
