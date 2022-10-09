const ClientRepository = require("../repositories/clientRepository.js");
const repository = new ClientRepository();

const save = async (client) => {
  return await repository.save(client);
};

module.exports = {
  save
};
