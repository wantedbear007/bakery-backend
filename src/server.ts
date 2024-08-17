import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";

// user defined
import serverRoute from "./app/routes/server.routes";
import {
  initialPage,
  missingRoutes,
  serverPort,
} from "./app/controllers/server.controller";
import { allowedCorsOrigins, useRateLimiter } from "./app/utils/serverUtils";
import { requestsOfTypeJSON } from "./app/middlewares/server.middleware";

dotenv.config();
const app = express();

app.get("/", initialPage);
app.use("/", serverRoute);

// HANDLE MISSING ROUTES
app.get("*", missingRoutes);

// Essentials
// rate limiter
app.use(useRateLimiter);
// TODO implement on only body post endpoints
// to allow only json
app.use("*", requestsOfTypeJSON);
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.json({ limit: "50mb" }));

// start app
app.listen(process.env.PORT, serverPort);

// if (process.env.CORS_ALLOW_LOCALHOST === 'true') {
//   allowedCorsOrigins.push(/localhost/);
// }

export default app;
