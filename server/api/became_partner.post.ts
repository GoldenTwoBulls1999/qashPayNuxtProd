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

    console.log("body:", body)

    let ip = getIpFromHeaders(req.headers)

    let formData = new FormData();
    formData.append("secret", process.env["TURNSTILE_SECRET_KEY"]!);
    formData.append("response", body.token);
    formData.append("remoteip", ip!);

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
    } else {
        return {};
    }
})