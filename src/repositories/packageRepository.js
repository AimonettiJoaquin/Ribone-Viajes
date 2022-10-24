const Package = require("../models/Package");
const { Op } = require("sequelize");
class PackageRepository {
  constructor() {}

  async save(packet) {
    return await Package.create(packet);
  }

  async findById(id) {
    return await Package.findByPk(id);
  }
  async update(id, packet) {
    return await Package.update(packet, {
      where: { id },
    });
  }

  async remove(id) {
    return await Package.destroy({
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
    return await Package.findAll({
      where,
      attributes: ["name", "description", "image"],
    });
  }
}

module.exports = PackageRepository;
