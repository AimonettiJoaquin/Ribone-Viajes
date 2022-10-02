const Transport = require("../models/transport");
const { Op } = require("sequelize");
class TransportRepository {
  constructor() {}

  async save(transport) {
    return await Transport.create(transport);
  }

  async findById(id) {
    return await Transport.findByPk(id);
  }

  async update(id, transport) {
    return await Transport.update(transport, {
      where: { id },
    });
  }
}

module.exports = TransportRepository;
