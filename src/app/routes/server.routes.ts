import { Router } from "express";

// user defined
import { health } from "../controllers/server.controller";

const serverRoute = Router();

serverRoute.get("/health", health);

export default serverRoute;
