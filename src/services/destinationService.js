const DestinationRepository = require("../repositories/destinationRepository");
const repository = new DestinationRepository();

const save = async (d) => {
  return await repository.save(d);
};

module.exports = {
  save,
};
