const { Sequelize, DataBase, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  "postgresql://postgres.rquggciltgxcmxrllwak:samratbelbase@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres"
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Authenticated Succesfully");
  })
  .catch((e) => {
    console.error(e + "Error occured");
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.blogs = require("./models/blogModel")(sequelize, DataTypes);

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Migration done");
  })
  .catch((e) => {
    console.error(e);
  });

module.exports = db;
