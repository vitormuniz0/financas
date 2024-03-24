import { Sequelize } from "sequelize"

export const sequelize = new Sequelize('financas' , 'root' , 'vitormuniz',{
    host: 'localhost',
    dialect:'mysql'
 })

