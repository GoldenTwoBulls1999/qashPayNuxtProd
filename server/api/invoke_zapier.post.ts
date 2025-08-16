import axios from 'axios'
import {QuoteResponse} from "~/server/db/models/QuoteResponse";

type FormData = {
    "Unique_Quote_ID": string
    "Accepted": string
};

export default defineEventHandler(async (event) => {
    const body: FormData= await readBody(event)

    console.log("body:", body)

    const quoteResponse = await QuoteResponse.findByPk(body.Unique_Quote_ID);
    if (quoteResponse !== null) {
        quoteResponse.accepted = body.Accepted;
        await quoteResponse.save();
    }

    const data = {
        "queryStringParameters": {
            "Unique_Quote_ID": body.Unique_Quote_ID,
            "Accepted": body.Accepted,
        }
    }

    console.log("data", data)

    const response = await axios.post(`${process.env.BACKEND_BASE_URL}/Invoke_Zapier`, data, {headers: {'x-api-key': process.env.BACKEND_API_KEY}})

    console.log(response.status)
    console.log(response.data)

    if (response.status === 200) {
        return response.data
    } else {
        setResponseStatus(event, response.status, response.data);
    }
})