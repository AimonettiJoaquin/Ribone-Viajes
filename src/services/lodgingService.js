const LodgingRepository = require("../repositories/LodgingRepository.js");
const repository = new LodgingRepository();

const save = async (lodging) => {
  return await repository.save(lodging);
};


module.exports = {
    save
  };
  