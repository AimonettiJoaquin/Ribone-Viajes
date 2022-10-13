const Client = require("../models/client");
const { Op } = require("sequelize");
class ClientRepository {
  constructor() {}

  async save(client) {
    return await Client.create(client);
  }

  async findById(id) {
    return await Client.findByPk(id);
  }

  async findAll({ name, lastName }, { limit, offset }) {
    let where = {};
    if (name) {
      where.name = {
        [Op.substring]: name,
      };
    }
    if (lastName) {
      where.lastName = {
        [Op.substring]: lastName,
      };
    }
    return await Client.findAll({
      where,
      attributes: ["name", "lastName"],
    });
  }

  async update(id, client) {
    return await Client.update(client, {
      where: { id },
    });
  }
}

module.exports = ClientRepository;
