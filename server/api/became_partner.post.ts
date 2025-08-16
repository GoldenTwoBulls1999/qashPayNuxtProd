import {getIpFromHeaders} from "~/server/utils/utils";
import axios from "axios";

type FormData = {
    name: string;
    email: string;
    areaCode: string;
    phoneNumber: number;
    individualCheck: boolean;
    token: string;
};

export default defineEventHandler(async (event) => {
    const req = event.node.req
    const body: FormData = await readBody(event)

    console.log("became partner body:", body)

    const ip = getIpFromHeaders(req.headers)

    const formData = new FormData();
    formData.append("secret", process.env["NUXT_TURNSTILE_SECRET_KEY"]!);
    formData.append("response", body.token);
    // formData.append("remoteip", ip!);

    console.log("became partner formData:", formData)

    const result = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
        body: formData,
        method: "POST",
    });

    const outcome = await result.json();

    if (outcome.success) {
        const data = {
            "queryStringParameters": {
                "Name": body.name,
                "Email": body.email,
                "Number": body.areaCode + body.phoneNumber.toString(),
                "Individual": body.individualCheck ? "Yes" : "No",
            }
        }

        console.log("became partner data", data)

        const response = await axios.post(`${process.env.BACKEND_BASE_URL}/AddNewAgentOnboarding`, data, {headers: {'x-api-key': process.env.BACKEND_API_KEY}})

        console.log("became partner:", response.status)
        console.log("became partner:", response.data)

        if (response.status === 200) {
            return response.data
        } else {
            throw createError({
                statusCode: 400,
                statusMessage: response.data
            });
        }
    } else {
        return {};
    }
})