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

  async remove(id) {
    return await Transport.destroy({
      where: {
        id,
      },
    });
  }

  async findAll({ name }, { limit, offset }) {
    let where = {};
    if (name) {
      where.name = {
        [Op.substring]: name,
      };
    }
    return await Transport.findAll({
      where,
      attributes: ["name"],
    });
  }
}

module.exports = TransportRepository;
