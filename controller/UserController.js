const catchAsyncError = require("../middleware/catchAsyncError");
const { Authentication, User } = require("../services");
const { randomString } = require("../utils/helper");
const { createUserWalletValidation } = require("../validation/UserValidation");


/**
 * @route POST /users/wallet
 * @desc create a new user wallet
 */

exports.createUserWallet = catchAsyncError(async(req, res, next) => {
    const password = randomString();
    const hashedPassword = await Authentication.hashpassword(password);
    const validateData = await createUserWalletValidation(req.body);
    const newUserWallet = await User.create({
        ...validateData,
        hashedPassword,
        isverified: true,
    });

    res.status(201).json({
        success: true,
        message: "new user wallet created",
        newUserWallet
    })

})

/**
 * @route Get users/wallet
 * @desc get all users
 */
exports.getAllWalletUsers = catchAsyncError(async(req, res, next) => {
    const users = await User.GetAllWalletUsers();

    return res.status(200).json({
        success: true,
        data: users
    })
})

