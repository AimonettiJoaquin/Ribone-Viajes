const DestinationRepository = require("../repositories/destinationRepository");
const repository = new DestinationRepository();

const save = async (destination) => {
  return await repository.save(destination);
};

const findById = async (id) => {
  return await repository.findById(id);
};

const update = async (id, destination) => {
  return await repository.update(id, destination);
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
