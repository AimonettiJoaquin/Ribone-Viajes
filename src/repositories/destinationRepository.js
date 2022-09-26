const Destination = require("../models/destination");


class DestinationRepository {
  constructor() {}

  async save(d) {
    return await Destination.create(d);
  }

  async findById(id) {
    return await Destination.findByPk(id);
  }
}

module.exports = DestinationRepository;
