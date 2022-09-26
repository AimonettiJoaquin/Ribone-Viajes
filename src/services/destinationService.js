const DestinationRepository = require("../repositories/destinationRepository");
const repository = new DestinationRepository();

const save = async (d) => {
  return await repository.save(d);
};

const findById = async (id) => {
  return await repository.findById(id);
};

const update = async (id, a) => {
  return await repository.update(id, a);
};

module.exports = {
  save,
  findById,
  update
};
