const Transport = require("../models/transport");
const { Op } = require("sequelize");
class TransportRepository {
  constructor() {}

  async save(destination) {
    return await Transport.create(destination);
  }
}

module.exports = TransportRepository;
