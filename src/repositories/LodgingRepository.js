const Lodging = require("../models/lodging");
class LodgingRepository {
  constructor() {}

  async save(lodging) {
    return await Lodging.create(lodging);
  }
}

module.exports = LodgingRepository;
