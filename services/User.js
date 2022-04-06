const models = require("../models");
const ErrorHandler = require("../utils/ErrorHandler");
const {
  Sequelize: { Op }
} = models;



class User {
/**
 * create user wallet
 * 
 */
static async create(data) {
  const isVerified = data.isVerified ? data.isVerified : false;
  return await models.user.create({
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    password: data.hashedPassword,
    amount: data.amount,
    plan:data.plan,
    isVerified,
  })

}

/**
 * Get all wallet users
 */

static async GetAllWalletUsers() {
  return await models.user.findAll({
    attributes: { exclude: ['password', "deletedAt"]}
  })
}
}

module.exports = User;