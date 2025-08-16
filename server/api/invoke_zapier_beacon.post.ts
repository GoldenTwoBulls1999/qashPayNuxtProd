import axios from 'axios'
import {QuoteResponse} from "~/server/db/models/QuoteResponse";

type FormData = {
    "Unique_Quote_ID": string
    "Accepted": string
};

export default defineEventHandler(async (event) => {
    const stringBody: string = await readBody(event)
    const body: FormData = JSON.parse(stringBody)

    console.log("invoke_zapier_beacon body:", body)

    const quoteResponse = await QuoteResponse.findByPk(body.Unique_Quote_ID);
    if (quoteResponse !== null) {
        await quoteResponse.destroy();
    }

    const data = {
        "queryStringParameters": {
            "Unique_Quote_ID": body.Unique_Quote_ID,
            "Accepted": body.Accepted,
        }
    }

    console.log("invoke_zapier_beacon data", data)

    const response = await axios.post(`${process.env.BACKEND_BASE_URL}/Invoke_Zapier`, data, {headers: {'x-api-key': process.env.BACKEND_API_KEY}})

    console.log(response.status)
    console.log(response.data)

    if (response.status === 200) {
        return response.data
    } else {
        setResponseStatus(event, response.status, response.data);
    }
})