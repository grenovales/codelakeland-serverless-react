export function success(body) {
  return buildResponse(200, body);
}

export function failure(body) {
  return buildResponse(500, body);
}

export function NotFound(body) {
  return buildResponse(404, body);
}

export function Unauthorized(body) {
  return buildResponse(401, body);
}

export function Forbidden(body) {
  return buildResponse(403, body);
}

function buildResponse(statusCode, body) {
  return {
    statusCode: statusCode,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true
    },
    body: JSON.stringify(body)
  };
}
