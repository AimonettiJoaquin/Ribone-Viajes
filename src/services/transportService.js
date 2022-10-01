const TransportRepository = require("../repositories/transportRepository.js");
const repository = new TransportRepository();

const save = async (transport) => {
    return await repository.save(transport);
  };

  module.exports = {
    save
  };
  