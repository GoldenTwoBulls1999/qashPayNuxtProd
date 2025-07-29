import * as geoip from 'geoip-country'

export default defineEventHandler(async (event) => {
  const req = event.node.req // Access the raw Node.js request object
  const headers = req.headers

  console.log(headers)

  // Prioritize x-forwarded-for as it can contain a chain of IPs
  let clientIP = headers['x-forwarded-for'] || headers['x-real-ip']

  console.log(clientIP)

  if (!clientIP) {
    return { geo: '' }
  }

  // If x-forwarded-for contains multiple IPs, the client's IP is usually the first one
  if (clientIP && typeof clientIP === 'string' && clientIP.includes(',')) {
    clientIP = clientIP.split(',')[0].trim()
  }

  console.log(clientIP)

  if (Array.isArray(clientIP)) {
    clientIP = clientIP[0]
  }

  console.log(clientIP)

  if (clientIP) {
    // clientIP = '178.151.189.190'
    var geo = geoip.lookup(clientIP)
    console.log(geo)
    return { geo }
  } else {
    return { geo: {} }
  }
})
