const PackageRepository = require("../repositories/packageRepository.js");
const repository = new PackageRepository();

const save = async (packet) => {
  return await repository.save(packet);
};

const findById = async (id) => {
  return await repository.findById(id);
};

const update = async (id, packet) => {
  return await repository.update(id, packet);
};

const remove = async (id) => {
  return await repository.remove(id);
};

const findAll = async (filter, options) => {
  return await repository.findAll(filter, options);
};

module.exports = {
  save,
  findById,
  update,
  remove,
  findAll
};
