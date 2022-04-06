const {
  createUserWallet,
  getAllWalletUsers
} = require("../../controller/UserController");

const router = require("express").Router();

/**
 * @swagger
 * tags:
 *   name: Wallet
 *   description: User Wallet
 */

/**
 * @swagger
 * /users/wallet:
 *   post:
 *     tags:
 *        [Wallet]
 *     description: To create a user wallet
 *     parameters:
 *      - name: firstName
 *        description: First Name
 *        in: formData
 *        required: true
 *        type: string
 *      - name: lastName
 *        description: Last Name
 *        in: formData
 *        required: true
 *        type: string
 *      - name: email
 *        description: email
 *        in: formData
 *        required: true
 *        type: string
 *      - name: password
 *        description: password
 *        in: formData
 *        required: true
 *        type: string
 *      - name: amount
 *        description: amount
 *        in: formData
 *        required: true
 *        type: integer
 *      - name: plan
 *        description: plan
 *        in: formData
 *        required: true
 *        type: string
 *        enum: [Basic, Business, Premium]
 *     responses:
 *       201:
 *         description: Created
 *         examples:
 *            application/json: {
                    "success": true,
                    "message": "new user wallet created",
                    "newUserWallet": {
                        "id": 10,
                        "firstName": "eloghosa",
                        "lastName": "osagie",
                        "email": "primary@gmail.com",
                        "password": "$2a$10$2BH1q5E8FuKRs47YIOllE.gRQVIb454tRgb/O2hbCfb/3YfQ2MZTC",
                        "amount": 10,
                        "plan": "Basic",
                        "isVerified": false,
                        "updatedAt": "2022-04-06T21:30:03.664Z",
                        "createdAt": "2022-04-06T21:30:03.664Z"
    }
}
 */
router.post("/wallet", createUserWallet);

/**
 * @swagger
 * /users/wallet:
 *   get:
  *     tags:
 *        [Wallet]
 *     description: Get all users
 *     responses:
 *       200:
 *         description: Success
 *         examples:
 *           application/json: {             
 *           "id": 3,
            "firstName": "eloghosa",
            "lastName": "osagie",
            "email": "tst@gmail.com",
            "plan": "Basic",
            "amount": 10,
            "isVerified": false,
            "createdAt": "2022-04-06T19:08:39.000Z",
            "updatedAt": "2022-04-06T19:08:39.000Z" 
        }
 *          
 * 
 */
router.get("/wallet", getAllWalletUsers);

/**
 * @swagger
 * /users/ping:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.get("/ping", (req, res) => {
  res.send("pong");
});

module.exports = router;
