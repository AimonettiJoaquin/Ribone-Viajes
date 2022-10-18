const ProviderRepository = require("../repositories/providerRepository.js");
const repository = new ProviderRepository();

const save = async (provider) => {
  return await repository.save(provider);
};

const findById = async (id) => {
  return await repository.findById(id);
};

const update = async (id, provider) => {
  return await repository.update(id, provider);
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
