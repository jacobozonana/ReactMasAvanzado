require("dotenv").config();

const NODE_ENV = process.env.NODE_ENV || 'STAGING'

dbData = {
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
};
const config = {
  //Servidor en Produccion
  PRODUCTION:{
    db_url: `mongodb+srv://${dbData.dbUser}:${dbData.dbPassword}@${dbData.dbHost}/${dbData.dbName}?retryWrites=true&w=majority`
  },
  //Pruebas locales
  STAGING:{
    db_url: `mongodb+srv://${dbData.dbUser}:${dbData.dbPassword}@${dbData.dbHost}/${dbData.dbName}?retryWrites=true&w=majority`
  },
  //Entorno igual a produccion con dato de prueba
  TEST:{
    db_url: `mongodb+srv://${dbData.dbUser}:${dbData.dbPassword}@${dbData.dbHost}/${dbData.dbName}?retryWrites=true&w=majority`
  },

};
console.log(NODE_ENV)
module.exports = config[NODE_ENV];
