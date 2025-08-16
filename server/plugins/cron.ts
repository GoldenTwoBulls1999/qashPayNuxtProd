import { CronJob } from 'cron';
import {QuoteResponse} from "~/server/db/models/QuoteResponse";
import {Op} from "sequelize";
import axios from "axios";

export default defineNitroPlugin(() => {
    console.log('Nitro plugin')

    new CronJob(
        '0 * * * * *',
        function () {
            // console.log('You will see this message every minute.');

            QuoteResponse.findAll({
                where: {
                    createdAt: {
                        [Op.lte]: new Date(Date.now() - 25 * 60 * 1000),
                    },
                },
            }).then(async (quoteResponses) => {
                console.log(JSON.stringify(quoteResponses));

                for (const quoteResponse of quoteResponses) {
                    console.log(quoteResponse.id);

                    const data = {
                        "queryStringParameters": {
                            "Unique_Quote_ID": quoteResponse.id,
                            "Accepted": "Timed Out",
                        }
                    }

                    console.log("Cron Invoke_Zapier data:", data)

                    await axios.post(`${process.env.BACKEND_BASE_URL}/Invoke_Zapier`, data, {headers: {'x-api-key': process.env.BACKEND_API_KEY}});

                    await quoteResponse.destroy();
                }
            }).catch(console.error);

        }, // onTick
        null, // onComplete
        true, // start
    );

    console.log('Cron job initialized')
})