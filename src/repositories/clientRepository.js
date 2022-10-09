const Client = require("../models/client");
const { Op } = require("sequelize");
class ClientRepository {
  constructor() {}

  async save(client) {
    return await Client.create(client);
  }
}

module.exports = ClientRepository;
