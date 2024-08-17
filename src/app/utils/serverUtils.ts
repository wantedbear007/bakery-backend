import rateLimit from "express-rate-limit";

export const allowedCorsOrigins = [process.env.DEV_URL];

export enum statusCodes {
  notFound = 404,
  success = 200,
  unacceptable = 406,
  // more to be added
}

export const useRateLimiter = rateLimit({
  windowMs: 8 * 60 * 1000, // 8 minutes
  limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
  standardHeaders: "draft-7", // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
  message: { message: "You are hitting the endpoints very frequently" },
});
