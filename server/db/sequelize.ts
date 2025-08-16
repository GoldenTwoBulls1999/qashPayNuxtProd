import { Sequelize } from 'sequelize'
import { QuoteResponse } from './models/QuoteResponse'

export const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './data/database.sqlite',
    logging: false,
})