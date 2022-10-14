const Lodging = require("../models/lodging");
const { Op } = require("sequelize");
class LodgingRepository {
  constructor() {}

  async save(lodging) {
    return await Lodging.create(lodging);
  }
  
  async findAll({ name, destinationId }, { limit, offset }) {
    let where = {};
    if (name) {
      where.name = {
        [Op.substring]: name,
      };
    }
    if (destinationId) {
      where.destinationId = {
        [Op.eq]: destinationId,
      };
    }
    return await Lodging.findAll({
      where,
      attributes: ["name", "description", "image", "destinationId"],
    });
  }

  async findById(id) {
    return await Lodging.findByPk(id);
  }

  async remove(id) {
    return await Lodging.destroy({
      where: {
        id,
      },
    });
  }

  async update(id, lodging) {
    return await Lodging.update(lodging, {
      where: { id },
    });
  }
}

module.exports = LodgingRepository;
