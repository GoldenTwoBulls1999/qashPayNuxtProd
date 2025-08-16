import { CronJob } from 'cron';
import {QuoteResponse} from "~/server/db/models/QuoteResponse";
import {Op} from "sequelize";

export default defineNitroPlugin(() => {
    console.log('Nitro plugin')

    new CronJob(
        '0 * * * * *',
        function () {
            // console.log('You will see this message every minute.');

            QuoteResponse.findAll({
                where: {
                    createdAt: {
                        [Op.lte]: new Date(Date.now() - 5 * 60 * 1000),
                    },
                },
            }).then(quoteResponses => {
                // console.log(JSON.stringify(quoteResponses));
                //
                // for (const quoteResponse of quoteResponses) {
                //     console.log(quoteResponse.id);
                //     console.log(quoteResponse.accepted);
                // }
            }).catch(console.error);

        }, // onTick
        null, // onComplete
        true, // start
    );

    console.log('Cron job initialized')
})