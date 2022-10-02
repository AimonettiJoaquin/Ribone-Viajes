const TransportRepository = require("../repositories/transportRepository.js");
const repository = new TransportRepository();

const save = async (transport) => {
  return await repository.save(transport);
};
const findById = async (id) => {
  return await repository.findById(id);
};

const update = async (id, transport) => {
  return await repository.update(id, transport);
};
module.exports = {
  save,
  findById,
  update,
};
