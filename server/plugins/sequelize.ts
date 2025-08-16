import { sequelize } from '../db/sequelize'
import '../db/models/QuoteResponse'

export default defineNitroPlugin(async () => {
    try {
        await sequelize.authenticate()
        console.log('SQLite DB connected via Sequelize')

        await sequelize.sync()
        console.log('SQLite DB synchronized')
    } catch (err) {
        console.error('❌ DB connection error:', err)
    }
})
