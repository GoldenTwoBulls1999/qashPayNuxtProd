import axios from 'axios'
import {QuoteResponse} from "~/server/db/models/QuoteResponse";

type FormData = {
    firstName: string;
    lastName: string;
    email: string;
    companyName: string;
    industry: string;
    country: string;
    monthlyTransactionVolumeAmount: string;
    monthlyTransactionVolumeCurrency: string;
    monthlyCardTransactions: string;
    monthlyChargebacks: string;
    processRecurringPayments: boolean;
    processCardPeriod: boolean;
};

type FormDataResponse = {
    message: string
    quote: {
        Unique_Quote_ID: string
        "IC++ Fee": string
        "Transaction Fee": string
        "Refund Fee": string
        "3DS Fee": string
        "Chargeback Fee": string
        "Monthly Minimum": string
        "Quote Currency": string
        "Risk Group": string
    }
}

export default defineEventHandler(async (event) => {
    const body: FormData = await readBody(event)

    const data = {
        "queryStringParameters": {
            "First Name": body.firstName,
            "Surname": body.lastName,
            "Email Address": body.email,
            "Company Name": body.companyName,
            "Industry": body.industry,
            "Country of registered office": body.country.toLocaleUpperCase(),
            "Monthly Card Volume": body.monthlyTransactionVolumeAmount,
            "Number of monthly card trans": body.monthlyCardTransactions,
            "Average chargebacks per month": body.monthlyChargebacks,
            "Recurring billing": body.processRecurringPayments ? "Yes" : "No",
            "Card schemes": "VISA",
            "Selected Currency": body.monthlyTransactionVolumeCurrency,
            "6 Months Processing": body.processCardPeriod ? "Yes" : "No",
        }
    }

    const response = await axios.post<{statusCode: number, body: string}>(`${process.env.BACKEND_BASE_URL}/Submit_Form`, data, { headers: { 'x-api-key': process.env.BACKEND_API_KEY } })
    console.log("Submit_Form Response data:", response.data)

    const formDataResponse: FormDataResponse = JSON.parse(response.data.body)
    console.log(response.status)
    console.log(formDataResponse)

    if (formDataResponse.message === "Quote determination successful!") {
        await QuoteResponse.create({id: formDataResponse.quote.Unique_Quote_ID})
    } else if (formDataResponse.message === "Quote declined.") {
        const data = {
            "queryStringParameters": {
                "Unique_Quote_ID": formDataResponse.quote.Unique_Quote_ID,
                "Accepted": "System Decline",
            }
        }

        await axios.post(`${process.env.BACKEND_BASE_URL}/Invoke_Zapier`, data, {headers: {'x-api-key': process.env.BACKEND_API_KEY}})
    }

    if (response.status === 200) {
        return response.data
    } else {
        throw createError({
            statusCode: response.status,
            statusMessage: formDataResponse.message
        });
    }
})
