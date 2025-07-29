import axios from 'axios'

type FormData = {
    "Company_Name": string
    "Country": string
    "Accepted": string
};

export default defineEventHandler(async (event) => {
    const body: FormData= await readBody(event)

    console.log("body:", body)

    const data = {
        "queryStringParameters": {
            "Company_Name": body.Company_Name,
            "Country": body.Country,
            "Accepted": body.Accepted,
        }
    }

    console.log("data", data)

    const response = await axios.post(`${process.env.BACKEND_BASE_URL}/AddToAcceptQuotes`, data, {headers: {'x-api-key': process.env.BACKEND_API_KEY}})

    console.log(response.status)
    console.log(response.data)

    if (response.status === 200) {
        return response.data
    } else {
        setResponseStatus(event, response.status, response.data);
    }
})