const Destination = require("../models/destination");
const { Op } = require("sequelize");
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

  async remove(id) {
    return await Destination.destroy({
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
    return await Destination.findAll({
      where,
      attributes: ["name", "description", "image"],
    });
  }
}

module.exports = DestinationRepository;
