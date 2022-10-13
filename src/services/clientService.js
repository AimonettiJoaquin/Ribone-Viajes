const ClientRepository = require("../repositories/clientRepository.js");
const repository = new ClientRepository();

const save = async (client) => {
  return await repository.save(client);
};

const findById = async (id) => {
  return await repository.findById(id);
};

const findAll = async (filter, options) => {
  return await repository.findAll(filter, options);
};

const update = async (id, client) => {
  return await repository.update(id, client);
};

module.exports = {
  save,
  findById,
  findAll,
  update
};
