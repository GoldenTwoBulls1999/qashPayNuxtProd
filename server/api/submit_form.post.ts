import axios from 'axios'

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

    const response = await axios.post(`${process.env.BACKEND_BASE_URL}/Submit_Form`, data, { headers: { 'x-api-key': process.env.BACKEND_API_KEY } })
    console.log(response.data)
    console.log(response.status)

    if (response.status === 200) {
        return response.data
    } else {
        setResponseStatus(event, response.status, response.data);
    }
})
