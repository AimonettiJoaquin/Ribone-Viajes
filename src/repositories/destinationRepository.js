const Destination = require("../models/destination");


class DestinationRepository {
  constructor() {}

  async save(d) {
    return await Destination.create(d);
  }

}

module.exports = DestinationRepository;
