const Provider = require("../models/provider");
const { Op } = require("sequelize");
class ProviderRepository {
  constructor() {}

  async save(provider) {
    return await Provider.create(provider);
  }

  async findById(id) {
    return await Provider.findByPk(id);
  }
  async update(id, provider) {
    return await Provider.update(provider, {
      where: { id },
    });
  }

  async remove(id) {
    return await Provider.destroy({
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
    return await Provider.findAll({
      where,
      attributes: ["name", "image"],
    });
  }
}

module.exports = ProviderRepository;
