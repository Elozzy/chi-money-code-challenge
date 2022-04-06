const bcrypt = require("bcryptjs");

class Authentication {
  /**
   * @description Hash password
   * @param {*} data
   */
  static async hashpassword(password) {
    return bcrypt.hash(password, 10);
  }

  /**
   * @description Compare password
   * @param {*} data
   */
  static async comparePassword(password, dbpassword) {
    return bcrypt.compare(password, dbpassword);
  }
}

module.exports = Authentication;
