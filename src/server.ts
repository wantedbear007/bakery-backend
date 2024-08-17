import express, { Request, Response, Router } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";

// user defined
import serverRoute from "./app/routes/server.routes";
import {
  initialPage,
  missingRoutes,
  serverPort,
} from "./app/controllers/server.controller";
import { allowedCorsOrigins } from "./app/utils/serverUtils";
import { requestsOfTypeJSON } from "./app/middlewares/server.middleware";

const app = express();

dotenv.config();

// start app

app.get("/", initialPage);
app.use("/", serverRoute);
// HANDLE MISSING ROUTES
app.get("*", missingRoutes);
// TODO implement on only body post endpoints
// to allow only json
app.use("*", requestsOfTypeJSON);
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.json({ limit: "50mb" }));
app.listen(process.env.PORT, serverPort);

// if (process.env.CORS_ALLOW_LOCALHOST === 'true') {
//   allowedCorsOrigins.push(/localhost/);
// }

// start services
async function startServices(): Promise<void> {
  // database connectivity
  // app connectivity

  const name = process.env.SERVER;
  console.log(name);
}

startServices();

export default app;
