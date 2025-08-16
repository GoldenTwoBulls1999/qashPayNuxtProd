import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../sequelize'

export class QuoteResponse extends Model {
    declare id: number
    declare accepted: string
}

QuoteResponse.init(
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        accepted: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        modelName: 'QuoteResponse',
        tableName: 'quote_response',
        timestamps: true,
    }
)
