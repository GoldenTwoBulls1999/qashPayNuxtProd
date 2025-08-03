import * as geoip from 'geoip-country'
import {getIpFromHeaders} from "~/server/utils/utils";

export default defineEventHandler(async (event) => {
  const req = event.node.req // Access the raw Node.js request object

  let clientIP = getIpFromHeaders(req.headers)

  if (!clientIP) {
    return { geo: '' }
  }

  if (clientIP) {
    var geo = geoip.lookup(clientIP)
    return { geo }
  } else {
    return { geo: {} }
  }
})
