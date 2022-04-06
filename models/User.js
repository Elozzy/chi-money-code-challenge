const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "First name field is required"
          }
        }
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "Last name field is required"
          }
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: {
            args: true,
            msg: "Email is not valid"
          },
          notEmpty: {
            args: true,
            msg: "Email field is required"
          }
        }
      },
      plan: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: ["Basic", "Business", "Premium"],
        validate: {
          notNull: {
            args: true,
            msg: "plan field is required"
          }
        },
        defaultValue: "Basic"
      },
      amount :{
        type: DataTypes.BIGINT,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "amount field is required, put a minimum of 10chi-money"
          }
        }
      },
      isVerified: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Password field is required"
          }
        }
      }
    },
    { paranoid: true }
  );

  //  relationship
  User.associate = function (models) {};

  // instance method
  return User;
};
