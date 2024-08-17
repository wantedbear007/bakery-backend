export const allowedCorsOrigins = [process.env.DEV_URL];

export enum statusCodes {
  notFound = 404,
  success = 200,
  unacceptable = 406,
  // more to be added
}
