const Destination = require("../models/destination");


class DestinationRepository {
  constructor() {}

  async save(destination) {
    return await Destination.create(destination);
  }

  async findById(id) {
    return await Destination.findByPk(id);
  }
  async update(id, destination) {
    return await Destination.update(destination, {
      where: { id },
    });
  }
}


module.exports = DestinationRepository;
