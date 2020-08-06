require("dotenv").config();

const NODE_ENV = process.env.NODE_ENV || 'staging'

dbData = {
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
};
const config = {
  //Servidor en Produccion
  production:{
    db_url: `mongodb+srv://${dbData.dbUser}:${dbData.dbPassword}@${dbData.dbHost}/${dbData.dbName}?retryWrites=true&w=majority`
  },
  //Pruebas locales
  staging:{
    db_url: `mongodb+srv://${dbData.dbUser}:${dbData.dbPassword}@${dbData.dbHost}/${dbData.dbName}?retryWrites=true&w=majority`
  },
  //Entorno igual a produccion con dato de prueba
  test:{
    db_url: `mongodb+srv://${dbData.dbUser}:${dbData.dbPassword}@${dbData.dbHost}/${dbData.dbName}?retryWrites=true&w=majority`
  },

};
console.log(NODE_ENV)
module.exports = config[NODE_ENV];
