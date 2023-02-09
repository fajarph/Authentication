import { Sequelize } from "sequelize";

const db = new Sequelize('auth_db','postgres','27fajar03',{
    host: 'localhost',
    dialect: 'postgres'
})

export default db