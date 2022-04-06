const Joi = require("@hapi/joi");
const isEmpty = require("./is-empty");

exports.createUserWalletValidation = (data) => {
  data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
  data.lastName = !isEmpty(data.lastName) ? data.lastName : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.plan = !isEmpty(data.plan) ? data.plan : "";
  data.amount = !isEmpty(data.amount) ? data.amount : "";

  const walletSchema = Joi.object({
    firstName: Joi.string().trim().required().messages({
      "string.base": "Firstname must be string",
      "string.empty": "First name field is required",
      "any.required": "First name field is required"
    }),
    lastName: Joi.string().trim().required().messages({
      "string.base": "lastname must be string",
      "string.empty": "Last name field is required",
      "any.required": "Last name field is required"
    }),
    email: Joi.string().email().trim().required().messages({
      "string.email": "Not a valid email",
      "string.base": "Not a valid email",
      "string.empty": "Email field is required",
      "any.required": "Email field is required"
    }),
    plan: Joi.string().trim().required().messages({
      "string.empty": "Plan  is required",
      "any.required": "plan is required"
    }),
    amount: Joi.number().min(10).required().messages({
      "number.base": "amount  Must be a number",
      "string.empty": "Plan  is required",
      "any.required": "plan is required"
    }),
    password: Joi.string().trim().min(8).required().messages({
      "string.empty": "Password field is required",
      "string.min": "Password must be atleast 8 character long",
      "any.required": "Password field is required"
    })
  });
  return walletSchema.validateAsync(data, { abortEarly: false });
};
