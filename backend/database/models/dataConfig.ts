// const { Sequelize } = require("sequelize");
import { Sequelize } from 'sequelize';

// const DATABASE_URI = process.env.DATABASE_URI;
console.log("dbModel URI: ", process.env.DATABASE_URI);
const databaseURI = "postgres://whktcalcfxaozo:28c1ee0fe107da0d8d192123a003ca8d406adedb1caf64ce6ce0a6bcde6f0a38@ec2-54-164-56-10.compute-1.amazonaws.com:5432/da1si5vp3hl089";
// Passing a connection URI
const db = new Sequelize(databaseURI, {
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
    keepAlive: true,
  },
  ssl: true,
});

db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = {db};



// const dbModel = {
//   sequelize: new Sequelize(DATABASE_URI, 
//   {
//       dialect: 'postgres',
//       protocol: 'postgres',
//       dialectOptions: {
//         ssl: {
//           require: true,
//           rejectUnauthorized: false,
//         },
//         keepAlive: true,
//       },
//       ssl: true,
//     }),

// }
// module.exports = dbModel;


// export function define() {
//   throw new Error('Function not implemented.');
// }
  // const connectionTest=async function connectionTest() {
  //   try {
  //     await sequelize.authenticate();
  //     console.log('Connection has been established successfully.');
  //   } catch (error) {
  //     console.error('Unable to connect to the database:', error);
  //   }
  // }



