# chi-money-code-challenge

# About

Assuming Chi money has 3 set of users and each users create chi-wallets based on a set of plans e.g Business plan, Premium plan and Basic plan. And each plans determine the maximum amount a user can hold and the priviliges a user has on the chi-wallet app.

## Tech Stack Used

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MySQl](https://www.mysql.com/)
- [Sequelize](https://sequelize.org/)

## Application Features

- endpoint to create a user wallet
- endpoint to get all user and their current

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/Elozzy/chi-money-code-challenge.git

# Navigate into the cloned repository
$ cd into the currently cloned directory

# Install dependencies
$ npm install

# Create .env file for environmental variables in your root directory like the example.env file and provide the keys

# Run the app
$ npm start

# Check the port on the specified port on the env or 4000

#To migrate tables and schema
$ npm run migrate
```

## API endpoints

**Base_URL**-> localhost:4000/

- Create User wallet :

```
{
  path: '/users/wallet',
  method: POST,
  body: {
        firstName: <string>,
        lastName:  <string>,
        email: <string>,
        password: <string>,
        amount: <integer>,
        plan: <enum>,
  }
}
```


## Author

Eloghosa Osagie

## License

ISC

---