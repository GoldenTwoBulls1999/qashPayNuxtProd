import type { IncomingHttpHeaders } from 'http'

export function getIpFromHeaders(headers: IncomingHttpHeaders): string | undefined {
    let clientIP = headers['x-forwarded-for'] || headers['x-real-ip']
    if (clientIP && typeof clientIP === 'string' && clientIP.includes(',')) {
        clientIP = clientIP.split(',')[0].trim()
    }
    if (Array.isArray(clientIP)) {
        clientIP = clientIP[0]
    }
    console.log(clientIP)

    return clientIP
}