import {getIpFromHeaders} from "~/server/utils/utils";

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

    console.log("response:", outcome);

    return {};
})